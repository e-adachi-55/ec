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

	//ハンバーガーメニュー
	$('.menu-trigger').on('click', function() {
		$(this).toggleClass('is-active');
		$('.header-links').toggleClass('is-active');
	});

	//サイズの選択
	$('.item-size-list li').on('click', function() {
		const select_size = $(this).text();
		
		$(this).addClass('is-active');
		$(this).siblings('li').removeClass('is-active');
		$('.item-size-select span').text(select_size);
	});
});

$(window).on("scroll", function() {
	
	//フェードイン
	$('[data-fadeIn]').each(function(index, el) {
		if($(window).scrollTop() > ( $(el).offset().top - $(window).height() / 2) ) {
			$(el).addClass('is-over');
		}
	});
});

$(window).on("load", function() {
	
	//ローディング
	setTimeout(function() {
		$('.loader').fadeOut();
	},600)

});