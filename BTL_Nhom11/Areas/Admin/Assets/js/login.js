//Các xử lý kịch bản cho Login.html = login.js

function checkValidLogin(fn){
	
	//Lấy thông tin đăng nhập 
	var name = fn.txtUserName.value;
	var pass = fn.txtUserPass.value;
	
	//Khai báo biến xác nhận hợp lệ 
	var validName = true;
	var validPass = true;
	
	//Biến ghi nhận thông báo lỗi 
	var message ="";
	
	//Kiểm tra name
	name = name.trim();
	if(name==""){
		message = "Nhập tên tài khoản vào hệ thống !";
		validName= false;
	}else{
		if((name.length<5) || (name.length>50)){
			message ="Tên tài khoản không hợp lệ !";
			validName = false;
		}else{
			if(name.indexOf("@") != -1){
				var parttern = /\w+@\w+[.]\w/;
				if(!name.match(parttern)){
					message ="Không đúng cấu trúc hộp thư";
					validName =false;
				}
			}
		}
	}
	//kiểm tra pass
	pass = pass.trim();
	if(pass==""){
		message += "\n thiếu mật khẩu vào hệ thống!";
		validPass = false;
	}else{
		if(pass.length<5){
			message += "\nMật khẩu không hợp lệ ";
			validPass = false;
		}
	}
	
	if(document.getElementById("chkSave").checked){
		message += "\n Đây có phải là máy tính của bạn sử đụng không?";
	}
	//Xuất thông báo 
	if(message!=""){
		window.alert(message);
		if(!validName){
			fn.txtUserName.focus();
			fn.txtUserName.select();
		}else if(!validPass){
			fn.txtUserPass.focus();
			fn.txtUserPass.select();
		}
	}
	return validName && validPass;
}