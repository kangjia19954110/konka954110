$(function(){

	$(window).on('scroll',function(){
		var $scroll = $(this).scrollTop();
		if($scroll >= 800){
			$('#loutinav').show();

		}else{
			$('#loutinav').hide();
		}

		$('.louti').each(function(){
			var $loutitop = $('.louti').eq($(this).index()).offset().top + 400;

			if($loutitop > $scroll){
				$('#loutinav li').removeClass('active');
				$('#loutinav li').eq($(this).index()).addClass('active');
				return false;
			}
		});
	});

	var $loutili = $('loutinav li').not('.last');
	$loutili.on('click',function(){
		$(this).addClass('active').siblings('li').removeClass('active');
		var $loutitop = $('.louti').eq($(this).index()).offset().top;

		$('html,body').animate({
			scrollTop : $loutitop
		})
	});

	$('.last').on('click',function(){
		$('html,body').animate({
			scrollTop : 0
		})
	});
})