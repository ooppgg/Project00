$(function(){
	$('#wipe_btn').on('touchstart',function(){
		$('#wipe_appo').css('display','block');
	})
	$('#cancel').on('touchstart',function(){
		$('#wipe_appo').css('display','none');
	}) 
	$('#confirm').on('touchstart',function(){
		$('#wipe_appo').css('display','none');
	})
	$('#btn01').on('touchstart',function(){
		window.open('changedate.html','_self');	
	})
	$('#btn02').on('touchstart',function(){
		window.open('upload.html','_self');	
	})
});
	