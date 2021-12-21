$(document).ready(function(){
	$('.result__slider').slick({
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-left.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-right.svg" alt=""></button>',
	 });

	 $(".accordion__header").click(function(event) {
		if($(".accordion").hasClass("one")) {
			$(".accordion__header").not($(this)).removeClass("accordion__open");
			$(".accordion__body").not($(this).next()).slideUp(300);
		}
		$(this).toggleClass("accordion__open").next().slideToggle(300);
	})
});