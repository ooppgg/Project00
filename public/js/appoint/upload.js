$(function(){
	$('.cha_cancel').on('touchstart',function(){
		$('#up_kua').css('display','block');
	})
	$('#up_can').on('touchstart',function(){
		$('#up_kua').css('display','none');
	}) 
	$('#up_confirm').on('touchstart',function(){
		$('#ensure').css('display','block');
	}) 
	$('#confirm').on('touchstart',function(){
		location.href = 'orders.html';
	}) 
	$('#wipe_one').on('touchstart',function(){
		location.href = 'orders.html';
	})
})
	
	
	