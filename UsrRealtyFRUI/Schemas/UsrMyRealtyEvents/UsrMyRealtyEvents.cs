namespace Terrasoft.Configuration
{
    using System;
    using Terrasoft.Common;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;
    [EntityEventListener(SchemaName = "UsrRealtyFRUI")]
    public class RealtyEntityEventListener : BaseEntityEventListener
    {
        public override void OnSaving(object sender, EntityBeforeEventArgs e)
        {
            base.OnSaving(sender, e);
            Entity realty = (Entity)sender;
            decimal price = realty.GetTypedColumnValue<decimal>("UsrPriceUSD");
            if (price > 1_000_000_000)
            {
                e.IsCanceled = true;

                string messageTemplate = new LocalizableString(realty.UserConnection.ResourceStorage,
                    "UsrMyRealtyEvents", "LocalizableStrings.ValueIsTooBig.Value").ToString();

                string message = string.Format(messageTemplate, "1.0B$");
                throw new Exception(message);
            }
        }
    }
}