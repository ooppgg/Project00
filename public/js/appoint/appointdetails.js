$(function(){
	$('.bar_tel').on('touchstart',function(){
		$('.wipe').css('display','block');
	})
	$('#cancel').on('touchstart',function(){
		$('.wipe').css('display','none');
	}) 
	$('#confirm').on('touchstart',function(){
		location.href = '../homepage/index.html';
	})
	$('.appo_btn').on('touchstart',function(){

	})
	$('#btn01').on('touchstart',function(){
		window.open('changedate.html','_self');	
	})
	$('#btn02').on('touchstart',function(){
		location.href = 'upload.html';	
	})
	$('.btn_line').on('touchstart',function(){
		location.href = 'cancel.html';
	})
});
	