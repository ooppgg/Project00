$(function(){
	var x = sessionStorage.getItem("username");
	if(x == null){
		$('.appoint_all').css('display','none');
	}else{
		$('.appoint_all').css('display','block');
	}
	$('.ind_bar_wor').on('tap',function(){
		location.href = 'orders.html';
	})
	$('.wor_btn').on('tap',function(){
		$('.wor_btn').css('display','none');
		$('.wor_state1').css('display','block');
	})
	$('.appo_index_bar_width').on('swipeLeft',function(){
		/*$(".appo_index_bar_width").animate({
			margirLeft:-20+'%'
		},1000);*/	
	$(this).css('margin-left','-25%').css('transition','1s all')
	})	
	$('.appo_index_bar_width').on('swipeRight',function(){
		/*$(".appo_index_bar_width").animate({
			margirLeft:-20+'%'
		},1000);*/	
	$(this).css('margin-left','0').css('transition','1s all')
	})	
	$('.delete').on('tap',function(){
		$(this).parent().parent().css('display','none')
	})
})
