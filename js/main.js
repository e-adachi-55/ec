$(function() {

	//TOPスライダー
	$('.top-slider').slick({
		arrows: true,
		autoplay: true,
		dots: true,
		speed: 1500,
		easing: 'swing',
		centerMode: true,
		centerPadding: '25%',
		prevArrow: '<div class="slide-btn prev-btn"></div>',
		nextArrow: '<div class="slide-btn next-btn"></div>',
		responsive:[
			{
				breakpoint:768,
				settings:{
					centerPadding:'0%',
					slidesToShow:1,
					slidesToScroll:1,
				}
			}
		]
	});
});

$(window).on("load", function() {
	
	//ローディング
	setTimeout(function() {
		$('.loader').fadeOut();
	},600)

});