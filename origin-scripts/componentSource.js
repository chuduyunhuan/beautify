//增加编辑组件
addComponentSource = {
	           getshurukuang : function(zujianLabel,count){
                            var innerHTML = ''
                                       +  '<span style="display:inline-block;width:65px">'+zujianLabel+':</span><input id="qry_'+count+'" type="text" style="width:150px;height:34px" /> '
                                       +  '<span style="margin-left:20px">是否必填:</span><input id="checkbox" type="checkbox" style="margin-right: 19px;" />'
                                       +  '<a href="JavaScript:void(0)" onclick="addReport.delZujian(this)" ><img style="width: 34px; height: 34px ;margin-left: 40px;"  src="../../static/reportManageSys/images/closehong.png"></a>' 
                                       +  '<p style="display:none">{label:"'+zujianLabel+'",type:"text",id:"qry_'+count+'"}</p>';  

                              return innerHTML;         
	           },
	           getxialakuang : function(zujianLabel,count,xialaType){
	           	                 var datas = "";
                                // if( xialaType=="area-enum-area" || xialaType=="chooseShudi"){
                                   var data = {"ifId":xialaType}; //地市参数
                                   var dataStr = JSON.stringify(data);
                                   //------------------------------------------------
                                       var ajaxUrl = "";
                                       var query = configUrl_main.query;
                                       if(query.indexOf("sml") != -1){
                                              ajaxUrl = eastcom.baseURL+configUrl_main.query+"/"+xialaType;
                                       }else{
                                              ajaxUrl = eastcom.baseURL+configUrl_main.query;
                                       };
                                   //------------------------------------------------
                                      $.ajax({
                                               url :ajaxUrl ,
                                               //url :eastcom.baseURL+configUrl_main.query+"/"+xialaType ,
                                               // url :eastcom.baseURL+"/srpt/rcpt/common/query" ,
                                               type : 'POST',
                                               async : false,
                                               dataType : "json",
                                               contentType :"application/json",
                                               data:dataStr,
                                               success : function(data) {
                                                  datas = data.data;
                                               }
                                      });
                                // };
                                 
                            var innerHTML = ''
                                          +  '<span style="display:inline-block;width:65px">'+zujianLabel+':</span>'
                                          +    '<select id="qry_'+count+'" style="width:150px;margin-right: 4px; height:34px">';
                                      var dataArr = [] //[{},{}]
                        	             for(var item in datas){
                                             var key_id =""; 
                                             var key_name =""; 
                                             var i =0;
                                             var j =0;
                                             if(i<1){
                                                 $.each(datas[item], function(key, val) { 
                                                       if(j==0){
                                                           key_id = key;
                                                       };
                                                       if(j==1){
                                                           key_name = key;
                                                       };
                                                       j++;
                                                 }); 
                                                 i++;
                                             };

                        	             //innerHTML +='<option value="'+datas[item][key_id]+'">'+datas[item][key_name]+'</option>' ;   
                                          dataArr.push(datas[item]);          
                        	             } ;
                	                         var datasArr =  sorts(dataArr);
                                          for (var qq = 0; qq < datasArr.length; qq++) {
                                                   var valueS = datasArr[qq][key_id] == "-"?"":datasArr[qq][key_id];
                                                  innerHTML +='<option value="'+valueS+'">'+datasArr[qq][key_name]+'</option>' ;
                                          };
               	           
                                          innerHTML += '</select>'
                                          +  '<span style="margin-left:20px">是否必填:</span><input id="checkbox" type="checkbox" style="margin-right: 19px;" />' 
                                          +  ''
                                          +  '<a href="JavaScript:void(0)" onclick="addReport.delZujian(this)" ><img style="width: 34px; height: 34px ;margin-left: 40px;"  src="../../static/reportManageSys/images/closehong.png"></a>'
                                          +  '<p style="display:none">{label:"'+zujianLabel+'",type:"select",id:"qry_'+count+'",xialaType:"'+xialaType+'"}</p>' ;
                            return innerHTML;              
	           	                	                            
	           },
	           getfuxuankuang : function(zujianLabel,count,xialaType){
           	                 var datas = "";
                             //if( xialaType=="area-enum-area"){
                               var data = {"ifId":xialaType}; //地市参数
                               var dataStr = JSON.stringify(data);
                               //------------------------------------------------
                                   var ajaxUrl = "";
                                   var query = configUrl_main.query;
                                   if(query.indexOf("sml") != -1){
                                          ajaxUrl = eastcom.baseURL+configUrl_main.query+"/"+xialaType;
                                   }else{
                                          ajaxUrl = eastcom.baseURL+configUrl_main.query;
                                   };
                               //------------------------------------------------
                                  $.ajax({
                                           url :ajaxUrl ,
                                           // url :eastcom.baseURL+"/srpt/rcpt/common/query" ,
                                           type : 'POST',
                                           async : false,
                                           dataType : "json",
                                           contentType :"application/json",
                                           data:dataStr,
                                           success : function(data) {
                                              datas = data.data;
                                           }
                                  });
                            // };
                
                 var innerHTML = '<span id="qry_'+count+'" style="border:1px solid #e8e8e8;display:inline-block;width:340px ;height: 210px;overflow: auto;">'
                                if(datas == null){
                                     innerHTML +='暂无数据';
                                }else{
                                      innerHTML +='<span style="display:block;">'
                                                +     '<input id="all_qry_'+count+'" type="checkbox"/>'
                                                +     '<span style="margin: 0 10px 0 5px">全选</span>'
                                                + '</span>'
                                      //循环复选数据       


                                   for(var item in datas){
                                         var key_id =""; 
                                         var key_name =""; 
                                         var i =0;
                                         var j =0;
                                         if(i<1){
                                             $.each(datas[item], function(key, val) { 
                                                   if(j==0){
                                                       key_id = key;
                                                   };
                                                   if(j==1){
                                                       key_name = key;
                                                   };
                                                   j++;
                                             }); 
                                             i++;
                                         };

                                   innerHTML +='<span style="display:block;">'
                                             +     '<input type="checkbox" name="qry_'+count+'" value="'+datas[item][key_id]+'" />'
                                             +     '<span style="margin: 0 10px 0 5px">'+datas[item][key_name]+'</span>'
                                             + '</span>';      
                                   } ;



                                     /* for(var item in datas){
                                        innerHTML +='<span style="display:block;">'
                                                  +     '<input type="checkbox" name="qry_'+count+'" value="'+datas[item].id+'" />'
                                                  +     '<span style="margin: 0 10px 0 5px">'+datas[item].name+'</span>'
                                                  + '</span>'
                                      } ;*/
                                      innerHTML += '</span>'
                                                  +  '<span style="margin-left:20px"></span><input id="checkbox" type="checkbox" style="margin-right: 19px; display:none" />'
                                                  //+  '<a href="JavaScript:void(0)" onclick="addReport.delZujian(this)" style="top:50%;" ><img style="width: 34px; height: 34px ;margin-left: 20px;"  src="../../static/reportManageSys/images/closehong.png"></a>' 
                                                  +  '<a href="JavaScript:void(0)" onclick="addReport.delZujian(this)" ><img style="width: 34px; height: 34px ;margin-left: 20px;"  src="../../static/reportManageSys/images/closehong.png"></a>'
                                                  +  '<p style="display:none">{label:"'+zujianLabel+'",type:"checkbox",id:"qry_'+count+'",xialaType:"'+xialaType+'"}</p>';
                             };      
                 return innerHTML;

	           },
             getleftrightkuang : function(zujianLabel,count,xialaType){
                            var datas = "";
                           // if( xialaType=="area-enum-area"){
                              var data = {"ifId":xialaType}; //地市参数
                              var dataStr = JSON.stringify(data);
                              //------------------------------------------------
                                  var ajaxUrl = "";
                                  var query = configUrl_main.query;
                                  if(query.indexOf("sml") != -1){
                                         ajaxUrl = eastcom.baseURL+configUrl_main.query+"/"+xialaType;
                                  }else{
                                         ajaxUrl = eastcom.baseURL+configUrl_main.query;
                                  };
                              //------------------------------------------------
                                 $.ajax({
                                          url :ajaxUrl,
                                         // url :eastcom.baseURL+"/srpt/rcpt/common/query" ,
                                          type : 'POST',
                                          async : false,
                                          dataType : "json",
                                          contentType :"application/json",
                                          data:dataStr,
                                          success : function(data) {
                                             datas = data.data;
                                          }
                                 });
                           // };

                           
                           
     
                            var innerHTML ='<span id="qry_'+count+'" name="otherSpecialCondition" style="display: inline-block; border: 0px solid #e8e8e8; width: 340px;height: 210px">'
                                          +'<span style="display: block;float: left;border: 1px solid #e8e8e8;width: 145px;min-height: 208px;height: 208px;overflow: auto; -moz-user-select:none;" onselectstart="return false;">'
                                          +'<span id="list_left">';
                                          var m = 0;
                                         for(var item in datas){
                                               var key_id =""; 
                                               var key_name =""; 
                                               var i =0;
                                               var j =0;
                                               if(i<1){
                                                   $.each(datas[item], function(key, val) { 
                                                         if(j==0){
                                                             key_id = key;
                                                         };
                                                         if(j==1){
                                                             key_name = key;
                                                         };
                                                         j++;
                                                   }); 
                                                   i++;
                                               };

                                         innerHTML +=  '<span id="'+m+'" avalue="'+datas[item][key_id]+'">'+datas[item][key_name]+'</span>' 
                                                   m++;        
                                         } ;
                                          /*for(var item in datas){
                                                  innerHTML +=  '<span id="'+m+'" avalue="'+datas[item].id+'">'+datas[item].name+'</span>' 
                                                   m++; 
                                          };*/
                              innerHTML += '</span>'
                                     +'<input type="text" id="list_left_input" style="width:166px ;display:none" /> '
                                          +'</span>'
                                          +'<span style="display: block;float: left;border: 0px solid #e8e8e8; padding-top:6px;width: 60px;min-height: 208px;height: 208px;overflow: auto;">'
                                          +  '<center>'
                                          +     '<button class="btn btn-success btn-sm" href="#" onclick="checkAll()" >全选</button><br/><br/>'
                                          +     '<button class="btn btn-success btn-sm" href="#" onclick="checkPart()" >添加</button><br/><br/>'
                                          +     '<button class="btn btn-success btn-sm" href="#" onclick="delPart()" >删除</button><br/><br/>'
                                          +     '<button class="btn btn-success btn-sm" href="#" onclick="delAll()" >全删</button><br/><br/>'
                                          +  '</center>' 
                                          +'</span>'
                                          +'<span style="display: block;float: left;border: 1px solid #e8e8e8;width: 133px;min-height: 208px;height: 208px;overflow: auto;-moz-user-select:none;" onselectstart="return false;">'
                                          +'<span id="list_right">';

                                          var n = 0;
                                          for(var item in datas){
                                                var key_id =""; 
                                                var key_name =""; 
                                                var i =0;
                                                var j =0;
                                                if(i<1){
                                                    $.each(datas[item], function(key, val) { 
                                                          if(j==0){
                                                              key_id = key;
                                                          };
                                                          if(j==1){
                                                              key_name = key;
                                                          };
                                                          j++;
                                                    }); 
                                                    i++;
                                                };

                                          //innerHTML +='<option value="'+datas[item][key_id]+'">'+datas[item][key_name]+'</option>' ;   
                                          innerHTML +=  '<span id="'+n+'" avalue="'+datas[item][key_id]+'" style="display:none">'+datas[item][key_name]+'</span>' 
                                                    n++;        
                                          } ;
                                          /*for(var item in datas){
                                                  innerHTML +=  '<span id="'+n+'"  avalue="'+datas[item].id+'" style="display:none">'+datas[item].name+'</span>' 
                                                   n++; 
                                          };  */

                                innerHTML +='</span>'
                                     +'<input type="text" id="list_right_input" style="width:166px ;display:none" /> '
                                          +'</span>'
                                          +'</span>'
                                          +  '<span style="margin-left:20px"></span><input id="checkbox" type="checkbox" style="margin-right: 19px; display:none" />'
                                          +  '<a href="JavaScript:void(0)" onclick="addReport.delZujian(this)" style="top:50%;" ><img style="width: 34px; height: 34px ;margin-left: 20px;"  src="../../static/reportManageSys/images/closehong.png"></a>' 
                                          +  '<p style="display:none">{label:"'+zujianLabel+'",type:"leftRight",id:"qry_'+count+'",xialaType:"'+xialaType+'"}</p>';
                                          
                         return innerHTML;

             },
             getleftrightliandong : function(zujianLabel,count,xialaType){
                             var datas = "";
                            // if( xialaType=="area-enum-area"){
                               var data = {"ifId":xialaType}; //地市参数
                               var dataStr = JSON.stringify(data);
                               //------------------------------------------------
                                   var ajaxUrl = "";
                                   var query = configUrl_main.query;
                                   if(query.indexOf("sml") != -1){
                                          ajaxUrl = eastcom.baseURL+configUrl_main.query+"/"+xialaType;
                                   }else{
                                          ajaxUrl = eastcom.baseURL+configUrl_main.query;
                                   };
                               //------------------------------------------------
                                  $.ajax({
                                           url :ajaxUrl,
                                           //url :eastcom.baseURL+"/srpt/rcpt/common/query" ,
                                           type : 'POST',
                                           async : false,
                                           dataType : "json",
                                           contentType :"application/json",
                                           data:dataStr,
                                           success : function(data) {
                                              datas = data.data;
                                           }
                                  });
                            // };
                        //-------------------------------------------------- 
                           var innerHTML ='<span id="qry_'+count+'" name="otherSpecialCondition" style="display: inline-block; border: 0px solid #e8e8e8; width: 340px;height: 210px">'
                                         +'<span style="display: block;float: left;border: 1px solid #e8e8e8;width: 185px;min-height: 208px;height: 208px;overflow: auto; -moz-user-select:none;" onselectstart="return false;">'
                                         +'<span>'
                                         var m = 0;
                                         for(var item in datas){
                                                var key_id =""; 
                                                var key_name =""; 
                                                var i =0;
                                                var j =0;
                                                if(i<1){
                                                    $.each(datas[item], function(key, val) { 
                                                          if(j==0){
                                                              key_id = key;
                                                          };
                                                          if(j==1){
                                                              key_name = key;
                                                          };
                                                          j++;
                                                    }); 
                                                    i++;
                                                };

                                         innerHTML +=  '<span id="'+m+'" avalue="'+datas[item][key_id]+'" style="display: block;">'+datas[item][key_name]+'</span>' 
                                                  m++;         
                                         } ;
                                        /* for(var item in datas){
                                                 innerHTML +=  '<span id="'+m+'" avalue="'+datas[item].id+'" style="display: block;">'+datas[item].name+'</span>' 
                                                  m++; 
                                         };*/
                             innerHTML += '</span>'
                                         +'</span>'
                                         +'<span style="margin-left:20px;display: block;float: left;border: 1px solid #e8e8e8;width: 133px;min-height: 208px;height: 208px;overflow: auto;-moz-user-select:none;" onselectstart="return false;">'
                                         +'<span>';

                                         var j = 0;
                                         for(var item in datas){
                                                 innerHTML +=  '<span id="'+j+'"  avalue="'+datas[item].id+'" style="display:none">'+datas[item].name+'</span>' 
                                                  j++; 
                                         };  

                               innerHTML +='</span>'
                                         +'</span>'
                                         +'</span>'
                                         +  '<span style="margin-left:20px"></span><input id="checkbox" type="checkbox" style="margin-right: 19px; display:none" />'
                                         +  '<a href="JavaScript:void(0)" onclick="addReport.delZujian(this)" style="top:50%;" ><img style="width: 34px; height: 34px ;margin-left: 20px;"  src="../../static/reportManageSys/images/closehong.png"></a>' 
                                         +  '<p style="display:none">{label:"'+zujianLabel+'",type:"leftrightliandong",id:"qry_'+count+'",xialaType:"'+xialaType+'"}</p>';
                                         
                        return innerHTML;
    
             },
             getdemoselect : function(zujianLabel,count){
                         var innerHTML = ''
                                      +     '<span id="qry_'+count+'" name="otherSpecialCondition" style="display: inline-block; border: 1px solid #e8e8e8; width: 340px;height: 80px">'
                                      +     '<img style="width: 44px; height: 62px ;margin-left: 20px;margin-top: 10px;"  src="../../static/reportManageSys/images/wenben_demo_wu.png">'
                                      +     '<img style="width: 44px; height: 62px ;margin-left: 20px;margin-top: 10px;"  src="../../static/reportManageSys/images/wenben_demo_wu.png">'
                                      +     '<img style="width: 44px; height: 62px ;margin-left: 20px;margin-top: 10px;"  src="../../static/reportManageSys/images/wenben_demo_wu.png">'
                                      +     '<img style="width: 44px; height: 62px ;margin-left: 20px;margin-top: 10px;"  src="../../static/reportManageSys/images/wenben_demo_wu.png">'
                                      +     '<img style="width: 44px; height: 62px ;margin-left: 20px;margin-top: 10px;"  src="../../static/reportManageSys/images/wenben_demo_wu.png">'
                                      +     '</span>'
                                      +     '<span style="margin-left:20px"></span><input id="checkbox" type="checkbox" style="margin-right: 19px; display:none" />'
                                      +     '<a href="JavaScript:void(0)" onclick="addReport.delZujian(this)" ><img style="width: 34px; height: 34px ;margin-left: 20px;"  src="../../static/reportManageSys/images/closehong.png"></a>'
                                      +     '<p style="display:none">{label:"'+zujianLabel+'",type:"demoselect",id:"qry_'+count+'"}</p>';
                                    /*+  '<span style="display:inline-block;width:65px">'+zujianLabel+':</span><input id="qry_'+count+'" type="text" style="width:150px;height:34px" /> '
                                    +  '<span style="margin-left:20px">是否必填:</span><input id="checkbox" type="checkbox" style="margin-right: 19px;" />'
                                    +  '<a href="JavaScript:void(0)" onclick="addReport.delZujian(this)" ><img style="width: 34px; height: 34px ;margin-left: 20px;"  src="../../static/reportManageSys/images/closehong.png"></a>' 
                                    +  '<p style="display:none">{label:"'+zujianLabel+'",type:"text",id:"qry_'+count+'"}</p>'; */ 

                           return innerHTML;   
             }
};
//还原编辑组件源  (因为第一次添加的是时候,会默认添加一个外成div,当再次还原的时候,要加上这个div)
reductionComponentSource  = {
	                        getshurukuang : function(zujianLabel,zujianId){
                                          var innerHTML = '<div style="height:50px"><span style="display:inline-block;width:65px">'+zujianLabel+':</span><input id="'+zujianId+'" type="text" style="width:150px ;height:34px" /> '
                                                     +  '<span style="margin-left:20px">是否必填:</span><input id="checkbox" type="checkbox" style="margin-right: 19px;" />'
                                                     +  '<a href="JavaScript:void(0)" onclick="addReport.delZujian(this)" ><img style="width: 34px; height: 34px ;margin-left: 40px;"  src="../../static/reportManageSys/images/closehong.png"></a>' 
                                                     +  '<p style="display:none">{label:"'+zujianLabel+'",type:"text",id:"'+zujianId+'"}</p>'
                                                     + '</div>'; 
                                            return innerHTML;         
	                        },
	                        getxialakuang : function(zujianLabel,zujianId,xialaType){
	                        	                var datas = "";
	                        	                var data = {"ifId":xialaType}; //地市参数
                                            var dataStr = JSON.stringify(data);
                                            //------------------------------------------------
                                                var ajaxUrl = "";
                                                var query = configUrl_main.query;
                                                if(query.indexOf("sml") != -1){
                                                       ajaxUrl = eastcom.baseURL+configUrl_main.query+"/"+xialaType;
                                                }else{
                                                       ajaxUrl = eastcom.baseURL+configUrl_main.query;
                                                };
                                            //------------------------------------------------
                                               $.ajax({
                                                        url :ajaxUrl,
                                                        //url :eastcom.baseURL+"/srpt/rcpt/common/query" ,
                                                        type : 'POST',
                                                        async : false,
                                                        dataType : "json",
                                                        contentType :"application/json",
                                                        data:dataStr,
                                                        success : function(data) {
                                                           datas = data.data;
                                                        }
                                               });
	                                             
	                        	            var innerHTML = '<div style="height:50px"><span style="display:inline-block;width:65px">'+zujianLabel+':</span>'
	                        	                         + '<select id="'+zujianId+'" style="width:150px;margin-right: 4px ;height:34px">';
                                              var dataArr = []  //[{},{}]
              	                             for(var item in datas){
                                                    var key_id =""; 
                                                    var key_name =""; 
                                                    var i =0;
                                                    var j =0;
                                                    if(i<1){
                                                        $.each(datas[item], function(key, val) { 
                                                              if(j==0){
                                                                  key_id = key;
                                                              };
                                                              if(j==1){
                                                                  key_name = key;
                                                              };
                                                              j++;
                                                        }); 
                                                        i++;
                                                    };

                                           //innerHTML +='<option value="'+datas[item][key_id]+'">'+datas[item][key_name]+'</option>' ;
                                               dataArr.push(datas[item]);      
                                           } ;

                                            var datasArr =  sorts(dataArr);
                                            for (var qq = 0; qq < datasArr.length; qq++) {
                                                     var valueS = datasArr[qq][key_id] == "-"?"":datasArr[qq][key_id];
                                                    innerHTML +='<option value="'+valueS+'">'+datasArr[qq][key_name]+'</option>' ;
                                            };
	                        	                         innerHTML += '</select>'
	                        	                         +  '<span style="margin-left:20px">是否必填:</span><input id="checkbox" type="checkbox" style="margin-right: 19px;" />' 
	                        	                         +  '<a href="JavaScript:void(0)" onclick="addReport.delZujian(this)" ><img style="width: 34px; height: 34px ;margin-left: 40px;"  src="../../static/reportManageSys/images/closehong.png"></a>'
	                        	                         +  '<p style="display:none">{label:"'+zujianLabel+'",type:"select",id:"'+zujianId+'",xialaType:"'+xialaType+'"}</p>' 
	                        	                         + '</div>';
	                        	              return innerHTML;        
	                        },
                          getfuxuankuang : function(zujianLabel,zujianId,xialaType){
                                         var datas = "";
                                          var data = {"ifId":xialaType}; //地市参数
                                           var dataStr = JSON.stringify(data);
                                           //------------------------------------------------
                                               var ajaxUrl = "";
                                               var query = configUrl_main.query;
                                               if(query.indexOf("sml") != -1){
                                                      ajaxUrl = eastcom.baseURL+configUrl_main.query+"/"+xialaType;
                                               }else{
                                                      ajaxUrl = eastcom.baseURL+configUrl_main.query;
                                               };
                                           //------------------------------------------------
                                              $.ajax({
                                                       url :ajaxUrl,
                                                       //url :eastcom.baseURL+"/srpt/rcpt/common/query" ,
                                                       type : 'POST',
                                                       async : false,
                                                       dataType : "json",
                                                       contentType :"application/json",
                                                       data:dataStr,
                                                       success : function(data) {
                                                          datas = data.data;
                                                       }
                                              });
                            
                              var innerHTML = '<div style="width:100%;height:83%"><span id="'+zujianId+'" style="border:1px solid #e8e8e8;display:inline-block;width:340px ;height: 210px;overflow: auto;">'
                                            if(datas == null){
                                                 innerHTML +='暂无数据'
                                                           + '</span>'
                                                           + '</div>';

                                            }else{
                                                  innerHTML +='<span style="display:block;">'
                                                            +     '<input id="all_'+zujianId+'" type="checkbox"/>'
                                                            +     '<span style="margin: 0 10px 0 5px">全选</span>'
                                                            + '</span>';
                                                  //循环复选数据   
                                                  for(var item in datas){
                                                        var key_id =""; 
                                                        var key_name =""; 
                                                        var i =0;
                                                        var j =0;
                                                        if(i<1){
                                                            $.each(datas[item], function(key, val) { 
                                                                  if(j==0){
                                                                      key_id = key;
                                                                  };
                                                                  if(j==1){
                                                                      key_name = key;
                                                                  };
                                                                  j++;
                                                            }); 
                                                            i++;
                                                        };

                                                  innerHTML +='<span style="display:block;">'
                                                            +     '<input type="checkbox" name="'+zujianId+'" value="'+datas[item][key_id]+'" />'
                                                            +     '<span style="margin: 0 10px 0 5px">'+datas[item][key_name]+'</span>'
                                                            + '</span>';      
                                                  } ;       
                                                  /*for(var item in datas){
                                                    innerHTML +='<span style="display:block;">'
                                                              +     '<input type="checkbox" name="'+zujianId+'" value="'+datas[item].id+'" />'
                                                              +     '<span style="margin: 0 10px 0 5px">'+datas[item].name+'</span>'
                                                              + '</span>'
                                                  } ;*/
                                                  innerHTML += '</span>'
                                                              +  '<span style="margin-left:20px"></span><input id="checkbox" type="checkbox" style="margin-right: 19px; display:none" />'
                                                              //+  '<a href="JavaScript:void(0)" onclick="addReport.delZujian(this)" style="top:50%;" ><img style="width: 34px; height: 34px ;margin-left: 20px;"  src="../../static/reportManageSys/images/closehong.png"></a>' 
                                                              +  '<a href="JavaScript:void(0)" onclick="addReport.delZujian(this)" ><img style="width: 34px; height: 34px ;margin-left: 20px;"  src="../../static/reportManageSys/images/closehong.png"></a>'
                                                              +  '<p style="display:none">{label:"'+zujianLabel+'",type:"checkbox",id:"'+zujianId+'",xialaType:"'+xialaType+'"}</p>'
                                                              + '</div>';
                                         };      
                             return innerHTML;

                          },
                          getleftrightkuang : function(zujianLabel,zujianId,xialaType){
                                         var datas = "";
                                          var data = {"ifId":xialaType}; //地市参数
                                           var dataStr = JSON.stringify(data);
                                           //------------------------------------------------
                                               var ajaxUrl = "";
                                               var query = configUrl_main.query;
                                               if(query.indexOf("sml") != -1){
                                                      ajaxUrl = eastcom.baseURL+configUrl_main.query+"/"+xialaType;
                                               }else{
                                                      ajaxUrl = eastcom.baseURL+configUrl_main.query;
                                               };
                                           //------------------------------------------------
                                              $.ajax({
                                                       url :ajaxUrl ,
                                                       //url :eastcom.baseURL+"/srpt/rcpt/common/query" ,
                                                       type : 'POST',
                                                       async : false,
                                                       dataType : "json",
                                                       contentType :"application/json",
                                                       data:dataStr,
                                                       success : function(data) {
                                                          datas = data.data;
                                                       }
                                              });

                                         
                          
                                         var innerHTML ='<div style="width:100%;height:83%"><span id="'+zujianId+'" name="otherSpecialCondition" style="display: inline-block; border: 0px solid #e8e8e8; width: 340px;height: 210px">'
                                                       +'<span style="display: block;float: left;border: 1px solid #e8e8e8;width: 145px;min-height: 208px;height: 208px;overflow: auto; -moz-user-select:none;" onselectstart="return false;">'
                                                       +'<span id="list_left">'
                                                       var m = 0;
                                                       for(var item in datas){
                                                             var key_id =""; 
                                                             var key_name =""; 
                                                             var i =0;
                                                             var j =0;
                                                             if(i<1){
                                                                 $.each(datas[item], function(key, val) { 
                                                                       if(j==0){
                                                                           key_id = key;
                                                                       };
                                                                       if(j==1){
                                                                           key_name = key;
                                                                       };
                                                                       j++;
                                                                 }); 
                                                                 i++;
                                                             };

                                                       innerHTML +=  '<span id="'+m+'" avalue="'+datas[item][key_id]+'">'+datas[item][key_name]+'</span>' 
                                                                 m++;        
                                                       } ;
                                                       /*var i = 0;
                                                       for(var item in datas){
                                                               innerHTML +=  '<span id="'+i+'" avalue="'+datas[item].id+'">'+datas[item].name+'</span>' 
                                                                i++; 
                                                       };*/
                                           innerHTML += '</span>'
                                                  +'<input type="text" id="list_left_input" style="width:166px ;display:none" /> '
                                                       +'</span>'
                                                       +'<span style="display: block;float: left;border: 0px solid #e8e8e8; padding-top:6px;width: 60px;min-height: 208px;height: 208px;overflow: auto;">'
                                                       +  '<center>'
                                                       +     '<button class="btn btn-success btn-sm" href="#" onclick="checkAll()" >全选</button><br/><br/>'
                                                       +     '<button class="btn btn-success btn-sm" href="#" onclick="checkPart()" >添加</button><br/><br/>'
                                                       +     '<button class="btn btn-success btn-sm" href="#" onclick="delPart()" >删除</button><br/><br/>'
                                                       +     '<button class="btn btn-success btn-sm" href="#" onclick="delAll()" >全删</button><br/><br/>'
                                                       +  '</center>' 
                                                       +'</span>'
                                                       +'<span style="display: block;float: left;border: 1px solid #e8e8e8;width: 133px;min-height: 208px;height: 208px;overflow: auto;-moz-user-select:none;" onselectstart="return false;">'
                                                       +'<span id="list_right">';
                                                       var n = 0;
                                                       for(var item in datas){
                                                             var key_id =""; 
                                                             var key_name =""; 
                                                             var i =0;
                                                             var j =0;
                                                             if(i<1){
                                                                 $.each(datas[item], function(key, val) { 
                                                                       if(j==0){
                                                                           key_id = key;
                                                                       };
                                                                       if(j==1){
                                                                           key_name = key;
                                                                       };
                                                                       j++;
                                                                 }); 
                                                                 i++;
                                                             };

                                                       //innerHTML +='<option value="'+datas[item][key_id]+'">'+datas[item][key_name]+'</option>' ;   
                                                       innerHTML +=  '<span id="'+n+'" avalue="'+datas[item][key_id]+'" style="display:none">'+datas[item][key_name]+'</span>' 
                                                                 n++;        
                                                       } ;
                                                       /*var j = 0;
                                                       for(var item in datas){
                                                               innerHTML +=  '<span id="'+j+'"  avalue="'+datas[item].id+'" style="display:none">'+datas[item].name+'</span>' 
                                                                j++; 
                                                       };  */

                                             innerHTML +='</span>'
                                                  +'<input type="text" id="list_right_input" style="width:166px ;display:none" /> '
                                                       +'</span>'
                                                       +'</span>'
                                                       +  '<span style="margin-left:20px"></span><input id="checkbox" type="checkbox" style="margin-right: 19px; display:none" />'
                                                       +  '<a href="JavaScript:void(0)" onclick="addReport.delZujian(this)" style="top:50%;" ><img style="width: 34px; height: 34px ;margin-left: 20px;"  src="../../static/reportManageSys/images/closehong.png"></a>' 
                                                       +  '<p style="display:none">{label:"'+zujianLabel+'",type:"leftRight",id:"'+zujianId+'",xialaType:"'+xialaType+'"}</p>'
                                                       + '</div>';
                                      return innerHTML;

                          },
                          getleftrightliandong : function(zujianLabel,count,xialaType){
                                          var datas = "";
                                           var data = {"ifId":xialaType}; //地市参数
                                            var dataStr = JSON.stringify(data);
                                            //------------------------------------------------
                                                var ajaxUrl = "";
                                                var query = configUrl_main.query;
                                                if(query.indexOf("sml") != -1){
                                                       ajaxUrl = eastcom.baseURL+configUrl_main.query+"/"+xialaType;
                                                }else{
                                                       ajaxUrl = eastcom.baseURL+configUrl_main.query;
                                                };
                                            //------------------------------------------------
                                               $.ajax({
                                                        url :ajaxUrl,
                                                        //url :eastcom.baseURL+"/srpt/rcpt/common/query" ,
                                                        type : 'POST',
                                                        async : false,
                                                        dataType : "json",
                                                        contentType :"application/json",
                                                        data:dataStr,
                                                        success : function(data) {
                                                           datas = data.data;
                                                        }
                                               });
                                     //-------------------------------------------------- 
                                        var innerHTML ='<div style="width:100%;height:83%"><span id="qry_'+count+'" name="otherSpecialCondition" style="display: inline-block; border: 0px solid #e8e8e8; width: 340px;height: 210px">'
                                                      +'<span style="display: block;float: left;border: 1px solid #e8e8e8;width: 185px;min-height: 208px;height: 208px;overflow: auto; -moz-user-select:none;" onselectstart="return false;">'
                                                      +'<span>';
                                                      var m = 0;
                                                      for(var item in datas){
                                                             var key_id =""; 
                                                             var key_name =""; 
                                                             var i =0;
                                                             var j =0;
                                                             if(i<1){
                                                                 $.each(datas[item], function(key, val) { 
                                                                       if(j==0){
                                                                           key_id = key;
                                                                       };
                                                                       if(j==1){
                                                                           key_name = key;
                                                                       };
                                                                       j++;
                                                                 }); 
                                                                 i++;
                                                             };

                                                      innerHTML +=  '<span id="'+m+'" avalue="'+datas[item][key_id]+'" style="display: block;">'+datas[item][key_name]+'</span>' 
                                                               m++;         
                                                      } ;
                                                      /*var i = 0;
                                                      for(var item in datas){
                                                              innerHTML +=  '<span id="'+i+'" avalue="'+datas[item].id+'" style="display: block;">'+datas[item].name+'</span>' 
                                                               i++; 
                                                      };*/
                                          innerHTML += '</span>'
                                                      +'</span>'
                                                   
                                                      +'<span style="margin-left:20px;display: block;float: left;border: 1px solid #e8e8e8;width: 133px;min-height: 208px;height: 208px;overflow: auto;-moz-user-select:none;" onselectstart="return false;">'
                                                      +'<span>';

                                                      var j = 0;
                                                      for(var item in datas){
                                                              innerHTML +=  '<span id="'+j+'"  avalue="'+datas[item].id+'" style="display:none">'+datas[item].name+'</span>' 
                                                               j++; 
                                                      };  

                                            innerHTML +='</span>'
                                                      +'</span>'
                                                      +'</span>'
                                                      +  '<span style="margin-left:20px"></span><input id="checkbox" type="checkbox" style="margin-right: 19px; display:none" />'
                                                      +  '<a href="JavaScript:void(0)" onclick="addReport.delZujian(this)" style="top:50%;" ><img style="width: 34px; height: 34px ;margin-left: 20px;"  src="../../static/reportManageSys/images/closehong.png"></a>' 
                                                      +  '<p style="display:none">{label:"'+zujianLabel+'",type:"leftrightliandong",id:"qry_'+count+'",xialaType:"'+xialaType+'"}</p>'
                                                      +  '</div>';
                                                      
                                     return innerHTML;
                          
                          },
                          getdemoselect : function(zujianLabel,zujianId){
                                      var innerHTML = ''
                                                   +     '<div style="width:100%;height:34%"><span id="'+zujianId+'" name="otherSpecialCondition" style="display: inline-block; border: 1px solid #e8e8e8; width: 340px;height: 80px">'
                                                   +     '<img style="width: 44px; height: 62px ;margin-left: 20px;margin-top: 10px;"  src="../../static/reportManageSys/images/wenben_demo_wu.png">'
                                                   +     '<img style="width: 44px; height: 62px ;margin-left: 20px;margin-top: 10px;"  src="../../static/reportManageSys/images/wenben_demo_wu.png">'
                                                   +     '<img style="width: 44px; height: 62px ;margin-left: 20px;margin-top: 10px;"  src="../../static/reportManageSys/images/wenben_demo_wu.png">'
                                                   +     '<img style="width: 44px; height: 62px ;margin-left: 20px;margin-top: 10px;"  src="../../static/reportManageSys/images/wenben_demo_wu.png">'
                                                   +     '<img style="width: 44px; height: 62px ;margin-left: 20px;margin-top: 10px;"  src="../../static/reportManageSys/images/wenben_demo_wu.png">'
                                                   +     '</span>'
                                                   +     '<span style="margin-left:20px"></span><input id="checkbox" type="checkbox" style="margin-right: 19px; display:none" />'
                                                   +     '<a href="JavaScript:void(0)" onclick="addReport.delZujian(this)" ><img style="width: 34px; height: 34px ;margin-left: 20px;"  src="../../static/reportManageSys/images/closehong.png"></a>'
                                                   +     '<p style="display:none">{label:"'+zujianLabel+'",type:"demoselect",id:"'+zujianId+'"}</p>'
                                                   +     '</div>';

                                        return innerHTML;   
                          }
};




//还原页面组件
showComponentSource = {
	           getshurukuang : function(tdWidth,label,displayflag,id,type,isRequire){
                                var innerHTML= '<td width="'+tdWidth+'px">'
		                                    +  '<span style="display:inline-block;width:65px">'+label+':<span style="color:red ;display:'+displayflag+'">*</span></span>' 
		                                    +  '<input name="'+isRequire+'" onblur="publicReport.panduanIsnull(this)"  id="'+id+'" type="'+type+'" style="width:150px ;height:34px"/>'
		                                    +  '<span style="color:red; display:none">请输入值!</span>'
		                                    +  '<p style="display:none">{label:"'+label+'",type:"'+type+'",isRequire:"'+isRequire+'",id:"'+id+'"}</p>'
		                                    +  '</td>' ;
		                        return innerHTML;             
	           },
	           getxialakuang : function(tdWidth,label,displayflag,id,type,isRequire,xialaType){
	           	                      var xialaType = xialaType; 
	           	                      var datass = "";
	           	                      
	           	                        var data = {"ifId":xialaType}; //地市参数
	           	                        var dataStr = JSON.stringify(data);
                                      //------------------------------------------------
                                       var ajaxUrl = "";
                                       var query = configUrl_main.query;
                                       if(query.indexOf("sml") != -1){
                                              ajaxUrl = eastcom.baseURL+configUrl_main.query+"/"+xialaType;
                                       }else{
                                              ajaxUrl = eastcom.baseURL+configUrl_main.query;
                                       };
                                   //------------------------------------------------
	           	                           $.ajax({
                                                  url :ajaxUrl,
	           	                                    //url :eastcom.baseURL+"/srpt/rcpt/common/query" ,
	           	                                    type : 'POST',
	           	                                    async : false,
	           	                                    dataType : "json",
	           	                                    contentType :"application/json",
	           	                                    data:dataStr,
	           	                                    success : function(data) {
	           	                                       datas = data.data;
	           	                                    }
	           	                           });
	           	                    
	           	                   
                                    
	           	                	var innerHTML= '<td width="'+tdWidth+'px">'
	           	                	        +  '<span style="display:inline-block;width:65px">'+label+':<span style="color:red ;display:'+displayflag+'">*</span></span>'
	           	                	        +  '<select  id="'+id+'" style="width:150px ;height:34px">';
                                                         var dataArr = []  // [{},{}]
                                                         for(var item in datas){
                                                               var key_id =""; 
                                                               var key_name =""; 
                                                               var i =0;
                                                               var j =0;
                                                               if(i<1){
                                                                   $.each(datas[item], function(key, val) { 
                                                                         if(j==0){
                                                                             key_id = key;
                                                                         };
                                                                         if(j==1){
                                                                             key_name = key;
                                                                         };
                                                                         j++;
                                                                   }); 
                                                                   i++;
                                                               };
                  
                                                         //innerHTML +='<option value="'+datas[item][key_id]+'">'+datas[item][key_name]+'</option>' ;
                                                             dataArr.push(datas[item]);      
                                                         } ;

                                                          var datasArr =  sorts(dataArr);
                                                          for (var qq = 0; qq < datasArr.length; qq++) {
                                                                  var valueS = datasArr[qq][key_id] == "-"?"":datasArr[qq][key_id];
                                                                  innerHTML +='<option value="'+valueS +'">'+datasArr[qq][key_name]+'</option>' ;
                                                          };


	           	                           
	           	                	        innerHTML +=  '</select>'
	           	                	        +  '<span style="color:red ; display:none"">请输入值!</span>'
	           	                	        +  '<p style="display:none">{label:"'+label+'",type:"'+type+'",isRequire:"'+isRequire+'",xialaType:"'+xialaType+'",id:"'+id+'"}</p>'
	           	                	        +  '</td>';
	           	                	        return innerHTML;  
	           	               
	           },
             getfuxuankuang :  function(zujianLabel,id,type,isRequire,xialaType){

                                 var datas = "";
                                  var data = {"ifId":xialaType}; //地市参数
                                            var dataStr = JSON.stringify(data);
                                            //------------------------------------------------
                                       var ajaxUrl = "";
                                       var query = configUrl_main.query;
                                       if(query.indexOf("sml") != -1){
                                              ajaxUrl = eastcom.baseURL+configUrl_main.query+"/"+xialaType;
                                       }else{
                                              ajaxUrl = eastcom.baseURL+configUrl_main.query;
                                       };
                                   //------------------------------------------------
                                               $.ajax({
                                                        url :ajaxUrl,
                                                        //url :eastcom.baseURL+"/srpt/rcpt/common/query" ,
                                                        type : 'POST',
                                                        async : false,
                                                        dataType : "json",
                                                        contentType :"application/json",
                                                        data:dataStr,
                                                        success : function(data) {
                                                           datas = data.data;
                                                        }
                                               });
                                 //-----------------------------------------------------------------------

                                 var innerHTML = '<span id="'+id+'" name="otherSpecialCondition" style="display:inline-block;width:95% ;border: 1px solid #e8e8e8;margin-top: 10px;">'
                                                if(datas == null){
                                                     innerHTML +='暂无数据';
                                                }else{
                                                      innerHTML +='<span style="display:block;height:28px;">'
                                                                +     '<input id="all_'+id+'" type="checkbox" style="margin-left:8px"; onclick="suppleMethod.allCheckBox(\''+id+'\')"/>'
                                                                +     '<span style="margin: 0 10px 0 5px">全选</span>'
                                                                + '</span>'
                                                                + '<span style="display:block;overflow: auto;height: 190px;">';  //gundong
                                                      //循环复选数据  
                                                      for(var item in datas){
                                                            var key_id =""; 
                                                            var key_name =""; 
                                                            var i =0;
                                                            var j =0;
                                                            if(i<1){
                                                                $.each(datas[item], function(key, val) { 
                                                                      if(j==0){
                                                                          key_id = key;
                                                                      };
                                                                      if(j==1){
                                                                          key_name = key;
                                                                      };
                                                                      j++;
                                                                }); 
                                                                i++;
                                                            };

                                                      innerHTML +='<span style="display:block;">'
                                                                +     '<input type="checkbox" name="'+id+'" value="'+datas[item][key_id]+'" />'
                                                                +     '<span style="margin: 0 10px 0 5px">'+datas[item][key_name]+'</span>'
                                                                + '</span>';      
                                                      } ;        
                                                      /*for(var item in datas){
                                                        innerHTML +='<span style="display:block;">'
                                                                  +     '<input type="checkbox" name="'+id+'" value="'+datas[item].name+'" />'
                                                                  +     '<span style="margin: 0 10px 0 5px">'+datas[item].name+'</span>'
                                                                  + '</span>'
                                                      } ;*/
                                                      innerHTML += '</span>' //gongdong
                                                                  +  '<p style="display:none">{label:"'+zujianLabel+'",type:"'+type+'",id:"'+id+'",isRequire:"'+isRequire+'",xialaType:"'+xialaType+'"}</p>'
                                                                  + '</span>';
                                             };      
                                 return innerHTML;



             },
             getleftrightkuang :  function(zujianLabel,id,type,isRequire,xialaType){
                                 /*alert(id);
                                 alert(type);
                                 alert(isRequire);
                                 alert(xialaType);
                                */

                                 var datas = "";
                                  var data = {"ifId":xialaType}; //地市参数
                                            var dataStr = JSON.stringify(data);
                                            //------------------------------------------------
                                                var ajaxUrl = "";
                                                var query = configUrl_main.query;
                                                if(query.indexOf("sml") != -1){
                                                       ajaxUrl = eastcom.baseURL+configUrl_main.query+"/"+xialaType;
                                                }else{
                                                       ajaxUrl = eastcom.baseURL+configUrl_main.query;
                                                };
                                            //------------------------------------------------
                                               $.ajax({
                                                        url :ajaxUrl,
                                                        //url :eastcom.baseURL+"/srpt/rcpt/common/query" ,
                                                        type : 'POST',
                                                        async : false,
                                                        dataType : "json",
                                                        contentType :"application/json",
                                                        data:dataStr,
                                                        success : function(data) {
                                                           datas = data.data;
                                                        }
                                               });
                              
                               
                                var innerHTML ='<span id="'+id+'" name="otherSpecialCondition" style="position: relative; display: inline-block; border: 0px solid #e8e8e8; width: 100%;height: 210px;margin-top: 10px;">'
                                   + '<span style="position: absolute;top: -10px;left: 15px; padding-right: 10px;padding-left: 10px;;background: #fff">待选区</span>'
                                   + '<span style="position: absolute;top: -10px;left: 365px;padding-right: 10px;padding-left: 10px;;background: #fff">已选区</span>'
                                              +'<span style="padding: 10px;display: block;float: left;border: 1px solid #e8e8e8;width: 245px;min-height: 208px;height: 208px;overflow: auto; -moz-user-select:none;" onselectstart="return false;">'
                                              +'<span id="list_left_'+id+'" class = "shiftCtrl_left">';
                                               var m = 0;
                                              for(var item in datas){
                                                    var key_id =""; 
                                                    var key_name =""; 
                                                    var i =0;
                                                    var j =0;
                                                    if(i<1){
                                                        $.each(datas[item], function(key, val) { 
                                                              if(j==0){
                                                                  key_id = key;
                                                              };
                                                              if(j==1){
                                                                  key_name = key;
                                                              };
                                                              j++;
                                                        }); 
                                                        i++;
                                                    };

                                              //innerHTML +='<option value="'+datas[item][key_id]+'">'+datas[item][key_name]+'</option>' ;   
                                              innerHTML +=  '<span id="'+id+'_'+m+'" avalue="'+datas[item][key_id]+'">'+datas[item][key_name]+'</span>' 
                                                        m++;        
                                              } ;
                                             /* var i = 0;
                                              for(var item in datas){
                                                      innerHTML +=  '<span id="'+id+'_'+i+'" avalue="'+datas[item].name+'">'+datas[item].name+'</span>' 
                                                       i++; 
                                              };*/
                                  innerHTML += '</span>'
                                         +'<input type="text" id="list_left_input_'+id+'" style="width:166px;display:none" /> '
                                              +'</span>'
                                              +'<span style="display: block;float: left;border: 0px solid #e8e8e8; padding-top:6px;width: 100px;min-height: 208px;height: 208px;overflow: auto;">'
                                              +  '<center>'
                                              +     '<button class="btn btn-success btn-sm" href="#" onclick="suppleMethod.checkAll(\''+id+'\')" >全选</button><br/><br/>'
                                              +     '<button class="btn btn-success btn-sm" href="#" onclick="suppleMethod.checkPart(\''+id+'\')" >添加</button><br/><br/>'
                                              +     '<button class="btn btn-success btn-sm" href="#" onclick="suppleMethod.delPart(\''+id+'\')" >删除</button><br/><br/>'
                                              +     '<button class="btn btn-success btn-sm" href="#" onclick="suppleMethod.delAll(\''+id+'\')" >全删</button><br/><br/>'
                                              +  '</center>' 
                                              +'</span>'
                                              +'<span style="padding: 10px;display: block;float: left;border: 1px solid #e8e8e8;width: 233px;min-height: 208px;height: 208px;overflow: auto;-moz-user-select:none;" onselectstart="return false;">'
                                              +'<span id="list_right_'+id+'" class = "shiftCtrl_right">';
                                              var n = 0;
                                              for(var item in datas){
                                                    var key_id =""; 
                                                    var key_name =""; 
                                                    var i =0;
                                                    var j =0;
                                                    if(i<1){
                                                        $.each(datas[item], function(key, val) { 
                                                              if(j==0){
                                                                  key_id = key;
                                                              };
                                                              if(j==1){
                                                                  key_name = key;
                                                              };
                                                              j++;
                                                        }); 
                                                        i++;
                                                    };

                                              //innerHTML +='<option value="'+datas[item][key_id]+'">'+datas[item][key_name]+'</option>' ;   
                                              innerHTML +=  '<span id="'+id+'_'+n+'" avalue="'+datas[item][key_id]+'" style="display:none">'+datas[item][key_name]+'</span>' 
                                                        n++;        
                                              } ;
                                              /*var j = 0;
                                              for(var item in datas){
                                                      innerHTML +=  '<span id="'+id+'_'+j+'" avalue="'+datas[item].name+'" style="display:none" >'+datas[item].name+'</span>' 
                                                       j++; 
                                              };  */

                                    innerHTML +='</span>'
                                         +'<input type="text" id="list_right_input_'+id+'" style="width:166px;display:none" /> '
                                              +'</span>'
                                              +  '<p style="display:none">{label:"'+zujianLabel+'",type:"'+type+'",id:"'+id+'",isRequire:"'+isRequire+'",xialaType:"'+xialaType+'"}</p>'
                                              +'</span>';
                                              
                             return innerHTML;



             },
             getleftrightliandong : function(zujianLabel,id,type,isRequire,xialaType){
                             var datas = "";
                              var data = {"ifId":xialaType}; //地市参数
                                            var dataStr = JSON.stringify(data);
                                            //------------------------------------------------
                                                var ajaxUrl = "";
                                                var query = configUrl_main.query;
                                                if(query.indexOf("sml") != -1){
                                                       ajaxUrl = eastcom.baseURL+configUrl_main.query+"/"+xialaType;
                                                }else{
                                                       ajaxUrl = eastcom.baseURL+configUrl_main.query;
                                                };
                                            //------------------------------------------------
                                               $.ajax({
                                                        url :ajaxUrl,
                                                        //url :eastcom.baseURL+"/srpt/rcpt/common/query" ,
                                                        type : 'POST',
                                                        async : false,
                                                        dataType : "json",
                                                        contentType :"application/json",
                                                        data:dataStr,
                                                        success : function(data) {
                                                           datas = data.data;
                                                        }
                                               });
                        //-------------------------------------------------- 
                           var innerHTML ='<span id="'+id+'" name="otherSpecialCondition" style="display: inline-block; border: 0px solid #e8e8e8; width: 100%;height: 210px">'
                                         +'<span style="display: block;float: left;border: 1px solid #e8e8e8;width: 245px;min-height: 208px;height: 208px;overflow: auto; -moz-user-select:none;padding: 0 10px;cursor: pointer;" onselectstart="return false;">'
                                         +'<span>';
                                         var m = 0;

                                         //----------------------------------
                                           var urls = ["srpt-enum-city","srpt-enum-colorCfg","srpt-enum-dataSource",
                                                       "srpt-enum-city","srpt-enum-colorCfg","srpt-enum-dataSource",
                                                       "srpt-enum-city","srpt-enum-colorCfg","srpt-enum-dataSource",
                                                       "srpt-enum-city","srpt-enum-colorCfg","srpt-enum-dataSource",
                                                       "srpt-enum-dataSource"];
                                         //----------------------------------
                                         for(var item in datas){
                                                var key_id =""; 
                                                var key_name =""; 
                                                var i =0;
                                                var j =0;
                                                if(i<1){
                                                    $.each(datas[item], function(key, val) { 
                                                          if(j==0){
                                                              key_id = key;
                                                          };
                                                          if(j==1){
                                                              key_name = key;
                                                          };
                                                          j++;
                                                    }); 
                                                    i++;
                                                };

                                         innerHTML +=  '<span id="'+m+'" avalue="'+datas[item][key_id]+'" valueUrl="'+urls[m]+'" onclick="leftrightliandong.clicking(this,\''+id+'\')" style="display: block;">'+datas[item][key_name]+'</span>' 
                                                  m++;

                                         } ;
                                         
                             innerHTML += '</span>'
                                         +'</span>'
                                         //-------------------------------------------------
                                         +'<span style="display: block;float: left;border:0px solid #e8e8e8;width:98px;min-height: 208px;height: 208px;">'
                                         + '<img style="width: 34px; height: 34px ;margin: 80px 35px;"  src="../../static/reportManageSys/images/jt.png">'
                                         +'</span>'  
                                         //-------------------------------------------------
                                         +'<span style="margin-left:1px;display: block;float: left;border: 1px solid #e8e8e8;width: 233px;min-height: 208px;height: 208px;overflow: auto;-moz-user-select:none;padding: 0 10px;" onselectstart="return false;">'
                                         +'<span name="result_span">';

                                        /* var j = 0;
                                         for(var item in datas){
                                                 innerHTML +=  '<span id="'+j+'"  avalue="'+datas[item].id+'" style="display:none">'+datas[item].name+'</span>' 
                                                  j++; 
                                         };  */

                               innerHTML +='</span>'
                                         +'</span>'
                                         +  '<p style="display:none">{label:"'+zujianLabel+'",type:"'+type+'",id:"'+id+'",isRequire:"'+isRequire+'",xialaType:"'+xialaType+'"}</p>'
                                         +'</span>';
                                         
                                         
                        return innerHTML;
             
             },
             getdemoselect : function(zujianLabel,id,type,isRequire){
                              
                                var data = {"ifId":"srpt-cfg-deviceQueryModelInfo"};
                                var dataStr = JSON.stringify(data); 
                                var res = commonAjax(configUrl_main.query_deviceQueryModelInfo,dataStr,"","");
                                //var res = commonAjax("/srpt/rcpt/common/query",dataStr,"","");
                                var arr = res.data;
                                var innerHTML ='<span id="'+id+'" name="otherSpecialCondition" style="overflow-y:auto; display: inline-block;margin-bottom: 8px; border: 1px solid #e8e8e8; width: 92%;height: 275px">'
                                              
                                    for (var i = 0; i < arr.length; i++) {
                                               
                                           innerHTML+=     '<span name="span_wenben" sc="0" ondblclick="demoselect.showDetailInfo(this)" onclick="demoselect.selectCurrDemo(this,\''+arr[i].type+'\')" onmouseover="demoselect.addBackground(this)" onmouseout="demoselect.delBackground(this)" style="display:inline-block;margin-left: 20px;margin-top: 10px;width:86px;cursor: pointer;">'
                                           if (arr[i].type == "shebei") {
                                                    innerHTML+=    '<img name="img_demo_shebei" style="width: 84px; height: 102px ;"  src="../../static/reportManageSys/images/wenben_demo_shebei_wu.png">'
                                           }else if (arr[i].type == "duankou") {
                                                    innerHTML+=    '<img name="img_demo_duankou" style="width: 84px; height: 102px ;"  src="../../static/reportManageSys/images/wenben_demo_duankou_wu.png">'
                                           }else{
                                                    innerHTML+=    '<img name="img_demo_wenben" style="width: 84px; height: 102px ;"  src="../../static/reportManageSys/images/wenben_demo_wu.png">'
                                           };         

                                                   // +              '<img name="img_demo_wenben" style="width: 84px; height: 102px ;"  src="../../static/reportManageSys/images/wenben_demo_wu.png">'
                                           innerHTML+=               '<b style="font-weight: 500;" title="'+arr[i].tpl_name+'">'
                                                    +              '<span style="padding-left:10px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:80px;">'+arr[i].tpl_name+'</span></b>'
                                                    +              '<span style="display:none">'+arr[i].tpl_id+'</span>'
                                                    +     '</span>';
                                           
                                    };      

                                     innerHTML+='<p style="display:none">{label:"'+zujianLabel+'",type:"'+type+'",id:"'+id+'",isRequire:"'+isRequire+'"}</p>'
                                              +'</span>';
                                              
                                              
                             return innerHTML;

             }

};

var suppleMethod = {
        checkAll : function(vals){
                    $("#list_left_"+vals).find('span').each(function(index, el) {
                            $(this).css('display', 'none');
                    });
                    $("#list_right_"+vals).find('span').each(function(index, el) {
                            $(this).css('display', 'block');
                    });
        },
        checkPart : function(vals){
                    
                    var selectStr = $("#"+vals).find($("#list_left_input_"+vals)).val();
                    if (selectStr == "" || selectStr == " ") {alert("请选择指标!");return;};
                    var selectArr = selectStr.split(",");
                    $("#"+vals).find($("#list_left_input_"+vals)).val("");
                    for (var i = 0; i < selectArr.length; i++) {
                    //隐藏选中的指标
                       $("#list_left_"+vals).find('span[avalue = "'+selectArr[i]+'"]').css('display', 'none').removeClass('on'); 
                    //显示选中的指标
                       $("#list_right_"+vals).find('span[avalue = "'+selectArr[i]+'"]').css('display', 'block');             
                    };
        },
        delPart : function(vals){
                   var selectStr = $("#"+vals).find($("#list_right_input_"+vals)).val();
                   if (selectStr == "" || selectStr == " ") {alert("请选择指标!");return;};
                   var selectArr = selectStr.split(",");
                   $("#"+vals).find($("#list_right_input_"+vals)).val("");
                   for (var i = 0; i < selectArr.length; i++) {
                   //隐藏选中的指标
                       $("#list_right_"+vals).find('span[avalue = "'+selectArr[i]+'"]').css('display', 'none').removeClass('on'); 
                    //显示选中的指标
                       $("#list_left_"+vals).find('span[avalue = "'+selectArr[i]+'"]').css('display', 'block');             
                    };
        },
        delAll : function(vals){
                 $("#list_right_"+vals).find('span').each(function(index, el) {
                         $(this).css('display', 'none');
                 });
                 $("#list_left_"+vals).find('span').each(function(index, el) {
                         $(this).css('display', 'block');
                 });
        },
        addComponentSource_getleftrightkuang : function(){
                  var key=0;  //记录ctrl/shift键  
                  var val=",";//记录已经选择的值  
                  var ibe =-1; //记录初始值  
                  $(document).keydown(function(e){  
                      if(e.ctrlKey){  
                          key=1;  
                      }else if(e.shiftKey){  
                          key=2;  
                      } ; 
                      //$("#bb").val("初始值:"+ibe+" key:"+key);  
                  }).keyup(function(){  
                      key=0;  
                   });  
                  $("#list_left span").click(function(){  
                      var i=$(this).index();  
                      if(ibe!=-1&&key==2){  
                          $(this).siblings().removeAttr("class");  
                          val="";  
                          for(var ii=Math.min(i,ibe);ii<=Math.max(i,ibe);ii++){  
                              val+=ii+",";  
                              $("#list_left span").eq(ii).addClass("on");  
                          } ; 
                      }else if(key==1){  
                          if(val.indexOf(","+i+",")!=-1){  
                              val=val.replace(i+",",",");  
                              $(this).removeAttr("class");  
                          }else{  
                              val+=i+",";  
                              $(this).addClass("on");  
                              ibe=i;  
                          } ; 
                      }else{  
                          $(this).addClass("on").siblings().removeAttr("class");  
                          ibe=i;  
                          val=i+",";  
                      } ; 
                      var valArr = val.split(",");
                      var zhenValue = [];
                      for (var i = 0; i < valArr.length; i++) {
                               zhenValue.push($("#"+valArr[i]).attr('avalue'));
                      };
                      $("#list_left_input").val(zhenValue);  
                  });  
                  $("#list_right span").click(function(){  
                      var i=$(this).index();  
                      if(ibe!=-1&&key==2){  
                          $(this).siblings().removeAttr("class");  
                          val="";  
                          for(var ii=Math.min(i,ibe);ii<=Math.max(i,ibe);ii++){  
                              val+=ii+",";  
                              $("#list_right span").eq(ii).addClass("on");  
                          };  
                      }else if(key==1){  
                          if(val.indexOf(","+i+",")!=-1){  
                              val=val.replace(i+",",",");  
                              $(this).removeAttr("class");  
                          }else{  
                              val+=i+",";  
                              $(this).addClass("on");  
                              ibe=i;  
                          };  
                      }else{  
                          $(this).addClass("on").siblings().removeAttr("class");  
                          ibe=i;  
                          val=i+",";  
                      } ; 
                      var valArr = val.split(",");
                      var zhenValue = [];
                      for (var i = 0; i < valArr.length; i++) {
                               zhenValue.push($("#"+valArr[i]).attr('avalue'));
                      };
                      $("#list_right_input").val(zhenValue);
                  });  
        },
        showComponentSource_getleftrightkuang : function(id){
                  var key=0;  //记录ctrl/shift键  
                  var val=",";//记录已经选择的值  
                  var ibe =-1; //记录初始值  
                  $(document).keydown(function(e){  
                      if(e.ctrlKey){  
                          key=1;  
                      }else if(e.shiftKey){  
                          key=2;  
                      } ; 
                      //$("#bb").val("初始值:"+ibe+" key:"+key);  
                  }).keyup(function(){  
                      key=0;  
                   });  
                  $("#"+id).find($(".shiftCtrl_left span")).click(function(){  
                      var i=$(this).index();  
                      if(ibe!=-1&&key==2){  
                          $(this).siblings().removeAttr("class");  
                          val="";  
                          for(var ii=Math.min(i,ibe);ii<=Math.max(i,ibe);ii++){  
                              val+=ii+",";  
                              $("#"+id).find($(".shiftCtrl_left span")).eq(ii).addClass("on");  
                          };  
                      }else if(key==1){  
                          if(val.indexOf(","+i+",")!=-1){  
                              val=val.replace(i+",",",");  
                              $(this).removeAttr("class");  
                          }else{  
                              val+=i+",";  
                              $(this).addClass("on");  
                              ibe=i;  
                          };  
                      }else{  
                          $(this).addClass("on").siblings().removeAttr("class");  
                          ibe=i;  
                          val=i+",";  
                      };  
                      var valArr = val.split(",");
                      var zhenValue = [];
                      for (var i = 0; i < valArr.length; i++) {
                               zhenValue.push($("#"+id+"_"+valArr[i]).attr('avalue'));
                      };
                      $("#list_left_input_"+id).val(zhenValue);  
                  });  
                  $("#"+id).find($(".shiftCtrl_right span")).click(function(){  
                      var i=$(this).index();  
                      if(ibe!=-1&&key==2){  
                          $(this).siblings().removeAttr("class");  
                          val="";  
                          for(var ii=Math.min(i,ibe);ii<=Math.max(i,ibe);ii++){  
                              val+=ii+",";  
                              $("#"+id).find($(".shiftCtrl_right span")).eq(ii).addClass("on");  
                          };  
                      }else if(key==1){  
                          if(val.indexOf(","+i+",")!=-1){  
                              val=val.replace(i+",",",");  
                              $(this).removeAttr("class");  
                          }else{  
                              val+=i+",";  
                              $(this).addClass("on");  
                              ibe=i;  
                          } ; 
                      }else{  
                          $(this).addClass("on").siblings().removeAttr("class");  
                          ibe=i;  
                          val=i+",";  
                      };  
                      var valArr = val.split(",");
                      var zhenValue = [];
                      for (var i = 0; i < valArr.length; i++) {
                               zhenValue.push($("#"+id+"_"+valArr[i]).attr('avalue'));
                      };
                      $("#list_right_input_"+id).val(zhenValue);
                  });  
        },

        //复选框
        allCheckBox : function(id){
               var check =  $("#all_"+id).is(':checked');
               $("#"+id).find('input[name = "'+id+'"]').each(function(index, el) {
                      $(this).prop("checked",check);
               });
                 
        }
};

//onmousedown
function onrightdown(){
    
        $("span[name = 'img_']").mousedown(function(event){
         var tip = $("#mm1"); 
          var event2=event ? event : window.event;
               if (event2.button==2){ 
                    tip.css("margin-left",event2.clientX+"px").css("margin-top",event2.clientY+"px");  
                    tip.css("display","block");
               };
  
        });
};

var demoselect = {
        selectCurrDemo : function(obj,type){
              //判断点击第一次选中,第二次取消选中 
               var sc = $(obj).attr('sc');
               console.log(sc);
               if (type == "shebei") {
                   if (sc == 0) {
                        //清空选中和选中的值
                          $("span[name='span_wenben']").each(function(index, el) {
                               $(this).attr('sc', '0'); 
                          });
                          $("img[name='img_demo_shebei']").each(function(index, el) {
                               $(this).attr('src', '../../static/reportManageSys/images/wenben_demo_shebei_wu.png');
                          });
                          $("img[name='img_demo_duankou']").each(function(index, el) {
                               $(this).attr('src', '../../static/reportManageSys/images/wenben_demo_duankou_wu.png');
                          });
                        //选中选中和选中的值
                          $(obj).find('img').attr('src', '../../static/reportManageSys/images/wenben_demo_shebei.png');
                          $(obj).attr('sc', '1');
                    }else{
                          $(obj).find('img').attr('src', '../../static/reportManageSys/images/wenben_demo_shebei_wu.png');
                          $(obj).attr('sc', '0');
                    };
               }else if (type == "duankou"){
                    if (sc == 0) {
                         //清空选中和选中的值
                           $("span[name='span_wenben']").each(function(index, el) {
                                $(this).attr('sc', '0'); 
                           });
                           $("img[name='img_demo_duankou']").each(function(index, el) {
                                $(this).attr('src', '../../static/reportManageSys/images/wenben_demo_duankou_wu.png');
                           });
                           $("img[name='img_demo_shebei']").each(function(index, el) {
                                $(this).attr('src', '../../static/reportManageSys/images/wenben_demo_shebei_wu.png');
                           });
                         //选中选中和选中的值
                           $(obj).find('img').attr('src', '../../static/reportManageSys/images/wenben_demo_duankou.png');
                           $(obj).attr('sc', '1');
                     }else{
                           $(obj).find('img').attr('src', '../../static/reportManageSys/images/wenben_demo_duankou_wu.png');
                           $(obj).attr('sc', '0');
                     };
               }else{
                     console.log("模板定位选错了");
               };     
        },
        showDetailInfo :  function(obj){
               
               var name = $(obj).find('span').eq(0).html();
               var id = $(obj).find('span').eq(1).html(); 
               $("#demo_name").val(name);
               $("#showDetailInfo").modal("toggle");
                        //加载模板信息
                          var dataABC = {
                                        "ifId":"srpt-cfg-deviceQueryModelInfoToOne",
                                        "tpl_id":id
                          };
                          var dataStrABC = JSON.stringify(dataABC); 
                          var resABC = commonAjax(configUrl_main.query+"/srpt-cfg-deviceQueryModelInfoToOne",dataStrABC,"","");  
                          //var resABC = commonAjax("/srpt/rcpt/common/query",dataStrABC,"","");  
                          if (resABC.success) {
                          var currObj = resABC.data[0];
                          $("#demo_name").val(currObj.tpl_name); 
                          //$("#demo_remark").val(currObj.demo_remark); 
                          $("#demo_bandWidth").val(currObj.descr); 
                          };  
                        //加载树(关系)   
                        var dataABCD = {"id":id};
                        var dataStrABCD = JSON.stringify(dataABCD); 
                        var resABCD = commonAjax(configUrl_main.rcpt_model_getArrangedTree,dataStrABCD,"","");  
                        if (resABCD.success) {
                                       //获取数据
                                    //var data = demoselect.changeRightTreeData(resABCD.data); 
                                    var data = "";
                                    if(resABCD.data[0].device_id == "0"){
                                      data = demoselect.changeRightTreeData_shebei(resABCD.data);
                                    }else{
                                      data = demoselect.changeRightTreeData(resABCD.data);
                                    };
                                    $("#tree_right").html("");
                                    var initData = [{
                                                    "id":0,
                                                    "text":"设备分类",
                                                    "state":"closed",
                                                    "iconCls":"icon-shebeifenlei",
                                                    "attributes":{"ishasChilds":true},
                                                    "children" :data
                                    }]; 
                                   $('#tree_left').tree({
                                       data:initData,
                                       lines : true,
                                       animate : true,
                                       //checkbox : true,
                                       onBeforeExpand:function(node){
                                                        
                                       },
                                       onContextMenu : function(e,node){
                                                 
                                       },
                                       onDblClick: function(node){

                                       }
                                   }); //tree
                                  //查询之后展开
                                   var firstTree = $('#tree_left').tree('find', 0);
                                   $('#tree_left').tree('expand', firstTree.target);  
                      };                
        },
       addBackground : function(obj){
          //$(obj).find('img').attr('src', '../../static/reportManageSys/images/wenben_demo.png');
       },
       delBackground : function(obj){
          //$(obj).find('img').attr('src', '../../static/reportManageSys/images/wenben_demo_wu.png');
       },
      changeRightTreeData_shebei : function(data){

               var array = [];
                 var flag = false; //判断是否有子文件
                    if(data.length>0){
                             for(var i=0;i<data.length;i++){
                                 var object = {};
                                 object.id = data[i].id;
                                 object.text = data[i].name;
                                 object.iconCls ="icon-shebeitubiao";
                                 object.attributes = {"ishasChilds":false,"parent_id":0};
                                 var array_two = "";
                                 if(data[i].children.length > 0){
                                      flag = true;
                                      object.attributes = {"ishasChilds":true,"parent_id":0};
                                      array_two = demoselect.changeRightTreeData_second(data[i].children,data[i].device_id,data[i].sys_name);
                                  };
                                 if(flag){object.state = 'closed';flag = false; } 
                                 object.children = array_two;
                                 array.push(object);
                               };
                    }; 
                 return array;   
      },
      changeRightTreeData : function(data){
               var array = [];
                 var flag = false; //判断是否有子文件
                    if(data.length>0){
                             for(var i=0;i<data.length;i++){
                                 var object = {};
                                 object.id = data[i].device_id;
                                 object.text = data[i].sys_name;
                                 var array_two = "";
                                 if(data[i].children.length > 0){
                                      flag = true;
                                      object.attributes = {"ishasChilds":true,"parent_id":0};
                                      array_two = demoselect.changeRightTreeData_second(data[i].children,data[i].device_id,data[i].sys_name);
                                  };
                                 if(flag){object.state = 'closed';flag = false; } 
                                 object.children = array_two;
                                 array.push(object);
                               };
                    }; 
                 return array;   
      },
      changeRightTreeData_second : function(data,parent_id,parent_name){
               var array = [];
                 var flag = false; //判断是否有子文件
                    if(data.length>0){
                           for(var i=0;i<data.length;i++){
                               var object = {};
                               object.id = data[i].id;
                               object.text = data[i].name;
                               var array_two = "";
                               if(data[i].children.length == 0){
                                    flag = true;
                                    object.attributes = {"ishasChilds":false,"parent_id":parent_id,"parent_name":parent_name};
                                };
                               array.push(object);
                             };
                    }; 
                 return array;   
      }
};

var leftrightliandong = {
          clicking : function(obj,id){ //id 为当前组件的id
                  //修改选中的样式
                    $(obj).siblings().css("background", "#fff");
                    $(obj).css('background', '#e6e6e6');
                  //修改联动的数据
                  var datas = "";
                  var ifid = $(obj).attr('valueUrl');
                  
                  var data = {"ifId":ifid}; //地市参数
                  var dataStr = JSON.stringify(data);
                  //------------------------------------------------
                      var ajaxUrl = "";
                      var query = configUrl_main.query;
                      if(query.indexOf("sml") != -1){
                             ajaxUrl = eastcom.baseURL+configUrl_main.query+"/"+ifid;
                      }else{
                             ajaxUrl = eastcom.baseURL+configUrl_main.query+"/"+ifid;
                      };
                  //------------------------------------------------
                  $.ajax({
                            url :ajaxUrl ,
                            //url :eastcom.baseURL+"/srpt/rcpt/common/query" ,
                            type : 'POST',
                            async : false,
                            dataType : "json",
                            contentType :"application/json",
                            data:dataStr,
                            success : function(data) {
                               datas = data.data;
                            }
                  });

                  var result_span = $("#"+id).find('span[name="result_span"]').eq(0); 

                     var m = 0;
                     var innerHTML = "";
                     for(var item in datas){
                            var key_id =""; 
                            var key_name =""; 
                            var i =0;
                            var j =0;
                            if(i<1){
                                $.each(datas[item], function(key, val) { 
                                      if(j==0){
                                          key_id = key;
                                      };
                                      if(j==1){
                                          key_name = key;
                                      };
                                      j++;
                                }); 
                                i++;
                            };

                     innerHTML +=  '<span id="'+m+'" avalue="'+datas[item][key_id]+'" style="display: block;">'+datas[item][key_name]+'</span>' 
                              m++;

                     } ;

                  result_span.html(innerHTML) ;

          },      
};




function sorts(obj) {
    var resultArr = [];
    if (obj) {
        obj.sort(function (a, b) {
            return a.seq - b.seq
        });
    };
    return obj;
};


/* if (xialaType=="chooseyewu" ) {
                                       datas = {  "1":{"id":1,"name":"即时通信"},
                                              "2":{"id":2,"name":"阅读"},
                                              "3":{"id":3,"name":"微博"},
                                              "4":{"id":4,"name":"导航"},
                                              "5":{"id":5,"name":"视频"},
                                              "6":{"id":6,"name":"音乐"},
                                              "7":{"id":7,"name":"应用商店"},
                                              "8":{"id":8,"name":"游戏"},
                                              "9":{"id":9,"name":"支付"},
                                              "10":{"id":10,"name":"动漫"},
                                              "11":{"id":11,"name":"邮箱"},
                                              "12":{"id":12,"name":"P2P业务"},
                                              "13":{"id":13,"name":"VoIP业务"},
                                              "14":{"id":14,"name":"彩信"},
                                              "15":{"id":15,"name":"浏览下载"},
                                              "16":{"id":16,"name":"财经"},
                                              "17":{"id":17,"name":"安全杀毒"},
                                              "18":{"id":18,"name":"其他业务"}
                                            }  


                                 };*/
