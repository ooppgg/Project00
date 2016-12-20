$(function(){
	$('#user').on('blur',function(){
		if($('#user').val() == ""){
			$('#user').css('background','#FFC0CB');
		}else{
			$('#user').css('background','#FFF');	
		}
		//console.log($('#user').val() != "" && $('#pass').val() != "");
		if($('#user').val() != "" && $('#tel').val() != "" && $('#pass').val() != "" && $('#samepass').val() != ""){
			$('#register').css('background','#EA5404');
			$('#register').on('touchstart',function(){
				$('#reg_all').css('display','none');
				$('#reg_wipe').css('display','block');
			})
		}
	}) 
	$('#tel').on('blur',function(){
		if($('#tel').val() == ""){
			$('#tel').css('background','#FFC0CB');
		}else{
			$('#tel').css('background','#FFF');
		}
		
		if($('#tel').val() != ""){
			//console.log(tel.value != "");
			$('#tel_btn').on('touchstart',function(){
				$('#tel_btn').css('background','#C7C7C7');
				var i = 60;
				$('#tel_btn').val(i + "秒后重新发送");
				var timer = setInterval(function(){
					i--;
					$('#tel_btn').val(i + "秒后重新发送");
					if(i <= 0){
						clearInterval(timer);
						$('#tel_btn').val("发送验证码");
					}
				}, 1000)
			})
		}
		
		//console.log(user.value != "" && pass.value != "");
		if($('#user').val() != "" && $('#tel').val() != "" && $('#pass').val() != "" && $('#samepass').val() != ""){
			$('#register').css('background','#EA5404');
			$('#register').on('touchstart',function(){
				$('#reg_all').css('display','none');
				$('#reg_wipe').css('display','block');
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
		//console.log(pass.value != "" && tel.value != "");
		if($('#user').val() != "" && $('#tel').val() != "" && $('#pass').val() != "" && $('#samepass').val() != ""){
			$('#register').css('background','#EA5404');
			$('#register').on('touchstart',function(){
				$('#reg_all').css('display','none');
				$('#reg_wipe').css('display','block');
			})
		}
	})
	$('#samepass').on('blur',function(){
		//console.log(address.value);
		if($('#samepass').val() == "" || $('#samepass').val() != $('#pass').val()){
			$('#samepass').css('background','#FFC0CB');
		}else{
			$('#samepass').css('background','#FFF');
		}
		//console.log(pass.value != "" && tel.value != "");
		if($('#user').val() != "" && $('#tel').val() != "" && $('#pass').val() != "" && $('#samepass').val() != ""){
			$('#register').css('background','#EA5404');
			$('#register').on('touchstart',function(){
				$('#reg_all').css('display','none');
				$('#reg_wipe').css('display','block');
			})
		}
	})
	
	$('#high').on('touchstart',function(){
		$('#high').css('display','none');
		$('#low').css('display','block');
		$('#menu').css('display','block');
	})
	$('#low').on('touchstart',function(){
		$('#low').css('display','none');
		$('#high').css('display','block');
		$('#menu').css('display','none');
	})
	for(var i=0;i<$('.menu_list li').length;i++){
		//console.log($('.menu_list li').length);
		$('.menu_list li').eq(i).on('touchstart',function(){
			//console.log($(this).text());
			//console.log($('#identity').val());
			$('#identity').val($(this).text());
			$('#low').css('display','none');
			$('#high').css('display','block');
			$('#menu').css('display','none');
		})
	}

	$('#fanhui').on('touchstart',function(){
		window.open('login.html','_self');
	})
})
