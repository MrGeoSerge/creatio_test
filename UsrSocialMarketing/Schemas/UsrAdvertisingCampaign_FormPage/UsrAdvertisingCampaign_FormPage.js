define("UsrAdvertisingCampaign_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrAdvertisingCampaign"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "59e93a5b-4083-4cfd-9bd7-1506b8d1f6d4",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "UsrCalculateCostsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(UsrCalculateCostsButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalculateAdvertisingCampaignCurrentCosts",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "CampaignIdParameter"
						}
					},
					"clickMode": "default",
					"icon": "money-icon"
				},
				"parentName": "MainHeaderTop",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrEndDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.DateTimeAttribute_wodseh0",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_wodseh0",
					"pickerType": "date"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrAdvertisingPlatform",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_4q5ixao",
					"labelPosition": "auto",
					"control": "$LookupAttribute_4q5ixao",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_dftcapw",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_dftcapw_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrAdvertisingPlatform",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrMaximumCost",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.LookupAttribute_ft358xo",
					"labelPosition": "auto",
					"control": "$LookupAttribute_ft358xo"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrCurrency",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_6uroa6i",
					"labelPosition": "auto",
					"control": "$LookupAttribute_6uroa6i",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_qtmt9le",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_qtmt9le_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrCurrency",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCurrentCost",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_cdj14qb",
					"labelPosition": "auto",
					"control": "$NumberAttribute_cdj14qb",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrIsHighPriceAgreed",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.BooleanAttribute_j1glrqo",
					"labelPosition": "auto",
					"control": "$BooleanAttribute_j1glrqo"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrCurrentCostUSD",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_h76241z",
					"labelPosition": "auto",
					"control": "$NumberAttribute_h76241z"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrCurrencySetting2",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_um4dau4",
					"labelPosition": "auto",
					"control": "$StringAttribute_um4dau4",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "UsrCurrency5",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "#ResourceString(Input_eod4nxn_label)#",
					"control": "",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "UsrCurrencyRate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrCurrencyUsrCurrencyRate",
					"control": "$UsrCurrencyUsrCurrencyRate",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "UsrConvenientPrice",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(UsrConvinientPrice_label)#",
					"control": "",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_f0stljw",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_f0stljw_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_38tu4wy",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_f0stljw",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_5aw2k8i",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_38tu4wy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_cpjqrhh",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_cpjqrhh_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrDailyStatisticsAdvertisingCampaign",
							"defaultValues": [
								{
									"attributeName": "UsrMrktCampaignId",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_5aw2k8i",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_0dbeasv",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_0dbeasv_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_ycgn8hoDS"
						}
					}
				},
				"parentName": "FlexContainer_5aw2k8i",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_p7e7xle",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_p7e7xle_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_5aw2k8i",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_6z47p5e",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_6z47p5e_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_ycgn8ho"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_p7e7xle",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_aemiir1",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_aemiir1_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrDailyStatisticsAdvertisingCampaign"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_p7e7xle",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_n31mlvd",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_n31mlvd_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_ycgn8ho"
					]
				},
				"parentName": "FlexContainer_5aw2k8i",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_dhovhud",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_f0stljw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_ycgn8ho",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_ycgn8ho",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_ycgn8hoDS_Id",
					"columns": [
						{
							"id": "8f32f5f3-131b-e362-4782-230b13ffa716",
							"code": "GridDetail_ycgn8hoDS_UsrClicks",
							"caption": "#ResourceString(GridDetail_ycgn8hoDS_UsrClicks)#",
							"dataValueType": 4,
							"width": 114
						},
						{
							"id": "cbafbac9-e406-1287-63a2-35ae7e5c5109",
							"code": "GridDetail_ycgn8hoDS_UsrVisits",
							"path": "UsrVisits",
							"caption": "#ResourceString(GridDetail_ycgn8hoDS_UsrVisits)#",
							"dataValueType": 4,
							"width": 114
						},
						{
							"id": "4dd7231b-f853-77fa-db48-4ce94b86bf95",
							"code": "GridDetail_ycgn8hoDS_UsrClicksPerVisit",
							"path": "UsrClicksPerVisit",
							"caption": "#ResourceString(GridDetail_ycgn8hoDS_UsrClicksPerVisit)#",
							"dataValueType": 33,
							"width": 149
						},
						{
							"id": "bcc8c26c-e851-a423-ffab-a48f394a7944",
							"code": "GridDetail_ycgn8hoDS_UsrSpentToday",
							"path": "UsrSpentToday",
							"caption": "#ResourceString(GridDetail_ycgn8hoDS_UsrSpentToday)#",
							"dataValueType": 32
						}
					]
				},
				"parentName": "GridContainer_dhovhud",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"DateTimeAttribute_wodseh0": {
						"modelConfig": {
							"path": "PDS.UsrEndDate"
						}
					},
					"LookupAttribute_4q5ixao": {
						"modelConfig": {
							"path": "PDS.UsrAdvertisingPlatform"
						}
					},
					"LookupAttribute_ft358xo": {
						"modelConfig": {
							"path": "PDS.UsrMaximumCost"
						}
					},
					"NumberAttribute_cdj14qb": {
						"modelConfig": {
							"path": "PDS.UsrCurrentCost"
						}
					},
					"LookupAttribute_6uroa6i": {
						"modelConfig": {
							"path": "PDS.UsrCurrency"
						}
					},
					"NumberAttribute_h76241z": {
						"modelConfig": {
							"path": "PDS.UsrCurrentCostUSD"
						}
					},
					"BooleanAttribute_j1glrqo": {
						"modelConfig": {
							"path": "PDS.UsrIsHighPriceAgreed"
						}
					},
					"GridDetail_ycgn8ho": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_ycgn8hoDS",
							"sortingConfig": {
								"default": []
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_ycgn8hoDS_UsrClicks": {
									"modelConfig": {
										"path": "GridDetail_ycgn8hoDS.UsrClicks"
									}
								},
								"GridDetail_ycgn8hoDS_UsrVisits": {
									"modelConfig": {
										"path": "GridDetail_ycgn8hoDS.UsrVisits"
									}
								},
								"GridDetail_ycgn8hoDS_UsrClicksPerVisit": {
									"modelConfig": {
										"path": "GridDetail_ycgn8hoDS.UsrClicksPerVisit"
									}
								},
								"GridDetail_ycgn8hoDS_UsrSpentToday": {
									"modelConfig": {
										"path": "GridDetail_ycgn8hoDS.UsrSpentToday"
									}
								},
								"GridDetail_ycgn8hoDS_Id": {
									"modelConfig": {
										"path": "GridDetail_ycgn8hoDS.Id"
									}
								}
							}
						}
					},
					"StringAttribute_um4dau4": {
						"modelConfig": {
							"path": "PDS.UsrCurrencySetting2"
						}
					},
					"UsrCurrencyUsrCurrencyRate": {
						"modelConfig": {
							"path": "PDS.UsrCurrencyUsrCurrencyRate"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_ycgn8hoDS": [
							{
								"attributePath": "UsrMrktCampaignId",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrAdvertisingCampaign",
							"attributes": {
								"UsrCurrencyUsrCurrencyRate": {
									"path": "UsrCurrency.UsrCurrencyRate",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_ycgn8hoDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrDailyStatisticsAdvertisingCampaign",
							"attributes": {
								"UsrClicks": {
									"path": "UsrClicks"
								},
								"UsrVisits": {
									"path": "UsrVisits"
								},
								"UsrClicksPerVisit": {
									"path": "UsrClicksPerVisit"
								},
								"UsrSpentToday": {
									"path": "UsrSpentToday"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			/*{
        		request: "crt.HandleViewModelInitRequest",
        		handler: async (request, next) => {
					//not showing value on UI when set here//
					const sysSettingService = new sdk.SysSettingsService();
            		const systemCurrency = await sysSettingService.getByCode('UsrSystemCurrency');
					this.console.log("systemCurrency = " + systemCurrency.value);
					request.$context.StringAttribute_um4dau4 = systemCurrency.value;
            		request.$context.UsrCurrency5_PropertiesBindingAttribute = systemCurrency.value;
					return next?.handle(request);
        		}
    		},*/
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				handler: async (request, next) => {	
					//set System currency field
					const sysSettingService = new sdk.SysSettingsService();
            		const systemCurrency = await sysSettingService.getByCode('UsrSystemCurrency');
					this.console.log("systemCurrency = " + systemCurrency.value);
            		request.$context.StringAttribute_um4dau4 = systemCurrency.value;
					
					//set CurrentCostUSD field
					var costInUAH = await request.$context.NumberAttribute_cdj14qb;
					var currencyRate = await request.$context.UsrCurrencyUsrCurrencyRate;
					if(!currencyRate){
						var costInUSD = costInUAH / currencyRate;
						request.$context.NumberAttribute_h76241z = costInUSD;						
					}
					
					//set ConvenientPrice//TODO
					var costInUAH = await request.$context.NumberAttribute_cdj14qb;
					var currencyRate = await request.$context.UsrCurrencyUsrCurrencyRate;
					if(!currencyRate){
						var costInUSD = costInUAH / currencyRate;
						request.$context.NumberAttribute_h76241z = costInUSD;						
					}
					
					this.console.log('HandleViewModelAttributeChangeRequest: ' + request.attributeName);
					if(request.attributeName === 'LookupAttribute_ft358xo' ||
					  request.attributeName === 'BooleanAttribute_j1glrqo'){
						this.console.log("HandleViewModelAttributeChangeRequest for the attribute");
						var maximumCost = await request.$context.LookupAttribute_ft358xo;
						this.console.log("maximumCost = " + maximumCost);
						var isHighPriceAgreed = await request.$context.BooleanAttribute_j1glrqo;
						this.console.log("isHighPriceAgreed = " + isHighPriceAgreed);
						if(isHighPriceAgreed || maximumCost <= 10000){
							return next?.handle(request)
						}
						maximumCost = 10000;
						this.console.log("maximumCost = " + maximumCost);
						request.$context.LookupAttribute_ft358xo = maximumCost;
						Terrasoft.showInformation("If high price is not agreed, then Maximum cost is limited to 10 000");
					}
				return next?.handle(request)
				}
			}
			
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			
			
		}/**SCHEMA_VALIDATORS*/
	};
});