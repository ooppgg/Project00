$(function(){
	var x = sessionStorage.getItem("username");
	if(x == null){
		$('.wei').css('display','block');
		$('.yi').css('display','none');
		$('.user').on('touchstart',function(){
			window.open('../login/login.html','_self');
		})
		$('#coll').val(0);
		$('#int').val(0);
	}else{
		$('.wei').css('display','none');
		$('.yi').css('display','block');
		$('.user').on('touchstart',function(){
			window.open('personalData.html','_self');
		})
		$('#coll').html(64);
		$('#int').html(624);
	}
	$('.set').on('touchstart',function(){
		window.open('setting.html','_self');
	})
	$('.cen_wor').on('touchstart',function(){
		window.open('collection.html','_self');
	})
	$('#need').on('touchstart',function(){
		window.open('postwant.html','_self');
	})
	$('#buildings').on('touchstart',function(){
		window.open('Ilo_two.html','_self');
	})
	$('#history').on('touchstart',function(){
		window.open('Ilo_four.html','_self');
	})
	$('#overdue').on('touchstart',function(){
		window.open('Ilo_five.html','_self');
	})
})