import Swiper, { Navigation, Keyboard, Pagination } from 'swiper';
Swiper.use([Navigation, Keyboard, Pagination]);

new Swiper('.swiperOne', {
  grabCursor: true,
  draggable: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  speed: 800,
  navigation: {
    nextEl: '.nav-right',
    prevEl: '.nav-left',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    // at breakpoint of 1px or more
    1: {
      slidesPerView: 1,
    },
    // at breakpoint of 480px or more
    480: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    2000: {
      slidesPerView: 4,
    },
  },
});
