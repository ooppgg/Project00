$(function(){
	$('.mes_pic_1').on('touchstart',function(){
		$('.edit_pic').css('display','block');
	})
	$('#cancel').on('touchstart',function(){
		$('.edit_pic').css('display','none');
	})
})
