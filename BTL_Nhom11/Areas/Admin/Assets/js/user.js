// Các xử lý kịch bản cho user.html - user.js

//Sinh cấu trúc Permission
function generatePermis(){
	var permis = new Array();
	permis[0] = "---chọn---";
	permis[1] = "Thành viên (members)";
	permis[2] = "Tác giả (authors)";
	permis[3] = "Quản lý (managers)";
	permis[4] = "Quản trị(administrators)";
	permis[5] = "Quản trị cấp cao(supers)";
	
	//khai báo kiểu khác 
	var permis2 = new Array("---chọn----","Thành viên ",permis[2],"","","");
	var permis3 = ["---chọn----","Thành viên ",permis[2],"","",""];
	
	var opt ="<select name=\"\" class=\"form-control\" id=\"chkPermis\" onChange=\"refreshPermis(this.form)\" onClick=\"checkPermis(this.form)\" >";
	for(var i=0;i<permis.length; i++){
		opt += "<option value =\""+i+"\">";
		opt += permis[i];
		opt += "</option>";
	}opt += "</select>";
	
	//Xuất cấu trúc ra màn hình		
	document.write(opt);
}
//cacsh khac

function viewOption (element, index, array){
	document.write("<option value=\""+index+"\">"+element+"</option>");
}

//Phien  banr dung
function generatePermis2(){
	var permis = new Array();
	permis[0] = "---chọn---";
	permis[1] = "Thành viên (members)";
	permis[2] = "Tác giả (authors)";
	permis[3] = "Quản lý (managers)";
	permis[4] = "Quản trị(administrators)";
	permis[5] = "Quản trị cấp cao(supers)";
	
	permis.forEach(viewOption);
}

//------------------------------
function generateRoles(){
	//Danh sach  vai trò
	var roles =new Array(
		"Người sử dụng",
		"Chuyên mục ",
		"Thể loại",
		"Bài viết & Tin tức",
		"Hệ sản phẩm",
		"Nhóm sản phẩm",
		"Loại sản phẩm",
		"sản phẩm",
		"Hóa đơn",
		"Khách Hàng"
	);
	
	//Duyệt mảng vai trò , tạo cấu trúc
		var  role="";
		for(var i=0; i<roles.length;i++){
			if(i%3 == 0){
				role +=" <div class=\"row\">";
			}
			
			role += viewRole(i, roles[i]);
			if((i%3 == 2) || (i == roles.length-1 )){
				role +=" </div>";
			}
		}
	//Xuất ra 
		document.write(role);
	
}
function viewRole(id,name){
	var role=" ";
	
		role+= "<div class=\"col-md-4 \">";
		role+= "<div class=\"form-check\">";
		role+= "<input type=\"checkbox\" disabled name=\"chks\" class=\"form-check-input\" id=\"chk"+id+"\" onclick=\"checkPermis(this.form)\" />";
		role+= "<a><i class=\"fas fa-user\"></i></a>";
		role+= "<label for=\"chk"+id+"\" class=\"form-check-label\">Quản Lý "+name+"</label>";
		role+= "</div>";
		role+= "</div>";
		
	return role;
	
}


//------------------------------
function setCheckBox(fn, dis, check,br){
	//Duyệt các phần tử của form và tìm ra các check box cần làm việc 
	
	for(var i=0; i<fn.length;i++){
		if(fn.elements[i].type=="checkbox" && fn.elements[i].name == "chks"){
			fn.elements[i].disabled = dis;
			fn.elements[i].checked = check;
			
		}
	}
}

function refreshPermis(fn){
	//Lấy giá trị Permission
	var permis = parseInt(document.getElementById("chkPermis").value);
	
	if((permis==4) || (permis==5)){
		this.setCheckBox(fn, true, true);
	}else if(permis==3){
		this.setCheckBox(fn, false, true);
		//Ngầm dindhj cho tài khoản quản lý có vai trò người suwe dụng 
		var first_role = document.getElementById("chk0");
		first_role.disabled=true;
	}else if(permis==2){
		this.setCheckBox(fn, false, false);
		
	}else{
		this.setCheckBox(fn, true, false);
	}
	
	this.checkPermis(fn);
	
	
}
//-----------------------------
function checkName(fn){
	var name = document.getElementById("txtName").value;
	
	validName=true;
	var message="";
	//Tham chiếu vào hộp nhập email
	var email= document.getElementById("txtEmail");
	name= name.trim();
	if(name==""){
		message="Thiếu tên cho tài khoản";
		validName = false;
	}else{
		if(name.indexOf(" ")!=-1){
			message="Tên tài khoản không được có dấu cách";
			validName= false;
		}else{
			if((name.length<5)||(name.length>50)){
				message="Tên tài khoản có độ dài trong khoảng từ 5 -50 kí tự.";
				validName=false;
			}else{
				if(name.indexOf("@")!=-1){
					var parttern =/\w+@\w+[.]\w/;
					if(!name.match(parttern)){
						message="Không đúng cấu trúc hộp thư";
						validName=false;
						email.disabled= false;
					}else{
						email.disabled=true;
					}
				}else{
					email.disabled=false;
				}
			}
		}
	}
	//Tham chiếu vào đối tượng báo lỗi 
	var viewErr= document.getElementById("errName");
	if(validName){
		viewErr.innerHTML = "<i class=\"fas fa-check-circle\"></i>";
		viewErr.style.color = "blue";
		viewErr.style.fontWeight =600;
		viewErr.style.marginTop=10;
	}else{
		viewErr.innerHTML = message;
		viewErr.style.color = "red";
		viewErr.style.fontWeight =600;
		viewErr.style.marginTop=0;
	}
	
	return validName;
}



//------------------------------
function checkPass(){
	var name = document.getElementById("txtName").value;
	var pass = document.getElementById("txtPass").value;
	var pass2 = document.getElementById("txtPass2").value;
	
	
	var validPass =true;
	var validPass2 =true;
	
	var message = "";
	
	pass= pass.trim();
	
	if(pass==""){
		message="Thiếu mật khẩu cho tài khoản";
		validPass= false;
	}else{
		pass2 = pass2.trim();
		
		if((pass.length>=6) && (pass.length<=50)){
			if(pass.indexOf(name)!=-1){
				message="Mật khẩu không chứa tên đăng nhập";
				validPass=false;
			}else{
				if(pass2==""){
					message = "Mật khẩu xác nhận lại k có ";
					validPass2 = false;
				}else{
					if(pass!=pass2){
						message="Mật khẩu xác nhận lại k khớp ";
						validPass2 = false;
					}
				}
			}
		}else{
			message="Mật khẩu quá ngắn hoặc quá dài";
			validPass= false;
		}
	}
	//Tham chiếu các đối tượng báo lỗi 
	var errPass = document.getElementById("errPass");
	var errPass2 = document.getElementById("errPass2");
	if(validPass && validPass2){
		errPass.innerHTML = "<i class=\"fas fa-check-circle\"></i>";
		errPass.style.color = "blue";
		errPass.style.fontWeight =600;
		errPass2.innerHTML = "";
		
	}else{
		if(!validPass){
			errPass.innerHTML =message;
			errPass.style.color = "red";
			errPass.style.fontWeight =600;
		}else{
			errPass.innerHTML ="";
		}
		
		if(!validPass2){	
			errPass2.innerHTML =message;
			errPass2.style.color = "red";
			errPass2.style.fontWeight =600;
		}
	}
	return validPass && validPass2;
}


//------------------------------
function checkEmail(){
	//Tham chiếu đến email
	var email = document.getElementById("txtEmail").value;
	
	var validEmail=true;
	
	var message ="";
	
	if(email==""){
		message= "Thiếu hộp thư cho tài khoản ";
		validEmail=false;
		
	}else{
		if(email.indexOf("@")==-1){
			message ="Không phải cấu trúc hộp thư";
			validEmail=false;
		}else{ 
			var parttern= /\w+@\w+[.]\w/;
			if(!email.match(parttern)){
				message=" Không đúng cấu trúc hộp thư";
				validEmail=false;
			}
		}
	}
	//Tham chiếu đối tượng báo lỗi
	var errEmail = document.getElementById("errEmail");
	if(!validEmail){
		errEmail.innerHTML=message;
		errEmail.style.color = "red";
		errEmail.style.fontWeight =600;
	}else{
		errEmail.innerHTML="";
	}
	return validEmail;
}
//------------------------------
function checkPermis(fn){
	var permis= parseInt(document.getElementById("chkPermis").value);
	
	var validPermis = true;
	
	var message="";
	if(permis==2 || permis==3){
		for(var i=0;i<fn.elements.length; i++){
			if(fn.elements[i].type=="checkbox"&& fn.elements[i].name=="chks"){
				if(fn.elements[i].checked ){
					if(fn.elements[i].disabled){
						message ="Bạn có muốn thêm vai trò ?"
					}else{
						message="";
					}
					validPermis = true;
					break;
				}else{
					message=" Cần phải có ít nhất 1 vai trò  này ";
					validPermis= false;
				}
			}
		}
	}
	//Tham chiếu báo lỗi
	var errPermis = document.getElementById("errPermis");
	if(!validPermis){
		errPermis.innerHTML=message;
		errPermis.style.color = "red";
		errPermis.style.fontWeight =600;
	}else{
		errPermis.innerHTML=message;
		errPermis.style.color = "blue";
		errPermis.style.fontWeight =600;
	}
	return validPermis;
}

//-----------------------------
function checkValidUser(fn){
	//Kiểm tra name 
	var validName= checkName(fn);
	
	//Kiểm tra pass 
	var validPass = checkPass();
	
	//Kiểm tra email 
	var validEmail =checkEmail();
	
	//Kiểm tra permis
	var validPermis = checkPermis(fn);
	
	
	
	if(!validName){
		document.getElementById("txtName").focus();
		document.getElementById("txtName").select();
	}else if(!validPass){
			document.getElementById("txtPass").focus();
			document.getElementById("txtPass").select();
	}else if(!validEmail){
			document.getElementById("txtEmail").focus();
			document.getElementById("txtEmail").select();			
	}else if(!validPermis){
		document.getElementById("chkPermis").focus();
		document.getElementById("chkPermis").select();
	}
	
	
	return validName && validPass && validEmail && validPermis;
}