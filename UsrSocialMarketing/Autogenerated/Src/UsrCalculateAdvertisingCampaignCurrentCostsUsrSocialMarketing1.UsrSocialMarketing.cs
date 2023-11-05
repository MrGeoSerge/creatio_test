namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: UsrCalculateAdvertisingCampaignCurrentCostsUsrSocialMarketing1MethodsWrapper

	/// <exclude/>
	public class UsrCalculateAdvertisingCampaignCurrentCostsUsrSocialMarketing1MethodsWrapper : ProcessModel
	{

		public UsrCalculateAdvertisingCampaignCurrentCostsUsrSocialMarketing1MethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "UsrDailyStatisticsAdvertisingCampaign");
			var costColumn = esq.AddColumn("UsrSpentToday"); //SELECT UsrPriceUSD as UsrPriceUSD, UsrArea as UsrArea FROM UsrRealtyFreedomUI WHERE...
			
			Guid campaignId = Get<Guid>("AdvertisingIdParameter");
						
			var typeFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrMrktCampaignId", campaignId);
			esq.Filters.Add(typeFilter);
			
			string sqlText = esq.GetSelectQuery(UserConnection).GetSqlText();
			Set("SqlTextParameter", sqlText);
						
			var entityCollection = esq.GetEntityCollection(UserConnection);
			
			decimal totalCost = 0;
			foreach(var entity in entityCollection){
				decimal price = entity.GetTypedColumnValue<decimal>(costColumn.Name);
				totalCost = totalCost + price;
			}
			
			
			Set("TotalCostParameter", totalCost);
						
			return true;
		}

		#endregion

	}

	#endregion

}

