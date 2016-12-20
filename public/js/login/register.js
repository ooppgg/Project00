window.onload = function(){
	var user = document.getElementById("user");
	var tel = document.getElementById("tel");
	var pass = document.getElementById("pass");
	var samepass = document.getElementById("samepass");
	var tel_btn = document.getElementById("tel_btn");
	var register = document.getElementById("register");
	var reg_all = document.getElementById("reg_all");
	var reg_wipe = document.getElementById("reg_wipe");
	var high = document.getElementById("high");
	var low = document.getElementById("low");
	var menu = document.getElementById("menu");
	var iden = document.getElementById("identity");
	var li = document.getElementsByTagName("li");
	
	user.onblur = function(){
		//console.log(building.value);
		if(user.value == ""){
			user.style.background = "#FFC0CB";
		}else{
			user.style.background = "#FFF";	
		}
		//console.log(user.value != "" && pass.value != "");
		if(user.value != "" && tel.value != "" && pass.value != "" && samepass.value != ""){
			register.style.background = "#EA5404";
			register.onclick = function(){
				reg_all.style.display = "none";
				reg_wipe.style.display = "block";
				/*window.open('../login/login.html','_self'); */
			}
		}
	}
	tel.onblur = function(){
		if(tel.value == ""){
			tel.style.background = "#FFC0CB";
		}else{
			tel.style.background = "#FFF";	
		}
		
		if(tel.value != ""){
			//console.log(tel.value != "");
			tel_btn.onclick = function(){
				tel_btn.style.background = "#C7C7C7";
				var i = 60;
				tel_btn.value = i + "秒后重新发送";
				var timer = setInterval(function(){
					i--;
					tel_btn.value = i + "秒后重新发送";
					if(i <= 0){
						clearInterval(timer);
						tel_btn.value = "发送验证码";
					}
				}, 1000)
			}	
		}
		
		//console.log(user.value != "" && pass.value != "");
		if(user.value != "" && tel.value != "" && pass.value != "" && samepass.value != ""){
			register.style.background = "#EA5404";
			register.onclick = function(){
				reg_all.style.display = "none";
				reg_wipe.style.display = "block";
				/*window.open('../login/login.html','_self'); */
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
		//console.log(pass.value != "" && tel.value != "");
		if(user.value != "" && tel.value != "" && pass.value != "" && samepass.value != ""){
			register.style.background = "#EA5404";
			register.onclick = function(){
				reg_all.style.display = "none";
				reg_wipe.style.display = "block";
				/*window.open('../login/login.html','_self');*/ 
			}
		}
	}
	samepass.onblur = function(){
		//console.log(address.value);
		if(samepass.value == "" || samepass.value != pass.value){
			samepass.style.background = "#FFC0CB";
		}else{
			samepass.style.background = "#FFF";
		}
		//console.log(pass.value != "" && tel.value != "");
		if(user.value != "" && tel.value != "" && pass.value != "" && samepass.value != ""){
			register.style.background = "#EA5404";
			register.onclick = function(){
				reg_all.style.display = "none";
				reg_wipe.style.display = "block";
				/*window.open('../login/login.html','_self'); */
			}
		}
	}
	
	high.onclick = function(){
		high.style.display = "none";
		low.style.display = "block";
		menu.style.display = "block";
	}
	low.onclick = function(){
		low.style.display = "none";
		high.style.display = "block";
		menu.style.display = "none";
	}
	for(var i=0;i<li.length;i++){
		li[i].onclick = function(){
			iden.value = this.innerHTML;
			low.style.display = "none";
			high.style.display = "block";
			menu.style.display = "none";
		}
	}
}
