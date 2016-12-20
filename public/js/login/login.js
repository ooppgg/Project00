window.onload = function(){
	var user = document.getElementById("user");
	var pass = document.getElementById("pass");
	var login_btn = document.getElementById("login_btn");
	
	user.onblur = function(){
		//console.log(building.value);
		if(user.value == ""){
			user.style.background = "#FFC0CB";
		}else{
			user.style.background = "#FFF";	
		}
		console.log(user.value != "" && pass.value != "");
		if(user.value != "" && pass.value != ""){
			login_btn.style.background = "#EA5404";
			login_btn.onclick = function(){
				/*add_all.style.display = "none";
				add_zhe.style.display = "block";*/
				window.open('../I/ILogin.html','_self'); 
			}
		}
	}
	pass.onblur = function(){
		//console.log(address.value);
		if(pass.value == ""){
			pass.style.background = "#FFC0CB";
		}else{
			pass.style.background = "#FFF";
		}
		console.log(pass.value != "" && user.value != "");
		if(tel.value != "" && pass.value != ""){
			login_btn.style.background = "#EA5404";
			login_btn.onclick = function(){
				/*add_all.style.display = "none";
				add_zhe.style.display = "block";*/
				window.open('../I/ILogin.html','_self'); 
			}
		}
	}
}
