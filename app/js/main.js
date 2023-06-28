$(function () {

  $('.partners__slider-items').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: '<span class="slider__arrows-bg slider__arrows-bg-left"><img class="slider__arrows slider__arrows-left" src="../images/arrow-left.svg" alt="arrow-left"></span>',
    nextArrow: '<span class="slider__arrows-bg slider__arrows-bg-right"><img class="slider__arrows slider__arrows-right" src="../images/arrow-right.svg" alt="arrow-right"></span>',
  });

})