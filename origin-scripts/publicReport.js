var timeParam = [];
var publicReport = {
                   init : function(){
                            $('body').mask("数据正在加载中,请稍等....");
                            publicReport.showReportGetData();
                            $('body').unmask();

                   },
                   showReportGetData : function(){
                     var report_id = publicReport.getCurryId();
                     var report_name = publicReport.getCurryName();
                         var data = {
                                     "ifId":"srpt-cfg-reportInfo",
                                     "report_id":report_id
                                   }; 
                         var dataStr = JSON.stringify(data);
                         var res = commonAjax(configUrl_main.query_reportInfo,dataStr,"","");
                         //var res = commonAjax("/srpt/rcpt/common/query",dataStr,"","");
                         if (res.data.qry_bd_info == null) {
                           $('body').unmask();
                           alert("新建报表请先编辑!");
                           if (fromWhere != "autoReportId") {
                               parent.mainE.closetabs(report_name); 
                           };
                           return;
                         }
                         
                          var qry_bd_info_Json = eval('(' + res.data.qry_bd_info + ')')
                          var time = qry_bd_info_Json.time;
                          var otherCondition = qry_bd_info_Json.otherCondition;
                         
                          publicReport.showTime(time);
                          publicReport.showOtherCondition(otherCondition);
                   },
                   showTime : function(time){
                              var lianxuOrlisan = time.db_info.lianxuOrlisan;
                              var timeType = time.query_param[0];
                              
                              timeParam.push(lianxuOrlisan);
                              timeParam.push(timeType);

                              var ifshowtime = timeType.length;
                              if(ifshowtime >0){  
                                       if (lianxuOrlisan == "lianxu") {
                                       	   $("#lianxuDiv").css("display","block");
                                           showLianxuTime.init();
                                       };
                                       if (lianxuOrlisan == "lisan") {
                                       	   $("#lisanDiv").css("display","block");
                                           showLisanTime.init(); 
                                       };
                              };   
                   },
                   showTimeParam : function(){
                               return timeParam;
                   },
                   showOtherCondition : function(otherCondition){
                              var  otherConditionArr = otherCondition;
                              var zujianArray = otherConditionArr;
                                   var lie = 3;
                                   var htmlStr = "";
                                  
                                   var otherConditionDivWidth = $("#otherCondition").width()-5;
                                   var tdWidth = (otherConditionDivWidth/lie).toFixed(0);

                                    htmlStr += '<table>'
                                      $("#otherConWai").css("display","none");
                                    
                                        var ii = -1;
                                        var jj = 0;    //计算除去非tr,td的组件数量
                 

                                      for(var i=0;i<zujianArray.length;i++){
                                             //是否必填
                                               //-------------------------------------
                                                   var isRequire = zujianArray[i].isRequire;
                                                    var displayflag = "none"
                                                     if(isRequire == "t_Require"){
                                                           displayflag = "inline-block"
                                                     };
                                             
                                              //-------------------------------------
                                            $("#otherConWai").css("display","block"); 

                                               //-------------------------------------
                                                       // type "checkbox"
                                                       // id "qry_3"
                                                       // isRequire "f_Require"
                                                       if (zujianArray[i].type =="checkbox") { 
                                                         jj++;
                                                         if(i == zujianArray.length-1){htmlStr += '</tr></table>';};   //防止最后一个是特殊组件,这样普通组件会缺失
                                                         continue;};
                                                       if (zujianArray[i].type =="leftRight") {
                                                         jj++;
                                                         if(i == zujianArray.length-1){htmlStr += '</tr></table>';};
                                                         continue;};
                                                       if (zujianArray[i].type =="leftrightliandong") {
                                                         jj++;
                                                         if(i == zujianArray.length-1){htmlStr += '</tr></table>';};
                                                         continue;};
                                                       if (zujianArray[i].type =="demoselect") {
                                                         jj++;
                                                         if(i == zujianArray.length-1){htmlStr += '</tr></table>';};
                                                         continue;};  
                                               //-------------------------------------
                                             ii++;  
                                              var groupNum = ii%lie;
                                              var rowNum = (ii/lie).toFixed(0); 
                                              if(groupNum == 0){
                                           htmlStr += '<tr style="height: 50px">';
                                                  } ;
                                              if(zujianArray[i].type == "text"){
                                                htmlStr +=showComponentSource.getshurukuang(tdWidth,zujianArray[i].label,displayflag,zujianArray[i].id,zujianArray[i].type,zujianArray[i].isRequire);
                                              };
                                              if(zujianArray[i].type == "select"){
                                                    htmlStr +=showComponentSource.getxialakuang(tdWidth,zujianArray[i].label,displayflag,zujianArray[i].id,zujianArray[i].type,zujianArray[i].isRequire,zujianArray[i].xialaType);
                                              };

              	      	              if(groupNum == lie-1){htmlStr += '</tr>';};
              	      	        	    if( ii+1 == zujianArray.length - jj){ htmlStr += '</tr></table>';}; 
                                      };

                                      for(var i=0;i<zujianArray.length;i++){ 
                                              if (zujianArray[i].type =="checkbox") {
                                                   htmlStr +=showComponentSource.getfuxuankuang(zujianArray[i].label,zujianArray[i].id,zujianArray[i].type,zujianArray[i].isRequire,zujianArray[i].xialaType);
                                               };
                                               if (zujianArray[i].type =="leftRight") {
                                                   htmlStr +=showComponentSource.getleftrightkuang(zujianArray[i].label,zujianArray[i].id,zujianArray[i].type,zujianArray[i].isRequire,zujianArray[i].xialaType);
                                               };
                                               if (zujianArray[i].type =="leftrightliandong") {
                                                   htmlStr +=showComponentSource.getleftrightliandong(zujianArray[i].label,zujianArray[i].id,zujianArray[i].type,zujianArray[i].isRequire,zujianArray[i].xialaType);
                                               }; 
                                               if (zujianArray[i].type =="demoselect") {
                                                   htmlStr +=showComponentSource.getdemoselect(zujianArray[i].label,zujianArray[i].id,zujianArray[i].type,zujianArray[i].isRequire);
                                               }; 


                                      };
                                            

              	      	        $("#otherCondition").html(htmlStr); 
                                //添加选中事件
                                for(var i=0;i<zujianArray.length;i++){ 
                                        if (zujianArray[i].type =="checkbox") {

                                         }; 
                                         if (zujianArray[i].type =="leftRight") {
                                             suppleMethod.showComponentSource_getleftrightkuang(zujianArray[i].id);    
                                         }; 
                                         if (zujianArray[i].type =="leftrightliandong") {

                                         };
                                         if (zujianArray[i].type =="demoselect") {

                                               
                                         };

                                         
                                }; 
                   }, 

	            getCurryId : function(){
                     var Parent_Id = "";
					      	   //var Parent_Id_mainE = parent.mainE.getCurryReportId();
                     if (fromWhere == "autoReportId") {Parent_Id = parent.autoReport.getCurryReportId();};
                     if (fromWhere == "mainE") {Parent_Id = parent.mainE.getCurryReportId();};
                     if (fromWhere == "myReport") {Parent_Id = parent.myReport.getCurryReportId();};
                     if (fromWhere == "reportQuery") {Parent_Id = parent.reportQuery.getCurryReportId();};
                     $("#curr_id_div").html(Parent_Id);
                     return Parent_Id;
	            },
              getCurryName : function(){
                     var Parent_Name = "";
                     //var Parent_Name = parent.mainE.getCurryReportName();
                     if (fromWhere == "autoReportId") {Parent_Id = parent.autoReport.getCurryReportName();};
                     if (fromWhere == "mainE") {Parent_Id = parent.mainE.getCurryReportName();};
                     if (fromWhere == "myReport") {Parent_Id = parent.myReport.getCurryReportName();};
                     if (fromWhere == "reportQuery") {Parent_Id = parent.reportQuery.getCurryReportName();};
                     return Parent_Name;
              },
              panduanIsnull : function(val){
                              var value = $("#"+val.id).val();
                              if(value=="" && val.name=="t_Require" ){
                                  $("#"+val.id).next("span").show();
                              };
                              if(value!="" && val.name=="t_Require" ){
                                  $("#"+val.id).next("span").hide();
                              };
              },
              query : function(){
                       publicReport.validVal();
              },
              validVal:function(){
                var flag = 0;
                $("input[name = 't_Require']").each(function(){   //------------------------------------------------------------------
                         var val=$(this).val();
                         if(val == ""){
                            $(this).next("span").show();
                            flag = 1;
                         };
                });
                if (flag == 1) { return;}//判断是否能提交
                
                //查询时获取页面条件
                    var luanxulisan = timeParam[0];
                    var isContinue = "";
                    // 获取连续的开始结束时间
                      var startTime = "";
                      var endTime ="";
                      if(luanxulisan == "lianxu"){
                        isContinue = "t";
                           var timeType = $("input[name = 'timeType']:checked").val();
                           var pre_startTime = $("#timeField_"+timeType).val();
                           var pre_endTime = $("#timeField_"+timeType+'2').val();

                           if(pre_startTime == "undefined" || pre_startTime == undefined){pre_startTime = "2016-05-26"};
                           if(pre_endTime == "undefined" || pre_endTime == undefined){pre_endTime = "2016-06-26"};
                           //2016-06-26
                           startTime = publicReport.updateTimeStyle(timeType,pre_startTime);
                           endTime = publicReport.updateTimeStyle(timeType,pre_endTime);
                           if(startTime>endTime){
                              alert("开始时间不能大于结束时间！");
                              return;
                           };

                      };
                    //获取离散时间
                      if(luanxulisan == "lisan"){
                             isContinue = "f";
                             var timeType = $("input[name = 'timeType2']:checked").val();
                             var timeStr = "";//要传递的时间
                             var timeStrs = "";  
                             $("#resUl").find("input[type = 'checkbox']").each(function(index, el) {
                                             var lidisplayflag =  $(this).parent().css("display");
                                             if (lidisplayflag != "none") {
                                              timeStrs +=$(this).val()+',';
                                             };
                             });
                             var length = timeStrs.length;
                             timeStr = timeStrs.substring(0,length-1);
                            //判断报表是否有时间------
                             var isDisplay = $("#lisanDiv").css('display');
                             if(isDisplay == "none"){timeStr = "201601010000"};

                             if(timeStr == ""){alert("请选择时间！");return;};
                      };

                      //获取页面其他条件
                      var otherCondition = [];
                          $("#otherCondition").find("td").each(function(index, el) {
                               var zujianAttrStr = $(this).find("p").eq(0).html();
                               var zujianAttr = eval('(' + zujianAttrStr + ')');
                               otherCondition.push(zujianAttr);
                          });  
                      //---获取页面的其他特殊条件-----------------------------------------------  找元素,判断其size();
                           $("#otherCondition").find($("span[name = 'otherSpecialCondition']")).each(function(index, el) {
                                           var leftRightZujianStr = $(this).find('p').eq(0).html();  
                                           var leftRightZujian = eval('(' + leftRightZujianStr + ')')
                                           otherCondition.push(leftRightZujian);            
                           });
                      //-------------------------------------------------- 


                        var conditions = {
                                           isContinue:isContinue,
                                           timeType:timeType,
                                           startTime:startTime,
                                           endTime:endTime,
                                           discteteTime:timeStr,
                                           sidx:null,
                                           sord:"asc"
                                        
                        };  
                        //给conditions增加其他条件属性
                        //添加普通组件的值
                        for(var i=0;i<otherCondition.length;i++){
                               if(otherCondition[i].type =="text" ||otherCondition[i].type == "select" ){
                                 conditions[otherCondition[i].id]=$("#"+otherCondition[i].id).val();
                               };  
                        };
                         //添加特殊组件的值
                         //--------------------------------------------------------------------------------
                         //添加左右选择组件值
                        for(var i=0;i<otherCondition.length;i++){
                             if(otherCondition[i].type =="leftRight"){
                                 var cunfang_ids = "";
                                 $("#"+otherCondition[i].id).find('span[id =list_right_'+otherCondition[i].id+']').find('span').each(function(index, el) {
                                              var flag = $(this).css('display');  //none  block   判断是否可选
                                              if(flag == "block"){
                                                       cunfang_ids += $(this).attr('avalue')+",";
                                              };
                                                            
                                 });
                                 var cunfang_id = cunfang_ids.substring(0,cunfang_ids.length-1);
                                 conditions[otherCondition[i].id]=cunfang_id;
                             };  
                        };
                       //添加复选框的值
                        for(var i=0;i<otherCondition.length;i++){
                             if(otherCondition[i].type =="checkbox"){
                                 var cunfang_ids = "";
                                 $("#"+otherCondition[i].id).find('input[name ='+otherCondition[i].id+']').each(function(index, el) {
                                                       var flag = $(this).is(':checked');  // true  false  判断是否选中
                                                       if(flag){
                                                          cunfang_ids += $(this).val()+",";
                                                       };
                                                            
                                 });
                                 var cunfang_id = cunfang_ids.substring(0,cunfang_ids.length-1);
                                 conditions[otherCondition[i].id]=cunfang_id;
                             };  
                        };
                        //添加模板配置的值
                         for(var i=0;i<otherCondition.length;i++){
                              if(otherCondition[i].type =="demoselect"){
                                  var cunfang_ids = $("#"+otherCondition[i].id).find("span[sc ='1']").eq(0).find('span').eq(1).html();                      //--------------------------------------------------
                                  conditions[otherCondition[i].id]=cunfang_ids;
                              };  
                         };
                       //---------------------------------------------------------------------------------------------

                      //调用接口传递条件   
                      //var report_id = publicReport.getCurryId(); 
                      var report_id = $("#curr_id_div").html(); 
                                 var data = {
                                             "report_id":report_id,
                                             "conditions":conditions,
                                             "logic_sql_info":""
                                           }; 
                                 var dataStr = JSON.stringify(data);
                                 $('body').mask("数据加载中,请稍等.....")
                                 var res = commonAjax(configUrl_main.srpt_rcpt_checkOrQueryReport,dataStr,"","");
                                 //var res = commonAjax("/srpt/rcpt/checkOrQueryReport",dataStr,"","");
                                 if (!res.success){
                                  $("body").unmask();
                                  alert("查询异常!");return;};
                                  $("body").unmask();  
                                 //parent.mainE.createQueryResultTab(res);
                                 if (fromWhere == "autoReportId") {parent.autoReport.createQueryResultTab(res);};
                                 if (fromWhere == "mainE") {parent.mainE.createQueryResultTab(res);};
                                 if (fromWhere == "myReport") {parent.myReport.createQueryResultTab(res);}; 
                                 if (fromWhere == "reportQuery") {parent.reportQuery.createQueryResultTab(res);};
              },
              updateTimeStyle : function(type,time){
                                  var re1=new RegExp("-","g");
                                  var re2=new RegExp(":","g");
                                  var re3=new RegExp(" ","g");  
                                  var time = time.replace(re1,"");
                                  var time = time.replace(re2,"");
                                  var time = time.replace(re3,"");  

                                  if(type == "hour"){time+="00";};
                                  if(type == "day"){time+="0000";};
                                  if(type == "week"){time+="000000";};
                                  if(type == "month"){time+="000000";};    
                                  return time;
              }
};
