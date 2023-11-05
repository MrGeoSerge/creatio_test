define("UsrDailyStatisticsPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "ComboBox_ptomrcu",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_lqacvy0",
					"labelPosition": "above",
					"control": "$LookupAttribute_lqacvy0",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_5a7261j",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_5a7261j_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ptomrcu",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_1ypoxii",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_xmj7yn7",
					"labelPosition": "above",
					"control": "$NumberAttribute_xmj7yn7"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_bxbg0y9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_kg9ldd7",
					"labelPosition": "above",
					"control": "$NumberAttribute_kg9ldd7"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_bcu9y0e",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_w4rucsz",
					"labelPosition": "above",
					"control": "$NumberAttribute_w4rucsz"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_qcfn430",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_j053n69",
					"labelPosition": "above",
					"control": "$NumberAttribute_j053n69",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_9k759es",
				"values": {
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_fdqu19x",
					"labelPosition": "above",
					"control": "$DateTimeAttribute_fdqu19x",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"LookupAttribute_lqacvy0": {
						"modelConfig": {
							"path": "UsrDailyStatisticsAdvertisingCampaignDS.UsrMrktCampaignId"
						}
					},
					"NumberAttribute_xmj7yn7": {
						"modelConfig": {
							"path": "UsrDailyStatisticsAdvertisingCampaignDS.UsrClicks"
						},
						"validators": {
							"PosititveNumberValidator": {
								"type": "usr.PosititveNumberValidator",
								"params": {
									"minValue": 0,
									"message": "The number should be positive"
								}
							}
						}
					},
					"NumberAttribute_kg9ldd7": {
						"modelConfig": {
							"path": "UsrDailyStatisticsAdvertisingCampaignDS.UsrVisits"
						},
						"validators": {
							"PosititveNumberValidator": {
								"type": "usr.PosititveNumberValidator",
								"params": {
									"minValue": 0,
									"message": "The number should be positive"
								}
							}
						}
					},
					"NumberAttribute_w4rucsz": {
						"modelConfig": {
							"path": "UsrDailyStatisticsAdvertisingCampaignDS.UsrSpentToday"
						}
					},
					"NumberAttribute_j053n69": {
						"modelConfig": {
							"path": "UsrDailyStatisticsAdvertisingCampaignDS.UsrClicksPerVisit"
						}
					},
					"DateTimeAttribute_fdqu19x": {
						"modelConfig": {
							"path": "UsrDailyStatisticsAdvertisingCampaignDS.CreatedOn"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrDailyStatisticsAdvertisingCampaignDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrDailyStatisticsAdvertisingCampaign"
							}
						}
					},
					"primaryDataSourceName": "UsrDailyStatisticsAdvertisingCampaignDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				handler: async (request, next) => {	
					this.console.log('HandleViewModelAttributeChangeRequest: ' + request.attributeName);
					if(request.attributeName === 'NumberAttribute_xmj7yn7' ||
					  request.attributeName === 'NumberAttribute_kg9ldd7'){
						var clicks = await request.$context.NumberAttribute_xmj7yn7;
						var visits = await request.$context.NumberAttribute_kg9ldd7;
						if(visits == 0){
							return next?.handle(request)
						}
						var clicksPerVisit = clicks / visits;
						request.$context.NumberAttribute_j053n69 = clicksPerVisit;
					}
				return next?.handle(request)
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"usr.PosititveNumberValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect){
							result = null;
						} else {
							result = {
								"usr.PosititveNumberValidator": {
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}	
		}/**SCHEMA_VALIDATORS*/
	};
});