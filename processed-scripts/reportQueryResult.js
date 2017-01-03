   var height = "";
   var rowNum = "";
   var val = "";
   var sortName = "";
   var currHeadMetas = "";
   var initHeadMetas = "";
   var addDemoType = "";
   var index_addColor = "";

   var select_id = "";

   var field_info_all = [];

   var reportQueryResult = {
   	init: function() {
   		height = kk - 83;
   		rowNum = Math.floor(height / 30);
   		reportQueryResult.getReportResultData("init");
   		//reportQueryResult.queryReportFieldColor(); 


   	},
   	orShow: function() {
   		$("#download_div").css('display', 'block');
   	},
   	orHidden: function() {
   		$("#download_div").css('display', 'none');
   	},
   	queryReportFieldColor: function() {
   		var data = {
   			"report_id": val[0].reportCheckInfo.report_id
   		};
   		var dataStr = JSON.stringify(data);
   		var res = commonAjax(configUrl_main.srpt_rcpt_queryReportFieldColor, dataStr, "", "");
   		//var res = commonAjax("/srpt/rcpt/queryReportFieldColor",dataStr,"",""); 
   		if (res.success) {
   			return res.data; //[{"id":"20160603145441","name":"他","type":"1","strategy":"[{\"min\":\"\",\"color\":\"FFFFFF\",\"max\":\"\"}]","field":"EGCI"},{"id":"20160603145418","name":"全国通取","type":"1","strategy":"[{\"min\":\"\",\"color\":\"FFFFFF\",\"max\":\"\"}]","field":"行政区域"}]
   		} else {
   			alert("获取颜色数据失败!");
   		};
   	},
   	/*queryReportLieWidth : function(){
   	                  var data = {
   	                               "ifId":"srpt-cfg-reportInfo",
   	                               "report_id":val[0].reportCheckInfo.report_id,
   	                               "fields":"stamp"
   	                               };
   	                   var dataStr = JSON.stringify(data);
   	                   var res = commonAjax(configUrl_main.query_reportInfo,dataStr,"",""); 
   	                   //var res = commonAjax("/srpt/rcpt/common/query",dataStr,"",""); 
   	                   var stampStr = res.data.STAMP;
   	                   if (stampStr == null || stampStr == "null") {
   	                       return [];
   	                   };
   	                   //console.log("stampStr----"+stampStr);
   	                   var stampArr = eval('(' + stampStr + ')');
   	                   //console.log(stampArr);
   	                   return stampArr;
   	},*/
   	getReportResultData: function(flaga) {


   		if (fromWhere == "autoReportId") {
   			val = parent.autoReport.showQueryReportResultData();
   		};
   		if (fromWhere == "mainE") {
   			val = parent.mainE.showQueryReportResultData();
   		};
   		if (fromWhere == "myReport") {
   			val = parent.myReport.showQueryReportResultData();
   		};
   		if (fromWhere == "reportQuery") {
   			val = parent.reportQuery.showQueryReportResultData();
   		};

   		var data = val[0];
   		$("#Gridtitle").html(val[1]);
   		var columnsConfigs = [];
   		var columnsConfig = [];
   		if (data.data == null) {
   			$("#con_list").html("数据加载失败!");
   			return;
   		};

   		var columnsName = data.data.headMetas;
   		initHeadMetas = columnsName;



   		//init  index "field_info" data
   		if (flaga == "init") {
   			if (data.field_info == null || data.field_info == "null") {
   				reportQueryResult.initField_info();
   			} else {
   				field_info_all = val[0].field_info;
   			};
   		} else {
   			$("#con_grid_div").html("");
   			var htmlStr = '<table id="con_grid_div_grid"></table>' +
   				'<div id="con_grid_div_gridPager"></div>';
   			$("#con_grid_div").html(htmlStr);
   		};

   		var sorted_field_info_all = reportQueryResult.sortsObject(field_info_all);

   		var columnsNameNew = [];
   		for (var i = 0; i < sorted_field_info_all.length; i++) {
   			columnsNameNew.push(sorted_field_info_all[i].fieldname);
   		};
   		currHeadMetas = columnsNameNew;
   		//是否着色---------------------------------------------------

   		var curryReportAddRuleArr = reportQueryResult.queryReportFieldColor();
   		//var curryReportAddLieWidthArr = reportQueryResult.queryReportLieWidth();

   		if (curryReportAddRuleArr.length == 0) {
   			//不着色
   			for (var i = 0; i < sorted_field_info_all.length; i++) {
   				var currObject = sorted_field_info_all[i];
   				sortName = columnsName[0].fieldname;
   				if (currObject.fieldname == "地市") {
   					var obj = {
   						name: '',
   						index: '',
   						width: 80,
   						align: "center"
   					};
   					obj.name = currObject.fieldname;
   					obj.index = currObject.fieldname;
   					if (currObject.linewidth != 0) {
   						obj.width = currObject.linewidth;
   					} else {
   						var wid = reportQueryResult.strlen(currObject.fieldname);
   						if (wid * 9 < 100) {
   							obj.width = 100;
   						} else {
   							obj.width = wid * 9;
   						};
   					};
   					if (currObject.isshow == "false") {
   						obj.hidden = true;
   					};
   					columnsConfig.push(obj);
   				} else if (currObject.fieldname == "省") {
   					var obj = {
   						name: '',
   						index: '',
   						width: 80,
   						align: "center"
   					};
   					obj.name = currObject.fieldname;
   					obj.index = currObject.fieldname;
   					if (currObject.linewidth != 0) {
   						obj.width = currObject.linewidth;
   					} else {
   						var wid = reportQueryResult.strlen(currObject.fieldname);
   						if (wid * 9 < 100) {
   							obj.width = 100;
   						} else {
   							obj.width = wid * 9;
   						};
   					};
   					if (currObject.isshow == "false") {
   						obj.hidden = true;
   					};
   					columnsConfig.push(obj);
   				} else {
   					var obj = {
   						name: '',
   						index: '',
   						width: 130,
   						align: "center"
   					};
   					obj.name = currObject.fieldname;
   					obj.index = currObject.fieldname;
   					if (currObject.linewidth != 0) {
   						obj.width = currObject.linewidth;
   					} else {
   						var wid = reportQueryResult.strlen(currObject.fieldname);
   						if (wid * 9 < 100) {
   							obj.width = 100;
   						} else {
   							obj.width = wid * 9;
   						};
   					};
   					if (currObject.isshow == "false") {
   						obj.hidden = true;
   					};
   					columnsConfig.push(obj);
   				};
   			};
   		} else {
   			//[{"id":"20160603145441","name":"着色名称","type":"1","strategy":"[{\"min\":\"\",\"color\":\"FFFFFF\",\"max\":\"\"}]","field":"字段名"}]
   			//着色 
   			var columnsNameItem = "";
   			for (var i = 0; i < columnsNameNew.length; i++) {
   				columnsNameItem = columnsNameNew[i];
   				sortName = columnsNameNew[0];
   				var currObject = sorted_field_info_all[i];
   				var currName = columnsNameNew[i];
   				var mm_z = 0; //判断非着色字段只加载一次
   				for (var j = 0; j < curryReportAddRuleArr.length; j++) {
   					var item = curryReportAddRuleArr[j];

   					//-----------------------------------------------
   					for (var k = 0; k < curryReportAddRuleArr.length; k++) {
   						if (currName == curryReportAddRuleArr[k].field) {
   							mm_z++;
   						};
   					};

   					//---------------------------------------

   					if (currName == item.field) { //判断着色字段

   						if (item.type == 1) { //区间着色
   							var obj = {
   								name: columnsNameNew[i],
   								index: columnsNameNew[i],
   								width: 120,
   								align: "center",
   								formatter: function(cellVal, options, rowObjs) {
   									//return  "<a href='javascript:openWin(\""+cellVal+"\")'><span style='color:red'>"+cellVal+"</span></a>" 
   									var color = "";
   									//var strategy_str = item.strategy;
   									//获取当前字段的名称-----------------------------------------
   									var strategy_str = "";
   									var colName = options.colModel.name;
   									for (var k = 0; k < curryReportAddRuleArr.length; k++) {
   										if (curryReportAddRuleArr[k].field == colName) {
   											strategy_str = curryReportAddRuleArr[k].strategy;
   											break;
   										};
   									};
   									//----------------------------------------------
   									if (strategy_str == "") {
   										return "<span>" + cellVal + "</span>"
   									} else {
   										var strategyArr = $.parseJSON(strategy_str);
   										for (var k = 0; k < strategyArr.length; k++) {
   											var item_str = strategyArr[k];
   											var item_obj = item_str;
   											//var item_obj = $.parseJSON(item_str);
   											var min = item_obj.min;
   											var max = item_obj.max;
   											if (k == 0) {
   												if (max == "" || max == null || max == "null") {
   													if (min < cellVal || cellVal == min) {
   														color = item_obj.color;
   													};
   												} else {
   													if ((min < cellVal && cellVal < max) || cellVal == min) {
   														color = item_obj.color;
   													};
   												};

   											} else if (k == strategyArr.length - 1) {
   												if (min == "" || min == null || min == "null") {
   													if (cellVal < max) {
   														color = item_obj.color;
   													};
   												} else {
   													if ((min < cellVal && cellVal < max) || cellVal == min) {
   														color = item_obj.color;
   													};
   												};
   											} else {
   												if ((min < cellVal && cellVal < max) || cellVal == min) {
   													color = item_obj.color;
   												};
   											};
   										};

   										return "<span style='width:100%;display:inline-block;background-color:#" + color + "'>" + cellVal + "</span>"
   									};
   								}
   							};
   							if (currObject.linewidth != 0) {
   								obj.width = currObject.linewidth;
   							} else {
   								var wid = reportQueryResult.strlen(currObject.fieldname);
   								if (wid * 9 < 100) {
   									obj.width = 100;
   								} else {
   									obj.width = wid * 9;
   								};
   							};
   							if (currObject.isshow == "false") {
   								obj.hidden = true;
   							};
   							columnsConfig.push(obj);
   						};
   						if (item.type == 0) { //枚举着色
   							/* [{"id": "20160606152641","name": "属地分公司","type": "0","strategy": [{"feilName": "普陀区","color": "FF1D10","check": false },],*/
   							var obj = {
   								name: columnsNameNew[i],
   								index: columnsNameNew[i],
   								width: 120,
   								align: "center",
   								formatter: function(cellVal, options, rowObjs) {
   									var cellVal = cellVal;

   									var strategy_str = "";
   									var colName = options.colModel.name;
   									for (var k = 0; k < curryReportAddRuleArr.length; k++) {
   										if (curryReportAddRuleArr[k].field == colName) {
   											strategy_str = curryReportAddRuleArr[k].strategy;
   											break;
   										};
   									};

   									var strategyArr = $.parseJSON(strategy_str);
   									var retur = "";
   									for (var k = 0; k < strategyArr.length; k++) {
   										var item_str = strategyArr[k];
   										//var item_obj = $.parseJSON(item_str);
   										var item_obj = item_str;
   										var color = item_obj.color;
   										var feilName = item_obj.feilName;


   										if (feilName == cellVal) {
   											retur = "<span style='width:100%;display:inline-block;background-color:#" + color + "'>" + cellVal + "</span>";
   											break;
   										} else {
   											if (item_obj.check == true) {
   												if (cellVal.indexOf(feilName) != -1) {
   													var length_s = feilName.length;
   													var length_B = cellVal.length;
   													var index = cellVal.indexOf(feilName);
   													retur = "<span style='width:100%;display:inline-block;background-color:#" + color + "'>" + cellVal + "</span>"
   													//retur = "<span>"+cellVal.substring(0,index)+"</span><span style='color:#"+color+"'>"+cellVal.substring(index,index+length_s)+"</span><span>"+cellVal.substring(index+length_s,length_B)+"</span>"
   													break;
   												} else {
   													retur = "<span>" + cellVal + "</span>";
   												}
   											} else {
   												retur = "<span>" + cellVal + "</span>";
   											};

   										};
   									};
   									return retur;

   								}
   							};
   							if (currObject.linewidth != 0) {
   								obj.width = currObject.linewidth;
   							} else {
   								var wid = reportQueryResult.strlen(currObject.fieldname);
   								if (wid * 9 < 100) {
   									obj.width = 100;
   								} else {
   									obj.width = wid * 9;
   								};
   							};
   							if (currObject.isshow == "false") {
   								obj.hidden = true;
   							};
   							columnsConfig.push(obj);
   						};
   					} else {
   						if (mm_z == 0) {
   							var obj = {
   								name: '',
   								index: '',
   								width: 140,
   								align: "center"
   							};
   							obj.name = columnsNameNew[i];
   							obj.index = columnsNameNew[i];
   							if (currObject.linewidth != 0) {
   								obj.width = currObject.linewidth;
   							} else {
   								var wid = reportQueryResult.strlen(currObject.fieldname);
   								if (wid * 9 < 100) {
   									obj.width = 100;
   								} else {
   									obj.width = wid * 9;
   								};
   							};
   							if (currObject.isshow == "false") {
   								obj.hidden = true;
   							};
   							columnsConfig.push(obj);
   							mm_z++;
   						};
   					};
   				};

   			};

   		};
   		//---------------------------------------------------------------------
   		//初始化表格
   		$("#con_grid_div_grid").jqGrid({
   			height: height,
   			rowNum: rowNum - 1,
   			datatype: "local",
   			colNames: columnsNameNew,
   			shrinkToFit: false,
   			autoScroll: true,
   			rownumbers: false,
   			pgbuttons: true,
   			sortname: sortName,
   			sortorder: "desc",
   			colModel: columnsConfig,
   			pager: "#con_grid_div_gridPager",
   			pgtext: "{0}共{1}页"
   		});

   		var postJson = data.reportCheckInfo;
   		if (parent.mainE) {
   			var info_sql_value = parent.mainE.previewReportToData();
   			if (info_sql_value.length > 0) {
   				postJson.logic_sql_info = info_sql_value[1];
   				parent.mainE.clearPreviewReportToData(); //用完之后将参数清空
   			};
   		};
   		$("#con_grid_div_grid").jqGrid("setGridParam", {
   			url: eastcom.baseURL + configUrl_main.srpt_rcpt_checkOrQueryReportAuto,
   			//url : eastcom.baseURL+"/srpt/rcpt/checkOrQueryReportAuto", 
   			datatype: "json",
   			mtype: 'POST',
   			jsonReader: {
   				root: "data.elements",
   				records: "data.total",
   				total: "data.pageNum",
   				page: "data.pageNo"
   			},
   			postData: {
   				params: JSON.stringify(postJson)
   			},
   			page: 1
   		}).trigger("reloadGrid");




   	},
   	exportExcel: function(type) {
   		var totalCount = 0;
   		var str = $(".ui-paging-info").html();
   		if (str.indexOf("-") > 0) {
   			var totals = str.substring(str.indexOf("共") + 1, str.indexOf("条"));
   			var totalCount = totals.trim();
   			totalCount.replace(/-/g, "/")
   			var reg = new RegExp(" ", "g");
   			totalCount = totalCount.replace(reg, "");

   		};


   		var action = "";
   		/*if(totalCount < 50000){
   		     action = eastcom.baseURL + '/srpt/rcpt/exportAll';
   		}else{
   		     action = eastcom.baseURL + '/srpt/rcpt/exportBatch?totalCount='+totalCount;
   		};*/
   		if (type == "xls") {
   			action = eastcom.baseURL + configUrl_main.srpt_rcpt_exportAll;
   			//action = eastcom.baseURL + '/srpt/rcpt/exportAll';
   		} else {
   			action = eastcom.baseURL + configUrl_main.srpt_rcpt_exportBatch_totalCount + totalCount;
   			//action = eastcom.baseURL + '/srpt/rcpt/exportBatch?totalCount='+totalCount;
   		};

   		ToExcelOrCSVPage({
   			myGrid: $("#con_grid_div_grid").jqGrid("getGridParam"),
   			action: action,
   			title: val[1],
   			isThereCheckBox: false, //第一列是否有选择框或序号，是否导出第一列
   			isHidden: false, //是否导出隐藏列，true 导出
   			isComplexHeader: true //是否多级表头，暂支持两级表头
   		});
   	},
   	addColor: function() {
   		$("#addColor").modal("toggle");
   		var htmlStr = "";
   		for (var i = 0; i < currHeadMetas.length; i++) {
   			htmlStr += '<div style="height:40px">' +
   				'<a href="javascript:void(0)" style="height: 34px;padding-top: 7px;display:inline-block;" title="' + currHeadMetas[i] + '">' +
   				'<span id="name_' + i + '" style="display:inline-block; border:0px solid #e8e8e8;width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + currHeadMetas[i] + ':</span>' +
   				'</a>' +
   				'<span style="margin-left:10px">' +
   				'<select id="type_' + i + '" style="width:160px" onchange="reportQueryResult.changeClear(this.id)">' +
   				'<option value="1">区间</option>' +
   				'<option value="0">枚举</option>' +
   				'</select>' +
   				'</span>' +
   				'<span style="display:inline-block;border: 1px solid #e8e8e8;border-radius: 4px;height: 37px;width: 220px;margin-left:20px">'
   				//---------------------------------------------
   				//+     '<span style="display:block;border: 1px solid #e8e8e8;border-radius: 4px;height: 37px;width: 300px;margin:0 0 10px 0 ">'
   				//+       '<input placeholder="模板名称...." id="demoName_mohu" style="width: 260px;border: none;height: 34px;padding: 2px 5px" onkeypress="if(event.keyCode==13){colorDemo.demoQuery();}"/>'
   				//+       '<img style="cursor: pointer;" height="30px" width="30px" src="../../static/reportManageSys/images/fangdajing.png" onclick="colorDemo.demoQuery()">'
   				//+     '</span>'
   				//---------------------------------------------
   				+
   				'<input id="colorDemo_' + i + '" values="" style="width:188px;height:34px;cursor: pointer;border-radius:4px;padding-left: 5px;border:0px solid #a9a9a9;" placeholder="点击选取着色模板...." readonly="readonly" onclick="reportQueryResult.addColorDemo(\'type_' + i + '\',\'' + i + '\')"/>' +
   				'<img id="img_' + i + '" style="cursor: pointer;display:none" height="25px" width="24px" src="../../static/reportManageSys/images/closehong.png" onclick="reportQueryResult.clickClear(\'' + i + '\')">' +
   				'</span>' +
   				'</div>'
   		};

   		$("#content").html(htmlStr);
   		reportQueryResult.huanyuanFieldColor();
   	},
   	changeClear: function(id) {
   		var id_num = id.substring(5, 6);
   		$("#colorDemo_" + id_num).attr('values', '');
   		$("#colorDemo_" + id_num).attr('value', '');
   	},
   	clickClear: function(id) {
   		//var id_num = id.substring(5,6);
   		$("#colorDemo_" + id).attr('values', '');
   		$("#colorDemo_" + id).attr('value', '');
   		$("#img_" + id).css('display', 'none');
   	},
   	huanyuanFieldColor: function() {
   		var curryReportAddRule = reportQueryResult.queryReportFieldColor();
   		//[{"id":"20160603145441","name":"他","type":"1","strategy":"[{\"min\":\"\",\"color\":\"FFFFFF\",\"max\":\"\"}]","field":"EGCI"}]
   		$("#content").find('div').each(function(index, el) {
   			var text = $(this).find('span').eq(0).text();
   			var id = $(this).find('span').eq(0).attr('id');
   			var id_num = id.substring(5, 6);
   			for (var i = 0; i < curryReportAddRule.length; i++) {
   				var item = curryReportAddRule[i];
   				if (text.indexOf(item.field) >= 0) {
   					$("#type_" + id_num).find("option[value='" + item.type + "']").attr("selected", true);
   					$("#colorDemo_" + id_num).attr('values', item.id);
   					$("#colorDemo_" + id_num).attr('value', item.name);
   					$("#img_" + id_num).css('display', 'inline-block');
   				};
   			};
   		});
   	},
   	addColors: function() {
   		//获取页面值
   		var field_color = {};
   		var _key = "";
   		var _value = "";
   		$("#content").find('div').each(function(index, el) {
   			$(this).find('span').each(function(index_n, el_n) {
   				switch (index_n) {
   					case 0:
   						_key = $(this).text();
   						break;
   					case 1:
   						break;
   					case 2:
   						_value = $(this).find('input').eq(0).attr('values');
   						if (_value == "") {
   							_key = "";
   						} else {
   							_key = _key.substring(0, _key.length - 1);
   							field_color[_key] = _value;
   							_key = ""; //用完值清空
   							_value = "";
   						};
   						break;
   				};
   			});
   		});

   		var id = val[0].reportCheckInfo.report_id;
   		var data = {
   			"dbId": "srpt",
   			"tableName": configUrl_main.dm_co_ba_srpt_report_tableName,
   			//"tableName":"dm_co_ba_srpt_report",
   			"type": "update",
   			"conditions": ["report_id"],
   			"data": {
   				"report_id": id,
   				//"algo_instru":"算法说明",
   				//"field_href":"字段超链接配置",
   				"field_color": JSON.stringify(field_color),
   			}
   		};
   		var dataStr = JSON.stringify(data);
   		var res = commonAjax(configUrl_main.update_update, dataStr, "", "");
   		//var res = commonAjax("/srpt/rcpt/common/update",dataStr,"","");  
   		//{"resultCode":0,"msg":"SUCCESS_NO_INFO","size":[-2]}
   		if (res.resultCode == 0 || res.msg == "success") {
   			alert("保存成功!");
   		} else {
   			alert("保存失败!");
   		};

   		$("#addColor").modal("hide");
   	},
   	addColorDemo: function(val, index) {
   		select_id = "";
   		index_addColor = index;
   		addDemoType = $("#" + val).val();
   		$("#addColorDemo").modal("toggle");

   		$("#con_grid_div_d").html("");
   		var htmelStr = '<table id="con_grid_div_grid_d"></table>' +
   			'<div id="con_grid_div_gridPager_d"></div>';
   		$("#con_grid_div_d").html(htmelStr);


   		var columnsName = ['', '模板名称', '模板类型', '详细信息'];
   		var columnsConfig = [{
   			name: 'id',
   			index: 'id',
   			width: 0.1,
   			align: "center"
   		}, {
   			name: 'name',
   			index: 'name',
   			width: 50,
   			align: "center"
   		}, {
   			name: 'type',
   			index: 'type',
   			width: 25,
   			align: "center",
   			formatter: function(cellVal, options, rowObjs) {
   				switch (cellVal) {
   					case '0':
   						return "枚举";
   						break;
   					case '1':
   						return "区间";
   						break;
   				};
   			}
   		}, {
   			name: 'strategy',
   			index: 'strategy',
   			width: 80,
   			align: "center"
   		}];
   		//初始化表格
   		jQuery("#con_grid_div_grid_d").jqGrid("clearGridData");
   		$("#con_grid_div_grid_d").jqGrid({
   			height: 150,
   			//rowNum : rowNum,
   			datatype: "local",
   			colNames: columnsName,
   			shrinkToFit: false,
   			autoScroll: true,
   			rownumbers: true,
   			rownumWidth: 40,
   			pgbuttons: true,
   			colModel: columnsConfig,
   			onSelectRow: function(rowid, status) {
   				select_id = rowid;
   			},
   			ondblClickRow: function(rowid, iRow, iCol, e) {
   				select_id = rowid;
   				reportQueryResult.addColorDemoDetail();
   			}
   		});

   		//加载数据  
   		jQuery("#con_grid_div_grid_d").jqGrid("clearGridData"); //清除表格之前的数据
   		var data = {
   			"ifId": "srpt-enum-colorCfg",
   			"type": addDemoType
   		};
   		var dataStr = JSON.stringify(data);
   		var res = commonAjax(configUrl_main.query_colorCfg, dataStr, "", "");
   		//var res = commonAjax("/srpt/rcpt/common/query",dataStr,"","");
   		var dataObj = res.data;
   		var resultArr = [];
   		for (var item in dataObj) {
   			resultArr.push(dataObj[item]);
   		};
   		for (var i = 0; i < resultArr.length; i++) {
   			jQuery("#con_grid_div_grid_d").jqGrid('addRowData', i + 1, resultArr[i]);
   		};
   	},
   	demoQuery: function() {
   		jQuery("#con_grid_div_grid_d").jqGrid("clearGridData"); //清除表格之前的数据
   		var demoName_mohu = $("#demoName_mohu").val();
   		var type = addDemoType;
   		//加载数据  
   		var data = {
   			"ifId": "srpt-enum-colorCfg",
   			"name": demoName_mohu,
   			"type": type
   		};
   		var dataStr = JSON.stringify(data);
   		var res = commonAjax(configUrl_main.query_colorCfg, dataStr, "", "");
   		//var res = commonAjax("/srpt/rcpt/common/query",dataStr,"","");
   		var dataObj = res.data;
   		var resultArr = [];
   		for (var item in dataObj) {
   			resultArr.push(dataObj[item]);
   		};
   		for (var i = 0; i < resultArr.length; i++) {
   			jQuery("#con_grid_div_grid_d").jqGrid('addRowData', i + 1, resultArr[i]);
   		};

   	},
   	addColorDemos: function() {
   		if (select_id == "") {
   			alert("请选择模板!");
   			return;
   		};
   		var index = index_addColor
   		var id = $("#con_grid_div_grid_d").find("#" + select_id).eq(0).find('td[aria-describedby="con_grid_div_grid_d_id"]').html();
   		var name = $("#con_grid_div_grid_d").find("#" + select_id).eq(0).find('td[aria-describedby="con_grid_div_grid_d_name"]').html();

   		$("#colorDemo_" + index).val(name);
   		$("#colorDemo_" + index).attr('values', id);
   		$("#img_" + index).css('display', 'inline-block');
   		$("#addColorDemo").modal("hide");


   	},
   	addColorDemoDetail: function() {
   		//var id = $("#"+select_id).find('td[aria-describedby="con_grid_div_grid_d_id"]').html();
   		var id = $("#con_grid_div_grid_d").find("#" + select_id).eq(0).find('td[aria-describedby="con_grid_div_grid_d_id"]').html();
   		var name = $("#con_grid_div_grid_d").find("#" + select_id).eq(0).find('td[aria-describedby="con_grid_div_grid_d_name"]').html();
   		var type = $("#con_grid_div_grid_d").find("#" + select_id).eq(0).find('td[aria-describedby="con_grid_div_grid_d_type"]').html();
   		var strategy = $("#con_grid_div_grid_d").find("#" + select_id).eq(0).find('td[aria-describedby="con_grid_div_grid_d_strategy"]').html();
   		switch (type) {
   			case "区间":
   				reportQueryResult.addColorDemoDetail_qujian(id, name, type, strategy);
   				break;
   			case "枚举":
   				reportQueryResult.addColorDemoDetail_meiju(id, name, type, strategy);
   				break;

   		};
   	},
   	addColorDemoDetail_qujian: function(id, name, type, strategy) {
   		$("#addColorDemoDetail_qujian").modal("toggle");
   		//清空操作-------------------------------------------
   		$("#addDiv_qujian").find('div').each(function(index, el) {
   			if (index != 0) {
   				$(this).css('display', 'none').attr('sf', '0');
   			};
   			$(this).find('input[type="text"]').each(function(index_n, el_n) {
   				switch (index_n) {
   					case 0:
   						$(this).val("");
   						break;
   					case 1:
   						$(this).val("");
   						break;
   					case 2:
   						$(this).val("FFFFFF");
   						$(this).css('background-color', '#FFFFFF');
   						break;
   				};
   			});
   		});
   		//-------------------------------------------

   		$("#colorDemoId_qujian").val(name);
   		var strategyArr = $.parseJSON(strategy);
   		for (var i = 0; i < strategyArr.length; i++) {
   			if (i == 0) {
   				$("#addDiv_qujian").find('div[sf ="1"]').first().find('input[type = "text"]').each(function(index, el) {
   					switch (index) {
   						case 0:
   							$(this).val(strategyArr[i].min);
   							break;
   						case 1:
   							$(this).val(strategyArr[i].max);
   							break;
   						case 2:
   							$(this).val(strategyArr[i].color);
   							$(this).css('background-color', '#' + strategyArr[i].color);
   							break;
   					};
   				});
   			} else {
   				$("#addDiv_qujian").find('div[sf ="1"]').last().next('div').css('display', 'block').attr('sf', '1').find('input[type = "text"]').each(function(index, el) {
   					switch (index) {
   						case 0:
   							$(this).val(strategyArr[i].min);
   							break;
   						case 1:
   							$(this).val(strategyArr[i].max);
   							break;
   						case 2:
   							$(this).val(strategyArr[i].color);
   							$(this).css('background-color', '#' + strategyArr[i].color);
   							break;
   					};
   				});
   			};

   		};
   	},
   	addColorDemoDetail_meiju: function(id, name, type, strategy) {
   		$("#addColorDemoDetail_meiju").modal("toggle");
   		//清空操作----------------------------------------
   		$("#addDiv_meiju").find('div').each(function(index, el) {
   			if (index != 0) {
   				$(this).css('display', 'none').attr('sf', '0');
   			};
   			$(this).find('input[type="text"]').each(function(index_n, el_n) {
   				/*$(el_n).val("");*/
   				switch (index_n) {
   					case 0:
   						$(this).val("");
   						break;
   					case 1:
   						$(this).val("FFFFFF");
   						$(this).css('background-color', '#FFFFFF');
   						break;
   				};
   			});
   			$(this).find('input[type="checkbox"]').each(function(index_n, el_n) {
   				$(el_n).prop('checked', false);
   			});
   		});
   		//----------------------------------------
   		$("#colorDemoId_meiju").val(name);
   		var strategyArr = $.parseJSON(strategy);
   		for (var i = 0; i < strategyArr.length; i++) {
   			if (i == 0) {
   				$("#addDiv_meiju").find('div[sf ="1"]').first().find('input').each(function(index, el) {
   					switch (index) {
   						case 0:
   							$(this).val(strategyArr[i].feilName);
   							break;
   						case 1:
   							$(this).prop('checked', strategyArr[i].check);
   							break;
   						case 2:
   							$(this).val(strategyArr[i].color);
   							$(this).css('background-color', '#' + strategyArr[i].color);
   							break;
   					};
   				});
   			} else {
   				$("#addDiv_meiju").find('div[sf ="1"]').last().next('div').css('display', 'block').attr('sf', '1').find('input').each(function(index, el) {
   					switch (index) {
   						case 0:
   							$(this).val(strategyArr[i].feilName);
   							break;
   						case 1:
   							$(this).prop('checked', strategyArr[i].check);
   							break;
   						case 2:
   							$(this).val(strategyArr[i].color);
   							$(this).css('background-color', '#' + strategyArr[i].color);
   							break;
   					};
   				});
   			};

   		};
   	},
   	saveColumnWidth: function() {

   		//con_grid_div_grid_记录时间
   		/* var w = $("#con_grid_div_grid_记录时间").css('width');
   		 var w1 = $("#con_grid_div_grid_用时").css('width');
   		 var w2 = $("#con_grid_div_grid_用时(ms)").css('width');
   		 */

   		/*var data = val[0];
   		var  columnsName = data.data.headMetas;  //[]
   		 for(var i=0;i<columnsName.length;i++){

   		        alert(columnsName[i]+"的宽:"+$("#con_grid_div_grid_"+columnsName[i]).css("width"));
   		 };*/

   		$("#con_grid_div").find('th[role = "columnheader"]').each(function(index, el) {
   			var idStr = $(this).attr('id');
   			var idzhen = idStr.replace("con_grid_div_grid_", "");
   			var w = $(this).css('width');
   			var widths = parseInt(w);
   			for (var i = 0; i < field_info_all.length; i++) {
   				var currI = field_info_all[i];
   				if (idzhen == currI.fieldname) {
   					currI.linewidth = widths;
   				};
   			};
   		});
   		//console.log(widthArr);
   		var id = val[0].reportCheckInfo.report_id;
   		var data = {
   			"dbId": "srpt",
   			"tableName": configUrl_main.dm_co_ba_srpt_report_tableName,
   			//"tableName":"dm_co_ba_srpt_report",
   			"type": "update",
   			"conditions": ["report_id"],
   			"data": {
   				"report_id": id,
   				"field_info": JSON.stringify(field_info_all),
   			}
   		};
   		var dataStr = JSON.stringify(data);
   		var res = commonAjax(configUrl_main.update_update, dataStr, "", "");
   		//var res = commonAjax("/srpt/rcpt/common/update",dataStr,"",""); 
   		if (res.msg == "SUCCESS_NO_INFO" || res.msg == "success") {
   			eastcom.showMsg("success", "列宽保存成功!");
   			setTimeout('$("#msg-cnt").empty()', 3000);
   		} else {
   			eastcom.showMsg("danger", "列宽保存失败!");
   			setTimeout('$("#msg-cnt").empty()', 3000);
   		};
   	},
   	seekFieldArith: function() {
   		$("#fieldArith").modal("toggle");
   		var id = val[0].reportCheckInfo.report_id;
   		//加载描述
   		var data = {
   			"ifId": "srpt-cfg-reportInfo",
   			"report_id": id
   		};
   		var dataStr = JSON.stringify(data);
   		var res = commonAjax(configUrl_main.query_reportInfo, dataStr, "", "");
   		//var res = commonAjax("/srpt/rcpt/common/query",dataStr,"","");
   		if (res.data == null || res.data == "null") {
   			return;
   		};
   		var algo_instru = res.data.algo_instru;
   		$("#algo_instru").html(algo_instru);


   		$("#con_grid_div_e").html("");
   		var htmelStr = '<table id="con_grid_div_grid_e"></table>' +
   			'<div id="con_grid_div_gridPager_e"></div>';
   		$("#con_grid_div_e").html(htmelStr);

   		//加载字段说明表格
   		var columnsName_field = ['字段名', '算法', '说明'];
   		var columnsConfig_field = [{
   			name: 'NAME',
   			index: 'NAME',
   			width: 120,
   			align: "center"
   		}, {
   			name: 'DESCR_',
   			index: 'DESCR_',
   			width: 120,
   			align: "center",
   			formatter: function(cellVal, options, rowObjs) {
   				return cellVal == null ? "--" : cellVal;
   			}
   		}, {
   			name: 'STRATEGY',
   			index: 'STRATEGY',
   			width: 120,
   			align: "center",
   			formatter: function(cellVal, options, rowObjs) {
   				var ces = cellVal;
   				if (typeof(cellVal) != "string") {
   					ces = JSON.stringify(cellVal);
   				};

   				return ces.indexOf("[]") != -1 ? "--" : ces
   			}
   		}];
   		//初始化表格
   		$("#con_grid_div_grid_e").jqGrid("clearGridData");
   		$("#con_grid_div_grid_e").jqGrid({
   			height: 123,
   			rowNum: 4,
   			datatype: "local",
   			colNames: columnsName_field,
   			colModel: columnsConfig_field,
   			shrinkToFit: false,
   			autoScroll: true,
   			//rownumbers:true,
   			//rownumWidth:80,
   			pgbuttons: true,
   			pager: "#con_grid_div_gridPager_e",
   			pgtext: "{0}共{1}页",

   		});


   		var data = {
   			"id": id,
   			"type": "3"
   		};
   		var dataStr = JSON.stringify(data);
   		var res = commonAjax(configUrl_main.srpt_rcpt_getColumnDesc, dataStr, "", "");
   		//var res = commonAjax("/srpt/rcpt/getColumnDesc",dataStr,"",""); 
   		var data = res.data;

   		var mydata = [];

   		for (var i = 0; i < data.length; i++) {
   			var obj = {};
   			obj.NAME = data[i].columnCN;
   			obj.DESCR_ = data[i].descr;
   			obj.STRATEGY = data[i].strategy;
   			mydata.push(obj);
   		};


   		for (var i = 0; i <= mydata.length; i++) {
   			jQuery("#con_grid_div_grid_e").jqGrid('addRowData', i + 1, mydata[i]);
   		};
   		$("#con_grid_div_grid_e").trigger("reloadGrid");
   	},
   	showOrhideAndSort: function() {
   		$("#showOrhideAndSort").modal("toggle");
   		var field_info = field_info_all;
   		reportQueryResult.showOrhideAndSort_cell(field_info);
   	},
   	showOrhideAndSort_clear: function() {
   		var field_info = val[0].field_info;
   		reportQueryResult.showOrhideAndSort_cell(field_info);
   	},
   	showOrhideAndSort_cell: function(params) {
   		var field_info_self = params;
   		/*field_info = [{
   		             "sortflag":0,                      
   		             "fieldname":"开始时间0",         
   		             "isshow":"true"             
   		           }] */
   		var Arr_Object = reportQueryResult.sortsObject(field_info_self);
   		var htmlStr = "";
   		for (var i = 0; i < Arr_Object.length; i++) {
   			var item = Arr_Object[i];
   			htmlStr += '<tr>' +
   				'<td>'
   			if (item.isshow == "true") {
   				htmlStr += '<input name="allchecked" id="check_' + item.fieldname + '" type="checkbox" checked="checked"/>';
   			} else {
   				htmlStr += '<input name="allchecked" id="check_' + item.fieldname + '" type="checkbox"/>';

   			};
   			htmlStr += '<span id="' + item.fieldname + '">' + item.fieldname + '</span>' +
   				'</td>' +
   				'</tr>';
   		};
   		$("#content_table").html(htmlStr);
   		reportQueryResult.tableSort(); //let it have sort function
   	},
   	allchecked: function() {
   		var falg = $("#allcheck").prop("checked");
   		if (falg) {
   			$("input[name ='allchecked']").each(function(index, el) {
   				$(el).prop('checked', true);
   			});
   		} else {
   			$("input[name ='allchecked']").each(function(index, el) {
   				$(el).prop('checked', false);
   			});
   		};
   	},
   	showOrhideAndSorts: function() {
   		$("#content_table").find('tr').each(function(index, el) {
   			$(this).find('td').eq(0).each(function(index_n, el_n) {
   				var checked = $(el_n).find('input').eq(0).prop("checked");
   				var spanId = $(el_n).find('span').eq(0).attr('id');
   				for (var i = 0; i < field_info_all.length; i++) {
   					var itemCurr = field_info_all[i];
   					if (itemCurr.fieldname == spanId) {
   						itemCurr.sortflag = index;
   						itemCurr.isshow = JSON.stringify(checked);
   					};
   				};
   			});
   		});
   		reportQueryResult.showOrhideAndSorts_save();
   	},
   	showOrhideAndSorts_save: function() {
   		var id = val[0].reportCheckInfo.report_id;
   		var data = {
   			"dbId": "srpt",
   			"tableName": configUrl_main.dm_co_ba_srpt_report_tableName,
   			//"tableName":"dm_co_ba_srpt_report",
   			"type": "update",
   			"conditions": ["report_id"],
   			"data": {
   				"report_id": id,
   				"field_info": JSON.stringify(field_info_all),
   			}
   		};
   		var dataStr = JSON.stringify(data);
   		//调整数据库顺序和是否显示------------------
   		var res = commonAjax(configUrl_main.update_update, dataStr, "", "");
   		//var res = commonAjax("/srpt/rcpt/common/update",dataStr,"",""); 
   		if (res.msg == "SUCCESS_NO_INFO" || res.msg == "success") {
   			eastcom.showMsg("success", "保存成功!");
   			setTimeout('$("#msg-cnt").empty()', 3000);
   			$("#showOrhideAndSort").modal("hide");
   		} else {
   			eastcom.showMsg("danger", "保存失败!");
   			setTimeout('$("#msg-cnt").empty()', 3000);
   		};
   		reportQueryResult.getReportResultData();
   		//调整页面表格顺序和是否显示----------------------------
   		/* "sortflag":i,                      
   		 "fieldname":currHeadMetas[i],         
   		 "isshow":"true"  */
   		/*var indexNums=[];
                                  var showArr=[];
                                  var hideArr=[];
                                  for (var j = 0; j < field_info_all.length; j++) {
                                          $("#content_table").find('tr').each(function(index, el) {
                                                  $(this).find('td').eq(0).each(function(index_n, el_n) {
                                                          var spanId = $(el_n).find('span').eq(0).attr('id');
                                                          if (spanId == field_info_all[j].fieldname) {
                                                            indexNums.push(index);
                                                          }; 
                                                                
                                                  });
                                          });
                                  };
                                 
                                  for (var i = 0; i < field_info.length; i++) {
                                            if (field_info[i].isshow == "true" || field_info[i].isshow == true) {
                                                    showArr.push(field_info[i].fieldname);
                                            }else{
                                                    hideArr.push(field_info[i].fieldname); 
                                            };
                                  };
                                  $("#con_grid_div_grid").jqGrid("remapColumns",indexNums,true,false);
                                  $("#con_grid_div_grid").jqGrid("showCol",showArr);
                                  $("#con_grid_div_grid").jqGrid("hideCol",hideArr);*/

   	},
   	tableSort: function() {
   		var tbody = $('#example_table > tbody');
   		var rows = tbody.children();
   		var selectedRow;
   		//压下鼠标时选取行
   		rows.mousedown(function() {
   			selectedRow = this;
   			tbody.css('cursor', 'move');
   			return false; //防止拖动时选取文本内容，必须和 mousemove 一起使用
   		});
   		rows.mousemove(function() {
   			return false; //防止拖动时选取文本内容，必须和 mousedown 一起使用
   		});
   		//释放鼠标键时进行插入
   		rows.mouseup(function() {
   			if (selectedRow) {
   				if (selectedRow != this) {
   					$(this).before($(selectedRow)).removeClass('mouseOver'); //插入                           
   				}
   				tbody.css('cursor', 'default');
   				selectedRow = null;
   			}
   		});
   		//标示当前鼠标所在位置
   		rows.hover(
   			function() {
   				if (selectedRow && selectedRow != this) {
   					$(this).addClass('mouseOver'); //区分大小写的，写成 'mouseover' 就不行           
   				}
   			},
   			function() {
   				if (selectedRow && selectedRow != this) {
   					$(this).removeClass('mouseOver');
   				}
   			}
   		);

   		//当用户压着鼠标键移出 tbody 时，清除 cursor 的拖动形状，以前当前选取的 selectedRow      
   		tbody.mouseover(function(event) {
   			event.stopPropagation(); //禁止 tbody 的事件传播到外层的 div 中
   		});
   		$('#contain').mouseover(function(event) {
   			if ($(event.relatedTarget).parents('#content')) //event.relatedTarget: 获取该事件发生前鼠标所在位置处的元素
   			{
   				tbody.css('cursor', 'default');
   				selectedRow = null;
   			}
   		});

   	},
   	sortsObject: function(obj) {
   		if (obj) {
   			obj.sort(function(a, b) {
   				return a.sortflag - b.sortflag
   			});
   		}
   		return obj;
   	},
   	initField_info: function() {
   		if (initHeadMetas.length == 0) {
   			eastcom.showMsg("danger", "表头加载失败!");
   			setTimeout('$("#msg-cnt").empty()', 3000);
   			return;
   		};
   		for (var i = 0; i < initHeadMetas.length; i++) {
   			var objectInArr = {
   				"sortflag": i,
   				"fieldname": initHeadMetas[i],
   				"linewidth": 0,
   				"isshow": "true"
   			};

   			field_info_all.push(objectInArr);
   		};


   		var id = val[0].reportCheckInfo.report_id;
   		var data = {
   			"dbId": "srpt",
   			"tableName": configUrl_main.dm_co_ba_srpt_report_tableName,
   			//"tableName":"dm_co_ba_srpt_report",
   			"type": "update",
   			"conditions": ["report_id"],
   			"data": {
   				"report_id": id,
   				"field_info": JSON.stringify(field_info_all),
   			}
   		};
   		var dataStr = JSON.stringify(data);
   		//调整数据库顺序和是否显示------------------
   		var res = commonAjax(configUrl_main.update_update, dataStr, "", "");
   	},
   	strlen: function(str) {
   		var len = 0;
   		for (var i = 0; i < str.length; i++) {
   			var c = str.charCodeAt(i);
   			//单字节加1
   			if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
   				len++;
   			} else {
   				len += 2;
   			}
   		}
   		return len;
   	}




   };