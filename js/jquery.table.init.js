function getStatus(status){
	var Status="";
	switch(status){
		//绿色
		case "active":Status = "<span class=\"label-success label label-default\">Active</span>";
			break;
		//红色
		case "danger":Status = "<span class=\"label-default label label-danger\">Banned</span>"
			break;
		//橙色
		case "warning":Status = "<span class=\"label-warning label label-default\">Pending</span>"
			break;
		//灰色
		default:Status = "<span class=\"label-default label\">Inactive</span>"
	}
	return Status;
}

//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

function randomMac() {
　　var $chars = 'abcdef0123456789';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
　　var maxPos = $chars.length;
　　var pwd = '';
　　for (i = 0; i < 5; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos)) + 
				$chars.charAt(Math.floor(Math.random() * maxPos)) + ":";
　　}
		pwd += $chars.charAt(Math.floor(Math.random() * maxPos)) + 
				$chars.charAt(Math.floor(Math.random() * maxPos));
　　return pwd;
}

function ramdonOpenID(len,pos){
	var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';   
	/****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
	var maxPos = $chars.length;
　　var pwd = '';
　　for (i = 0; i < pos; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
	pwd += "-";
	for (i = 0; i < len-pos; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd;
}

function ramdonStatus(){
	var statusArr=["<span class=\"label-success label label-default\">Active</span>",
	"<span class=\"label-default label\">OffLine</span>",
	"<span class=\"label-warning label label-default\">Temporary</span>"];

	var pos = Math.floor(Math.random()*3);

	return statusArr[pos];
}

function ramdonIp(){
	var Ip = "192." + Math.floor(Math.random()*256) + 
				"." + Math.floor(Math.random()*256) + "." + Math.floor(Math.random()*256);

	return Ip;
}

function ramdonGwId(){
	var gwArr=["78A3511EF3B0","34F3952AC22A","2A4235EF011A"];

	var pos = Math.floor(Math.random()*3);

	return gwArr[pos];
}

function ramdonRegDate(){
	var gwArr=["2017/2/1","2017/2/2","2017/2/3","2017/2/4","2017/2/5","2017/2/6","2017/2/7","2017/2/8"
	,"2017/2/9","2017/2/10"];

	var pos = Math.floor(Math.random()*10);

	return gwArr[pos];
}

function ramdonFinLogin(){
	var gwArr=["2017/2/11","2017/2/12","2017/2/13","2017/2/14","2017/2/15","2017/2/16","2017/2/17",
	"2017/2/18","2017/2/19","2017/2/20"];

	var pos = Math.floor(Math.random()*10);

	return gwArr[pos];
}

$(document).ready(function(){
	var condition = getUrlParam("condition");
	var Mac,ID,WxOpenID,Ip,gwId,RegDate,Status = "";
	//alert(condition);
	for(var i=0;i<100;i++){
		Mac = randomMac();
	  	WxOpenID = ramdonOpenID(Math.floor(Math.random()*10)+20,Math.floor(Math.random()*10)+10)
	  	Status = ramdonStatus();
	  	Ip = ramdonIp();
	  	gwId = ramdonGwId();
	  	RegDate = ramdonRegDate();
	  	finLogin = ramdonFinLogin();
	  			
	  	$("#userTable").dataTable().fnAddData([Mac,WxOpenID,Status,Ip,gwId,RegDate,finLogin]);
	}
	// $.ajax({
	//   	type:"GET",
	//   	//url:"http://localhost:8080/JSON/JSONSend",
	//   	url:"http://authserver.applinzi.com/TableDataInit",
	//   	crossDomain:true,
	//   	//data:{"key":"value","key":"value"},
	//   	data:{condition:getUrlParam("condition")},
	//   	dataType:"jsonp",
	//   	jsonp:"callback",
	//   	async:true,
	//   	success:function(data){
	//   		var Mac,ID,WxOpenID,Ip,gwId,RegDate,Status = "";
	  		
	//   		for(var seq in data){
	//   			Mac = data[seq].mac;
	//   			WxOpenID = data[seq].wxOpenID;
	//   			Status = getStatus(data[seq].status);
	//   			Ip = data[seq].ip;
	//   			gwId = data[seq].gwId;
	//   			RegDate = data[seq].regDate;
	//   			finLogin = data[seq].finLogin;
	  			
	//   			$("#userTable").dataTable().fnAddData([Mac,WxOpenID,Status,Ip,gwId,RegDate,finLogin]);
	//   		}
	//   	},
	//   	error:function(err){
	//   		alert("err:" + err.message);
 //  	}
 //  });
});