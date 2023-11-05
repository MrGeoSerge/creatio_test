﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrDailyStatisticsServiceSchema

	/// <exclude/>
	public class UsrDailyStatisticsServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrDailyStatisticsServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrDailyStatisticsServiceSchema(UsrDailyStatisticsServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("aaf91f3c-cde1-484f-b72c-125bc01397b9");
			Name = "UsrDailyStatisticsService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("be1e2051-a373-4651-8062-2cce5d691976");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,197,86,77,111,227,54,16,189,47,176,255,129,21,122,144,208,128,190,111,154,2,177,227,13,220,194,113,16,39,155,195,162,7,154,28,219,132,37,81,75,82,142,189,65,254,123,135,162,28,75,178,28,43,77,129,242,224,68,228,204,227,124,60,206,76,202,18,48,25,227,64,238,65,107,102,212,220,210,129,74,231,114,145,107,102,165,74,63,127,122,254,252,137,224,202,141,76,23,100,186,53,22,18,58,5,189,150,28,198,74,64,124,126,226,156,62,194,236,164,204,37,183,114,93,92,216,34,218,166,141,160,136,96,12,106,76,45,179,80,147,169,250,162,129,94,245,143,156,58,144,129,74,146,198,173,85,117,119,72,255,52,173,118,209,187,60,181,50,1,231,138,100,177,252,121,232,64,19,10,15,253,113,175,247,189,12,0,134,219,106,198,109,120,131,185,32,23,36,184,98,50,222,58,167,164,177,146,155,32,250,219,171,52,21,118,219,151,38,187,1,139,248,25,170,204,100,44,237,246,14,126,228,82,67,2,169,53,97,245,195,69,27,239,56,161,226,164,104,185,33,118,215,103,249,44,150,156,240,152,25,67,26,54,150,150,145,47,164,207,12,148,95,103,100,116,7,76,76,82,148,172,100,202,163,149,172,42,28,152,100,224,201,214,240,172,56,196,28,141,210,181,90,65,56,6,187,84,194,69,232,118,50,189,15,206,72,95,9,180,97,27,59,143,80,108,140,151,176,5,188,238,210,62,211,112,182,135,114,203,57,5,198,126,85,58,97,182,166,230,183,138,84,159,161,152,201,84,106,224,109,185,168,98,103,25,29,99,181,75,251,8,117,181,109,4,41,108,124,23,204,39,162,190,25,237,33,159,235,166,203,57,9,27,194,116,192,48,131,114,145,142,48,44,23,228,58,151,130,14,147,204,110,163,186,106,3,201,45,187,212,234,137,164,240,68,134,27,14,153,139,126,24,84,224,204,82,229,177,32,51,32,153,86,107,41,64,4,209,121,29,230,101,199,229,221,26,44,129,175,70,243,75,177,70,231,165,227,127,193,48,4,28,110,208,96,211,52,63,58,111,34,88,189,61,105,185,80,24,106,64,30,74,190,50,183,160,191,225,77,46,69,161,63,136,14,98,84,8,146,222,81,129,2,192,28,216,226,86,175,215,187,159,92,77,190,224,107,6,242,4,179,165,82,8,101,21,145,69,130,49,121,150,181,233,185,184,122,14,132,15,248,139,188,78,129,187,24,71,135,178,110,209,81,106,85,24,60,24,221,224,72,53,150,101,114,130,99,24,223,88,140,220,14,143,28,23,34,83,176,197,45,99,189,178,251,100,143,4,62,166,129,138,243,36,165,183,76,99,25,178,160,223,224,90,212,229,10,31,246,78,192,133,100,39,80,159,170,46,160,94,178,19,232,52,195,154,119,175,4,219,118,1,222,75,191,35,12,59,154,182,93,80,39,242,105,208,129,6,172,162,162,191,109,79,91,157,111,116,144,107,141,6,187,93,218,37,115,88,148,228,92,254,199,240,116,184,1,158,91,8,15,95,252,75,253,147,51,203,151,36,124,173,73,4,54,255,178,150,181,150,96,132,43,5,2,242,155,195,62,85,210,52,216,92,167,36,152,172,126,9,42,178,53,185,76,187,209,5,200,90,73,113,186,6,126,172,9,76,33,198,200,19,227,255,92,20,78,251,189,211,133,134,250,100,22,180,116,179,70,91,33,161,95,181,74,10,137,142,149,135,62,46,65,3,134,27,251,3,29,153,225,143,156,197,225,71,107,9,51,165,83,141,244,148,221,149,151,218,229,192,228,131,177,227,216,148,179,152,233,223,189,232,31,45,140,115,125,212,159,162,189,55,121,28,79,116,209,51,195,42,108,211,172,142,172,251,53,120,72,153,235,78,216,34,230,50,21,164,18,69,194,75,34,144,39,105,151,4,185,242,124,60,44,47,109,221,182,242,239,71,166,167,235,97,151,225,233,81,179,44,3,241,255,204,79,215,96,135,27,12,70,12,225,241,183,240,250,54,255,106,190,205,90,144,190,95,97,147,110,196,230,173,89,182,120,145,135,67,170,67,25,67,50,67,54,239,6,117,254,154,174,160,197,21,55,141,145,202,68,245,76,22,96,207,145,173,248,83,207,96,27,180,239,158,45,176,50,181,164,28,105,222,133,184,246,173,243,8,162,111,151,239,67,52,251,190,217,130,90,142,105,251,118,217,4,47,147,244,242,15,105,161,50,170,131,14,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("aaf91f3c-cde1-484f-b72c-125bc01397b9"));
		}

		#endregion

	}

	#endregion

}
