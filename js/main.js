const swiper =  new Swiper('.mySwiper', {
  loop: true,
  effect: 'fade',
  autoplay: {
			delay: 4000,
			disableOnInteraction: false,
	},
  pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
 },
});


$('.pause').on('click', function() {
  if(swiper.autoplay.running) {
    swiper.autoplay.stop();
  }else {
    swiper.autoplay.start();
  }
  $(this).toggleClass('play');
});


$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});