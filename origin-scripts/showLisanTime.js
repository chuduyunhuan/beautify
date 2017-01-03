
var showLisanTime = {
	   init : function(){
              var time = new Date();
			  var year = time.getFullYear();
              
              showLisanTime.getParentParams();
              showLisanTime.showTimeDiv();
	   	      showLisanTime.initTimeYear();
	   	      showLisanTime.initTimeWeek(year);
	   	      showLisanTime.initTimeDayHourMin();
	   	      //showLisanTime.dayAll();     //取消之前保留的选中状态
	   	      showLisanTime.changeTimeType();
	   	      showLisanTime.addTime();
              showLisanTime.isShow30or31(); 
	   },
	   initTimeDayHourMin : function(){
	   	  var times = new Date();
	   	  $("#monthUl li").find('input[name ="month"]').attr("checked", false);
	   	  $("#dayUl li").find('input[name ="day"]').attr("checked", false);
	   	  $("#hourUl li").find('input[name ="hour"]').attr("checked", false);
	   	  $("#minUl li").find('input[name ="min"]').attr("checked", false);
	   	  $("#weekUl li").find('input[name ="week"]').attr("checked", false);
	   	  var  month;
		  var  day;
		  var  hour;
		  var  minute;

          var timeType = $("input[name = 'timeType2']:checked").val();

          if (timeType == "month") {
                  var time = new Date(times.getTime());
           	      month = time.getMonth()+1;
           	      day = time.getDate(); 
           	      hour = time.getHours();  
           	      min = time.getMinutes();
          }else if (timeType == "day") {
                 var time = new Date(times.getTime() - 1*24*60*60*1000);
           	      month = time.getMonth()+1;
           	      day = time.getDate(); 
           	      hour = time.getHours();  
           	      min = time.getMinutes();
          }else if (timeType == "hour") {
                  var time = new Date(times.getTime() - 2*60*60*1000);
           	      month = time.getMonth()+1;
           	      day = time.getDate(); 
           	      hour = time.getHours();  
           	      min = time.getMinutes();
          }else if (timeType == "min") {
                  var time = new Date(times.getTime() - 5*60*1000);
           	      month = time.getMonth()+1;
           	      day = time.getDate(); 
           	      hour = time.getHours();  
           	      min = time.getMinutes();
          };

          /*var time = new Date(times.getTime() - 1*24*60*60*1000 - 2*60*60*1000 - 5*60*1000);
	      var month = time.getMonth()+1;
	      var day = time.getDate(); 
	      var hour = time.getHours();  
	      var min = time.getMinutes();*/


	      /*var month = time.getMonth()+1;
	      var day = time.getDate()-1; 
	      var hour = time.getHours()-2;  
	      var min = time.getMinutes()-5;*/ 


           var months = addO(month);
           var days = addO(day); 
           var hours = addO(hour);  
           //-------------------------
           var min5 = "";
            if(0<=min && min<5){min5 = 0;};
            if(5<=min && min<10){min5 = 5;};
            if(10<=min && min<15){min5 = 10;};
            if(15<=min && min<20){min5 = 15;};
            if(20<=min && min<25){min5 = 20;};
            if(25<=min && min<30){min5 = 25;};
            if(30<=min && min<35){min5 = 30;};
            if(35<=min && min<40){min5 = 35;};
            if(40<=min && min<45){min5 = 40;};
            if(45<=min && min<50){min5 = 45;};
            if(50<=min && min<55){min5 = 50;};
            if(55<=min && min<60){min5 = 55;};
           //-------------------------
           var mins = addO(min5);

           //选择当前周
            var time = new Date();
            var a = time.getFullYear();
	        var b = time.getMonth()+1;
	        var c = time.getDate();
           var date1 = new Date(a, parseInt(b) - 1, c), date2 = new Date(a, 0, 1), 
           d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000); 
           var weeks = Math.ceil((d + ((date2.getDay() + 1) - 1)) / 7); 

           $("#monthUl li").find('input[value ="'+months+'"]').attr("checked", true);
           $("#dayUl li").find('input[value ="'+days+'"]').attr("checked", true);
           $("#hourUl li").find('input[value ="'+hours+'"]').attr("checked", true);
           $("#minUl li").find('input[value ="'+mins+'"]').attr("checked", true);
           $("#weekUl li").find('input[value ="'+weeks+'"]').attr("checked", true);

           function addO(val){
                 if(val<10){
                 	val = "0"+val;
                 }
                 return val;
           };
	   },
	   initTimeYear : function(){
			   	 var time = new Date();
			   	 //var time = new Date(times.getTime() + 6*24*60*60*1000);
			   	 var year = time.getFullYear();
			   	 var yearArr = new Array();
			   	 for(var i=0; i<8;i++){
		             yearArr.push(year);
		             year--; 
			   	 };
			   	 var htmlStr = ""
		         for(var i=0; i<yearArr.length;i++){
		         	 if (i == 0) {
                         htmlStr += '<li><input type="checkbox" checked="checked" name="year" value="'+yearArr[i]+'" onclick="showLisanTime.changeYear(\''+yearArr[i]+'\')" />'+yearArr[i]+'年</li>'
		         	 }else{
		              htmlStr += '<li><input type="checkbox" name="year" value="'+yearArr[i]+'" onclick="showLisanTime.changeYear(\''+yearArr[i]+'\')" />'+yearArr[i]+'年</li>'
		         	 };
		         };
		         $("#yearUl").html(htmlStr);

	   },
	   changeYear : function(value){
	   	         var yearInput = $("input[name = 'year']");
	   	         var thisInput=$("input[value='"+value+"']");
	   	         for(var i=0;i<yearInput.length;i++){
	   	         		yearInput[i].checked=false;
	   	         };
	   	         thisInput[0].checked=true;
                 showLisanTime.initTimeWeek(value);
	   },
	   initTimeWeek : function(year){

                var totalWeek = getNumOfWeeks(year);
                var htmlStr = ""
                for(var i=1;i<=totalWeek;i++){
                    htmlStr += '<li><input type="checkbox" name="week" value="'+i+'" />'+year+'年第'+i+'周</li>'
                };

                $("#weekUl").html(htmlStr);

			   function getNumOfWeeks(year){
			   	  var d=new Date(year,0,1);
			   	  var yt=( ( year%4==0 && year%100!=0) || year%400==0)? 366:365; 
			   	  return Math.ceil((yt-d.getDay())/7.0);
			   };
	   },
	   dayAll : function(){
			   	 //加载清空已选中的
			   	 $("input[name='day']").attr("checked", false);
			   	 //获取全选checkbox的checked;
		         var checked = $("#dayAll").attr("checked");
		         if(checked == "checked"){
		         	$("input[name='day']").attr("checked", true);
		         }else{
		         	$("input[name='day']").attr("checked", false);
		         };
	   },
   	   hourAll : function(){
		   	   	 //加载清空已选中的
		   	   	 $("input[name='hour']").attr("checked", false);
		   	   	 //获取全选checkbox的checked;
		            var checked = $("#hourAll").attr("checked");
		            if(checked == "checked"){
		            	$("input[name='hour']").attr("checked", true);
		            }else{
		            	$("input[name='hour']").attr("checked", false);
		            };
   	   },
  	   minAll : function(){
		   	   	 //加载清空已选中的
		   	   	 $("input[name='min']").attr("checked", false);
		   	   	 //获取全选checkbox的checked;
		            var checked = $("#minAll").attr("checked");
		            if(checked == "checked"){
		            	$("input[name='min']").attr("checked", true);
		            }else{
		            	$("input[name='min']").attr("checked", false);
		            };
  	   },
   	   changeTimeType : function(){
   	   	          $("#resUl").html("");//先清除resDiv的内容
	   	   	      var timeType = $("input[name = 'timeType2']:checked").val();
	   	   	      //先把月日小时周模块不显示
	   	   	      $("#monthDiv").css("display","none");
	   	   	      $("#dayDiv").css("display","none");
	   	   	      $("#hourDiv").css("display","none");
	   	   	      $("#weekDiv").css("display","none");
	   	   	      $("#minDiv").css("display","none");
                  if (timeType == "min") {
                  	  $("#monthDiv").css("display","block");
                  	  $("#dayDiv").css("display","block");
                  	  $("#hourDiv").css("display","block");
                  	  $("#minDiv").css("display","block");
                  };  
	   	   	      if (timeType == "hour") {
	   	   	      	  $("#monthDiv").css("display","block");
	   	   	      	  $("#dayDiv").css("display","block");
	   	   	      	  $("#hourDiv").css("display","block");
	   	   	      };
	   	   	      if(timeType == "day") {
	   	   	      	  $("#monthDiv").css("display","block");
	   	   	      	  $("#dayDiv").css("display","block");
	   	   	      };
	   	   	      if(timeType == "month") {
	   	   	      	  $("#monthDiv").css("display","block");  
	   	   	      };
	   	   	      if(timeType == "week") {
	   	   	      	  $("#weekDiv").css("display","block");
	   	   	      };
	   	   	      showLisanTime.initTimeDayHourMin();
	   	   	      showLisanTime.addTime();
   	   },

   	   addTime : function(){
   	   	         var timeType = $("input[name = 'timeType2']:checked").val();
   	   	         var year="";
   	   	         var isBigYear= 0;
   	   	         var resArrText = new Array();
   	   	         var resArrValue = new Array();
                    $("#yearUl").find("input[name = 'year']").each(function(n){
	                      if ($(this).is(":checked")){
	                      year=$(this).val();
	                      };
                    });
                   // 判断是否是润年   0平年   1润年
                  //--------------------------------------------------
                      var yushu_1 = year%4;
                      var yushu_2 = year%400;
                      if(yushu_1 == 0){isBigYear = 1;};
                      if(yushu_2 == 0){isBigYear = 1;};
                  //--------------------------------------------------


                    //判断年份是否为空
                    if(year == ""){alert("请选择年份!");return;};
		                 if(timeType == "min"){
		                 	  var monthArr = new Array();
		                 	  var dayArr = new Array();
		                 	  var hourArr = new Array();
		                 	  var minArr = new Array();
				              $("#monthUl").find("input[name = 'month']").each(function(n){
				                      if ($(this).is(":checked")){
				                      monthArr.push($(this).val());
				                      };
				              });
				              $("#dayUl").find("input[name = 'day']").each(function(n){
				                      if ($(this).is(":checked")){
				                      dayArr.push($(this).val());
				                      };
				              });
				              $("#hourUl").find("input[name = 'hour']").each(function(n){
				                      if ($(this).is(":checked")){
				                      hourArr.push($(this).val());
				                      };
				              }); 
				              $("#minUl").find("input[name = 'min']").each(function(n){
				                      if ($(this).is(":checked")){
				                      minArr.push($(this).val());
				                      };
				              }); 
			              //判断月日小时是否为空
			               if(monthArr.length == 0){alert("请选择月份!");return;};
			               if(dayArr.length == 0){alert("请选择日期!");return;};
			               if(hourArr.length == 0){alert("请选择小时!");return;};
			               if(minArr.length == 0){alert("请选择分钟!");return;};
	                     for(var m=0; m<monthArr.length;m++){
	                          for(var d=0; d<dayArr.length;d++){
	                          	 for(var h=0; h<hourArr.length;h++){
	                          	 	  for(var min=0; min<minArr.length;min++){
			                          	 	  if (isBigYear ==0 &&monthArr[m] == 2 && dayArr[d] == 29) {continue;};
			                         	      if (monthArr[m] == 2 && dayArr[d] == 30) {continue;};
			                         	      if (monthArr[m] == 2 && dayArr[d] == 31) {continue;};
			                         	      if (monthArr[m] == 4 && dayArr[d] == 31) {continue;};
			                         	      if (monthArr[m] == 6 && dayArr[d] == 31) {continue;};
			                         	      if (monthArr[m] == 9 && dayArr[d] == 31) {continue;};
			                         	      if (monthArr[m] == 11 && dayArr[d] == 31) {continue;};

			                                   var timeStrText = year+"-"+monthArr[m]+"-"+dayArr[d]+" "+hourArr[h]+":"+minArr[min]+":00";
			                                   var timeStrValue = year+monthArr[m]+dayArr[d]+hourArr[h]+minArr[min];
			                                   resArrText.push(timeStrText);
			                                   resArrValue.push(timeStrValue);
	                                   };
	                          	 };
	                          };
	                     };

		                 }; //if hour 
	                 if(timeType == "hour"){
	                 	  var monthArr = new Array();
	                 	  var dayArr = new Array();
	                 	  var hourArr = new Array();
			              $("#monthUl").find("input[name = 'month']").each(function(n){
			                      if ($(this).is(":checked")){
			                      monthArr.push($(this).val());
			                      };
			              });
			              $("#dayUl").find("input[name = 'day']").each(function(n){
			                      if ($(this).is(":checked")){
			                      dayArr.push($(this).val());
			                      };
			              });
			              $("#hourUl").find("input[name = 'hour']").each(function(n){
			                      if ($(this).is(":checked")){
			                      hourArr.push($(this).val());
			                      };
			              }); 
		              //判断月日小时是否为空
		               if(monthArr.length == 0){alert("请选择月份!");return;};
		               if(dayArr.length == 0){alert("请选择日期!");return;};
		               if(hourArr.length == 0){alert("请选择小时!");return;};
                        for(var m=0; m<monthArr.length;m++){
                             for(var d=0; d<dayArr.length;d++){
                             	 for(var h=0; h<hourArr.length;h++){
                             	 	  if (isBigYear ==0 &&monthArr[m] == 2 && dayArr[d] == 29) {continue;};
                            	      if (monthArr[m] == 2 && dayArr[d] == 30) {continue;};
                            	      if (monthArr[m] == 2 && dayArr[d] == 31) {continue;};
                            	      if (monthArr[m] == 4 && dayArr[d] == 31) {continue;};
                            	      if (monthArr[m] == 6 && dayArr[d] == 31) {continue;};
                            	      if (monthArr[m] == 9 && dayArr[d] == 31) {continue;};
                            	      if (monthArr[m] == 11 && dayArr[d] == 31) {continue;};
                                      var timeStrText = year+"-"+monthArr[m]+"-"+dayArr[d]+" "+hourArr[h]+":00:00";
                                      var timeStrValue = year+monthArr[m]+dayArr[d]+hourArr[h]+"00";
                                      resArrText.push(timeStrText);
                                      resArrValue.push(timeStrValue);
                             	 };
                             };
                        };

	                 }; //if hour 
 	                 if(timeType == "day"){
 	                 	  var monthArr = new Array();
 	                 	  var dayArr = new Array();
 			              $("#monthUl").find("input[name = 'month']").each(function(n){
 			                      if ($(this).is(":checked")){
 			                      monthArr.push($(this).val());
 			                      };
 			              });
 			              $("#dayUl").find("input[name = 'day']").each(function(n){
 			                      if ($(this).is(":checked")){
 			                      dayArr.push($(this).val());
 			                      };
 			              });
 			             //判断月日是否为空
			             if(monthArr.length == 0){alert("请选择月份!");return;};
			             if(dayArr.length == 0){alert("请选择日期!");return;};
                         for(var m=0; m<monthArr.length;m++){
                              for(var d=0; d<dayArr.length;d++){
                                        
                                      if (isBigYear ==0 &&monthArr[m] == 2 && dayArr[d] == 29) {continue;};
                              	      if (monthArr[m] == 2 && dayArr[d] == 30) {continue;};
                              	      if (monthArr[m] == 2 && dayArr[d] == 31) {continue;};
                              	      if (monthArr[m] == 4 && dayArr[d] == 31) {continue;};
                              	      if (monthArr[m] == 6 && dayArr[d] == 31) {continue;};
                              	      if (monthArr[m] == 9 && dayArr[d] == 31) {continue;};
                              	      if (monthArr[m] == 11 && dayArr[d] == 31) {continue;};
                              	     
                                       var timeStrText = year+"-"+monthArr[m]+"-"+dayArr[d];
                                       var timeStrValue = year+monthArr[m]+dayArr[d]+"0000";
                                       resArrText.push(timeStrText);
                                       resArrValue.push(timeStrValue);
                              };
                         };
			         }; //if day 
 	                 if(timeType == "month"){
 	                 	  var monthArr = new Array();
 	                 	  var dayArr = new Array();
 			              $("#monthUl").find("input[name = 'month']").each(function(n){
 			                      if ($(this).is(":checked")){
 			                      monthArr.push($(this).val());
 			                      };
 			              });
 			             //判断月是否为空
			             if(monthArr.length == 0){alert("请选择月份!");return;}; 
                         for(var m=0; m<monthArr.length;m++){
                                       var timeStrText = year+"年"+monthArr[m]+"月";
                                       var timeStrValue = year+monthArr[m]+"000000";
                                       resArrText.push(timeStrText);
                                       resArrValue.push(timeStrValue);
                         };
 	                 }; //if month
 	                 if(timeType == "week"){
 	                 	  var weekArr = new Array();
 			              $("#weekUl").find("input[name = 'week']").each(function(n){
 			                      if ($(this).is(":checked")){
 			                      weekArr.push($(this).val());
 			                      };
 			              });
 			             //判断周是否为空
			             if(weekArr.length == 0){alert("请选择周数!");return;}; 
                         for(var w=0; w<weekArr.length;w++){
                                       var timeStrText = year+"年第"+weekArr[w]+"周";
                                       var timeStrValue = year+weekArr[w]+"000000";
                                       resArrText.push(timeStrText);
                                       resArrValue.push(timeStrValue);
                         };
 	                 }; //if week      
 
                     //循环resArr
                     var resHtmlStr = "";
                     for(var i = 0;i<resArrText.length;i++){
                           resHtmlStr += '<li><input type="checkbox" name="res" value="'+resArrValue[i]+'" />'+resArrText[i]+'</li>';
                     };
	                 $("#resUl").html(resHtmlStr);
               
   	   	         
   	   },
   	   deleTime : function(){
                 $("#resUl").find("input[name = 'res']").each(function(n){
 			                      if ($(this).is(":checked")){
 			                           $(this).parent().css("display","none");
 			                           //$(this).parent().remove();   
 			                      };
 			              });   
   	   },
   	   deleAllTime : function(){
   	   	             $("#resUl").html("");
   	   },
   	  getParentParams : function(){
   	  	        var param = publicReport.showTimeParam();  //["lianxu", ["day", "week"]]
   	  	        return param;
   	  	        
   	  },
   	  showTimeDiv : function(){
   	  	         var timeArr = showLisanTime.getParentParams(); 
   	  	         //var lianxu = timeArr[0];
   	  	         var timeTypeArr = timeArr[1];
                    for(var i=0;i<timeTypeArr.length;i++){
                            $("#Q"+timeTypeArr[i]).css("display","inline-block");        //显示radio
                            $("#Q"+timeTypeArr[0]).attr("checked","checked");            //默认第一个radio选中
                            $("#label_Q"+timeTypeArr[i]).css("display","inline-block");  //显示label

                    }

   	  },
   	  isShow30or31 : function(){
   	  	     var monthArrChecked = []; 
   	  	     $("input[name = 'month']").each(function(index, el) {
   	  	     	if($(el).prop('checked')){
   	  	     	   monthArrChecked.push($(el).attr('value'));
   	  	     	};
   	  	     });

   	  	     console.log(monthArrChecked);

   	  	     for (var i = 0; i < monthArrChecked.length; i++) {
   	  	     	     //monthArrChecked[i]
   	  	     	     if (monthArrChecked.length == 1) {
   	  	     	     	    if (monthArrChecked[0] == "02") {
                                 $("#_29").css('display', 'none');
                                 $("#_30").css('display', 'none');
                                 $("#_31").css('display', 'none');
   	  	     	     	    }; 
   	  	     	     };
   	  	     	     for (var i = 0; i < monthArrChecked.length; i++) {
                                      var falg = monthArrChecked.some(function(val){
                                              if(val == '04' || val == '06' || val == '09' || val == '11'){
                                              	   return true;
                                              };
                                      });
                                      if (falg) {
                                      	$("#_29").css('display', 'inline-block');
                                      	$("#_30").css('display', 'inline-block');
                                      	$("#_31").css('display', 'none');
                                      };
   	  	     	     };
   	  	     	     for (var i = 0; i < monthArrChecked.length; i++) {
                                      var falg = monthArrChecked.some(function(val){
                                              if(val == '01' || val == '03' || val == '05' || val == '07' || val == '08' || val == '10' || val == '12'){
                                              	   return true;
                                              };
                                      });
                                      if (falg) {
                                      	$("#_29").css('display', 'inline-block');
                                      	$("#_30").css('display', 'inline-block');
                                      	$("#_31").css('display', 'inline-block');
                                      };
   	  	     	     };
   	  	     	     

   	  	     };


   	  },

};
