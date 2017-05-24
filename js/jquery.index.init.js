$(document).ready(function(){
	$.ajax({
	  	type:"GET",
	  	url:"http://authserver.applinzi.com/IndexInit",
	  	crossDomain:true,
	  	//data:{"key":"value","key":"value"},
	  	//data:{condition:getUrlParam("condition")},
	  	dataType:"jsonp",
	  	jsonp:"callback",
	  	async:true,
	  	success:function(data){
	  		$("#icon1").text(data.ActiveCount);
	  		$("#icon2").text(data.NewCount);
	  		$("#icon3").text(data.TotalCount);
	  		$("#icon4").text(data.TempCount);
	  	},
	  	error:function(err){
	  		alert("err:" + err.message);
  	}
  });
});