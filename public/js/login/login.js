$(function(){
	$('#user').on('blur',function(){
		if($('#user').val() == ""){
			$('#user').css('background','#FFC0CB');
		}else{
			$('#user').css('background','#FFF');
		}
		//console.log(user.value != "" && pass.value != "");
		if($('#user').val() != "" && $('#pass').val() != ""){
			$('#login_btn').css('background','#EA5404');
			$('#login_btn').on('touchstart',function(){
				/*add_all.style.display = "none";
				add_zhe.style.display = "block";*/
				window.open('../I/ILogin.html','_self'); 
			})
		}
	})
		
	$('#pass').on('blur',function(){
		//console.log(address.value);
		if($('#pass').val() == ""){
			$('#pass').css('background','#FFC0CB');
		}else{
			$('#pass').css('background','#FFF');
		}
		//console.log(pass.value != "" && user.value != "");
		if($('#tel').val() != "" && $('#pass').val() != ""){
			login_btn.style.background = "#EA5404";
			$('#login_btn').css('background','#EA5404');
			$('#login_btn').on('touchstart',function(){
				/*add_all.style.display = "none";
				add_zhe.style.display = "block";*/
				window.open('../I/ILogin.html','_self'); 
			})
		}
	})
	$('#fanhui').on('touchstart',function(){
		 window.open('../I/I.html','_self');
	})
})
	
	
