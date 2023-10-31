namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrMyRealtyEventsSchema

	/// <exclude/>
	public class UsrMyRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrMyRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrMyRealtyEventsSchema(UsrMyRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("116e3061-08e3-4774-9fc3-d6d1cebbdfee");
			Name = "UsrMyRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("da071f34-2b93-4bfe-a2fa-94af93f09739");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,81,107,219,48,16,126,47,244,63,28,102,15,54,4,145,190,182,91,161,201,210,17,104,183,17,59,123,41,101,40,242,197,213,144,37,35,201,233,188,209,255,190,147,229,180,169,211,65,15,140,173,211,119,223,221,119,254,52,175,209,53,92,32,20,104,45,119,102,235,217,220,232,173,172,90,203,189,52,250,244,228,239,233,9,80,180,78,234,10,242,206,121,172,47,14,83,135,133,117,109,244,127,47,45,178,133,246,210,75,116,239,193,176,197,14,181,223,67,239,250,116,215,231,110,36,13,161,209,166,185,120,192,154,127,37,13,240,9,146,181,179,43,228,202,119,215,171,245,50,201,238,99,97,211,110,148,20,32,20,119,14,226,253,27,84,112,14,51,238,240,141,155,200,50,44,225,128,208,236,104,108,89,34,236,140,44,225,155,206,249,142,196,164,102,243,11,133,7,135,186,68,59,129,72,56,195,45,41,235,105,175,108,229,0,179,23,186,3,230,16,27,154,130,61,179,237,105,48,187,120,13,139,188,96,123,61,36,62,141,137,44,22,140,192,37,10,89,115,5,141,149,34,108,42,86,177,47,232,139,174,193,114,110,84,91,235,31,92,181,248,113,128,94,166,97,155,223,3,126,157,127,78,198,221,229,22,210,72,118,9,103,63,167,211,233,254,201,94,227,70,218,66,32,91,186,57,215,2,21,150,52,138,183,45,18,249,49,206,121,27,188,65,238,116,188,194,2,235,70,113,31,134,215,248,8,55,70,112,37,255,240,141,194,188,199,165,131,164,181,67,75,246,213,244,11,200,187,108,133,206,180,86,16,200,88,98,153,28,183,9,17,164,222,118,131,53,122,207,37,19,72,142,122,56,214,175,104,233,10,99,102,178,138,167,36,99,133,25,102,200,222,33,132,4,196,4,187,54,182,230,62,29,9,164,198,103,108,58,251,112,180,242,16,254,193,154,199,126,1,139,223,2,155,32,113,95,63,134,63,189,28,135,79,122,61,253,3,107,28,149,198,238,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("3d5905cb-f9a5-280a-d754-0e4bfbe140fa"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("da071f34-2b93-4bfe-a2fa-94af93f09739"),
				CreatedInSchemaUId = new Guid("116e3061-08e3-4774-9fc3-d6d1cebbdfee"),
				ModifiedInSchemaUId = new Guid("116e3061-08e3-4774-9fc3-d6d1cebbdfee")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("116e3061-08e3-4774-9fc3-d6d1cebbdfee"));
		}

		#endregion

	}

	#endregion

}

