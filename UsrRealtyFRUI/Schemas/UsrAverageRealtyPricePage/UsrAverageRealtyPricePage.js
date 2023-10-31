define("UsrAverageRealtyPricePage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "TopAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"visible": true
				}
			},
			{
				"operation": "insert",
				"name": "RichTextEditor_pixhjmv",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 3
					},
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.StringAttribute_wxzqiii",
					"labelPosition": "auto",
					"control": "$StringAttribute_wxzqiii"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_egm1evu",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 3
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_54byv9e",
					"labelPosition": "auto",
					"control": "$NumberAttribute_54byv9e",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"StringAttribute_wxzqiii": {
						"modelConfig": {
							"path": "PageParameters.UsrRichTextParameter1"
						}
					},
					"NumberAttribute_54byv9e": {
						"modelConfig": {
							"path": "PageParameters.UsrIntegerParameter1"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});