$(document).ready(function(){
	$('.courses-reviews__slider').slick({
		slidesToShow: 3,
		adaptiveHeight: true,
		slidesToScroll: 2,
		speed: 800,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false
			}
		}
		]
	});
});


