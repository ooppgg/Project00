$(function(){
	$('.bar_tel').on('touchstart',function(){
		$('#wipe_appo').css('display','block');
	})
	$('#cancel1').on('touchstart',function(){
		$('#wipe_appo').css('display','none');
	})
	$('#confirm1').on('touchstart',function(){
		location.href = '../homepage/index.html';
	})
	$('#quxiao').on('touchstart',function(){
		window.history.back();
	})
	$('#change').on('touchstart',function(){
		$('#time').css('display','block');	
	})
	$('#confirm2').on('touchstart',function(){
		$('#ensure').css('display','block');
	})
	$('#queding').on('touchstart',function(){
		location.href = 'orders.html';	
	})
})