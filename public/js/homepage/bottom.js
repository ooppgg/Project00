$(function(){
	var x = sessionStorage.getItem("username");
	//console.log(x);
	if(x == null){
		$('.small_num').css('display','none');
	}else{
		$('.small_num').css('display','block');
	}
	$('#homepage').on('touchstart',function(){
		window.open('../homepage/index.html','_self');
	})
	$('#reserve').on('touchstart',function(){
		window.open('../appoint/appoint_index.html','_self');
	})
	$('#add').on('touchstart',function(){
		window.open('../issue/issue_add.html','_self');
	})
	$('#message').on('touchstart',function(){
		window.open('../message/message_all.html','_self');
	})
	$('#me').on('touchstart',function(){
		window.open('../I/I.html','_self');
	})
})