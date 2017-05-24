$(document).ready(function(){
	$("#settingChange").click(function(){
		//获取选中项的value属性
        var chkRadio = $('input:radio[name="optionsRadios"]:checked').val();

		if (chkRadio == null) {
            alert("没有选中项");
        }else{
            $.ajax({
				  	type:"GET",
				  	//url:"http://localhost:8080/Servlet_Test/Common",
				  	url:"http://authserver.applinzi.com/SetAuthMethod",
				  	crossDomain:true,
				  	//data:{"key":"value","key":"value"},
				  	data:{authMethod:chkRadio},
				  	dataType:"jsonp",
				  	jsonp:"callback",
				  	async:true,
				  	success:function(data){
				  		var result = data.result;
				  		var value = data.value;

				  		alert(result + value);
				  	},
				  	error:function(err){
				  		alert("err:" + err.message);
			  		}
			});
        }
	});
});