import 'slick-carousel';

// slick init
export default function initSlickCarousel() {
  jQuery('.photo-slider').slick({
    slidesToScroll: 1,
    rows: 0,
    prevArrow: '<a href="#" class="slick-prev icon-arrow-right"></a>',
    nextArrow: '<a href="#" class="slick-next icon-arrow-left"></a>',
    speed: 1000,
  });
}
