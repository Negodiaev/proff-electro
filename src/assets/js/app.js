import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
import Swiper from 'swiper/dist/js/swiper.js';

$(document).foundation();

document.addEventListener('DOMContentLoaded', function(event) {
  //------------------------------------------------------------------------//
  //Banner slider
  var bannerSwiper = new Swiper('.banner-slider', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.banner-slider .swiper-pagination',
      clickable: true
    }
  });

  //------------------------------------------------------------------------//
  //Goods slider
  var goodsSwiper = new Swiper('.goods-slider', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    autoHeight: true,
    // loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.goods-slider .swiper-button-next',
      prevEl: '.goods-slider .swiper-button-prev'
    },
    breakpoints: {
      480: {
        // when window width is <= 480px
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      640: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3
      }
    }
  });
  //------------------------------------------------------------------------//

  //------------------------------------------------------------------------//
  //Articles slider
  var articlesSwiper = new Swiper('.articles-slider', {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup: 2,
    loop: true,
    autoHeight: true,
    // loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.articles-slider .swiper-button-next',
      prevEl: '.articles-slider .swiper-button-prev'
    },
    breakpoints: {
      640: {
        // when window width is <= 640px
        slidesPerView: 1,
        slidesPerGroup: 2
      }
    }
  });
  //------------------------------------------------------------------------//
});
