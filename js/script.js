const swiper = new Swiper('.batman-slider', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.batman-slider__arrow',
  },
});