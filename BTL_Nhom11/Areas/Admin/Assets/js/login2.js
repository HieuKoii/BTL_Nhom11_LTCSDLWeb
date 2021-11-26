//Các xử lý kịch bản cho Login.html = login.js

function checkValidLogin2(fn){
	
	//Lấy thông tin đăng nhập 
	var name = document.getElementById("txtName").value;
	var pass = document.getElementById("txtPass").value;
	
	//Khai báo biến xác nhận hợp lệ 
	
	
	
	//Biến ghi nhận thông báo lỗi 
	var errorName = document.getElementById("viewErrorName");
	var errorPass = document.getElementById("viewErrorPass");
	//kiem tra tên
	name = name.trim();
	if(name==""){
		errorName.innerHTML = "Nhập tên tài khoản vào hệ thống !";
		errorPass.style.color = "red";
		
	}else{
		if((name.length<5) || (name.length>50)){
			
			errorName.innerHTML = "Tên tài khoản không hợp lệ !";
			errorName.style.color = "red";
		}else{
			if(name.indexOf("@") != -1){
				var parttern = /\w+@\w+[.]\w/;
				if(!name.match(parttern)){
					
					errorName.innerHTML = "Không đúng cấu trúc hộp thư ";
					errorName.style.color = "red";
				}
			}
		}
	}
	//kiểm tra pass
	pass = pass.trim();
	if(pass==""){
			errorPass.innerHTML = "nhập mật khẩu. ";
			errorPass.style.color = "red";
		
	}else{
		if(pass.length<5){
			errorPass.innerHTML = "mat khau khong hop le ";
			errorPass.style.color = "red";
			
		}
	}
	
	if(document.getElementById("chkSave").checked){
		errorPass.innerHTML = "Đây có phải máy tính bạn sử dụng không  ";
		errorPass.style.color = "red";
	}
	
	
}