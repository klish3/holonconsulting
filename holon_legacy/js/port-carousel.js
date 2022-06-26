(function($){

"use strict";

$(document).ready(function(){
	var $responsive = $(window).width()
	$('.avatar-portfolio a').click(function(e){
		e.preventDefault();
		var $carouselHeight = $('.port-content').height();
		var $galleryHeight = $('.port-inner-wrap').height();
		var $headlinePortSq = $('.headline-port-items').height();
		var $galleryPosition = $('#port-items').offset().top - 130;
		var $headerGutter = $('.navigation-tab').height();
		var $itemClicked = parseInt($(this).parent().attr('id').substr(5));
		/* Carousel opening */
		$('#carousel').carousel($itemClicked-1);
		$(this).parent().parent().parent().parent().stop(true).animate({opacity : 0}, 400,
			function(){
				$('html, body').stop(true).animate({'scrollTop' : $galleryPosition + $headlinePortSq}, 400);
				$(this).parent().stop(true).animate({height : $carouselHeight}, 400,
				function(){
					$(this).find('.port-main-wrap').css({'height' : 0});
					$(this).parent().find('.project-info').css({'height' : $carouselHeight}).animate({opacity : 1}, 400);
				});
			});
	});
		/* Carousel Closing */
	$('.closing.carousel-control').click(function(){
		var $carouselHeight = $('.port-content').height();
		var $galleryHeight = $('.port-inner-wrap').height();
		$(this).parent().parent().parent().stop(true).animate({opacity : 0}, 400,
			function(){
				$(this).parent().stop(true).animate({height : $galleryHeight}, 400,
				function(){
					$(this).find('.project-info').css({'height' : 0});
					$(this).find('.port-main-wrap').css({'height' : $galleryHeight}).stop(true).animate({opacity : 1}, 400);
				});
			});
	});
});


})(jQuery);