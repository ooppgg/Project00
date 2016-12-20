$(function(){
	$('#up_cancel').on('touchstart',function(){
		$('#up_kua').css('display','block');
	})
	$('#up_can').on('touchstart',function(){
		$('#up_kua').css('display','none');
	}) 
	$('#up_confirm').on('touchstart',function(){
		$('#ensure').css('display','block');
	}) 
	$('#confirm').on('touchstart',function(){
		window.open('orders.html','_self');
	}) 
	$('#wipe_one').on('touchstart',function(){
		window.open('orders.html','_self');
	})
	$('#confirm').on('touchstart',function(){
		// location.href = 'orders.html';
		window.open('orders.html','_self');
	})
})
	
	
	