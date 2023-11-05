namespace Terrasoft.Configuration
{
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using System;
    using System.Web.SessionState;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;
    using Terrasoft.Common.Json;
    using System.Runtime.Serialization;
    using Terrasoft.Common;

    //[ServiceContract(Name = "DailyStatistics")]
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class DailyStatisticsService : BaseService, IReadOnlySessionState
    {
        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Bare,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public string InsertDailyStatistics(DailyStatisticsModel dailyStatistics)
        {
            if (dailyStatistics.CampaignId == Guid.Empty)
            {
                throw new Exception("CampaignId should be provided");
            }

            CheckIfAdvertisingCompaignExists(dailyStatistics);

            try
            {
                double clicksPerVisit = (double)dailyStatistics.Clicks / (double)dailyStatistics.Visits;

                ///TODO: use webhooks to insert data

                new Insert(UserConnection)
                    .Into("UsrDailyStatisticsAdvertisingCampaign")
                    .Values()
                        .Set("UsrMrktCampaignIdId", Column.Parameter(dailyStatistics.CampaignId))
                        .Set("UsrClicks", Column.Parameter(dailyStatistics.Clicks))
                        .Set("UsrVisits", Column.Parameter(dailyStatistics.Visits))
                        .Set("UsrSpentToday", Column.Parameter(dailyStatistics.SpentToday))
                        .Set("UsrClicksPerVisit", Column.Parameter(clicksPerVisit))
                        .Set("CreatedById", Column.Parameter(UserConnection.CurrentUser.Id))
                        .Set("ModifiedById", Column.Parameter(UserConnection.CurrentUser.Id))
                    .Execute();

            }
            catch (Exception ex)
            {
                throw new Exception("InsertDailyStatistics exception" + ex);
            }

            return "Ok!";
        }

        private void CheckIfAdvertisingCompaignExists(DailyStatisticsModel dailyStatistics)
        {
            Select select = new Select(UserConnection)
                .Column("UsrName")
                .From("UsrAdvertisingCampaign")
                .Where("Id").IsEqual(Column.Parameter(dailyStatistics.CampaignId))
                 as Select;
            string campaignName = select.ExecuteScalar<string>();

            if (string.IsNullOrEmpty(campaignName))
            {
                throw new Exception($"Unable to find Advertising compaign with id {dailyStatistics.CampaignId}");
            }
        }

        [OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public string GetExample()
        {
            return "OK!";
        }
    }

    [DataContract]
    public class DailyStatisticsModel
    {
        [DataMember(Name = "campaignId")]
        public Guid CampaignId { get; set; }

        [DataMember(Name = "clicks")]
        public int Clicks { get; set; }

        [DataMember(Name = "visits")]
        public int Visits { get; set; }

        [DataMember(Name = "spentToday")]
        public double SpentToday { get; set; }
    }
}