import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
import Swiper from 'swiper/dist/js/swiper.js';
import SimpleScrollbar from 'simple-scrollbar/simple-scrollbar.js';

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
  var goodsSwiper = new Swiper('#goods-slider', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    autoHeight: true,
    // loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '#goods-slider-next',
      prevEl: '#goods-slider-prev'
    },
    pagination: {
      el: '#goods-slider-pagination',
      clickable: true
    },
    breakpoints: {
      543: {
        // when window width is <= 543px
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      763: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1023: {
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
    slidesPerGroup: 2,
    spaceBetween: 20,
    loop: true,
    autoHeight: true,
    // loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '#articles-slider-next',
      prevEl: '#articles-slider-prev'
    },
    pagination: {
      el: '#articles-slider-pagination',
      clickable: true
    },
    breakpoints: {
      1023: {
        // when window width is <= 1023px
        slidesPerView: 1,
        slidesPerGroup: 1
      }
    }
  });
  //------------------------------------------------------------------------//

  //------------------------------------------------------------------------//
  //Counter
  var increments = document.querySelectorAll('.counter-button.plus'),
    decrements = document.querySelectorAll('.counter-button.minus'),
    i;

  for (i = 0; i < increments.length; i++) {
    increments[i].addEventListener('click', function(e) {
      e.preventDefault();

      var counterInput = this.parentElement.firstElementChild;

      if (counterInput.classList.contains('counter-input') && counterInput.value < 1001) {
        counterInput.value++;
      }
    });
  }

  for (i = 0; i < decrements.length; i++) {
    decrements[i].addEventListener('click', function(e) {
      e.preventDefault();

      var counterInput = this.parentElement.firstElementChild;

      if (counterInput.classList.contains('counter-input') && counterInput.value > 1) {
        counterInput.value--;
      }
    });
  }
  //------------------------------------------------------------------------//

  //------------------------------------------------------------------------//
  //Similar slider
  var similarSwiper = new Swiper('#similar-slider', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: true,
    autoHeight: true,
    // navigation: {
    //   nextEl: '#similar-slider-next',
    //   prevEl: '#similar-slider-prev'
    // },
    // pagination: {
    //   el: '#similar-slider-pagination',
    //   clickable: true
    // },
    breakpoints: {
      543: {
        // when window width is <= 543px
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      639: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      799: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      1199: {
        slidesPerView: 2,
        slidesPerGroup: 2
      }
    }
  });
  //------------------------------------------------------------------------//

  //------------------------------------------------------------------------//
  //Promotion sliders
  var promotionSwiper = new Swiper('#promotion-slider', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    autoHeight: true,
    // loopFillGroupWithBlank: true,
    pagination: {
      el: '#promotion-slider-pagination',
      clickable: true
    },
    breakpoints: {
      543: {
        // when window width is <= 543px
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      763: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1023: {
        slidesPerView: 3,
        slidesPerGroup: 3
      }
    }
  });

  var promotionSecondSwiper = new Swiper('#promotion-slider-2', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    autoHeight: true,
    // loopFillGroupWithBlank: true,
    pagination: {
      el: '#promotion-slider-2-pagination',
      clickable: true
    },
    breakpoints: {
      543: {
        // when window width is <= 543px
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      763: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1023: {
        slidesPerView: 3,
        slidesPerGroup: 3
      }
    }
  });
  //------------------------------------------------------------------------//

  //------------------------------------------------------------------------//
  //Product gallery
  var productGallery = new Swiper('#product-gallery', {
    spaceBetween: 10,
    navigation: {
      nextEl: '#product-gallery-next',
      prevEl: '#product-gallery-prev'
    }
  });
  var galleryThumbs = new Swiper('#product-gallery-thumbs', {
    spaceBetween: 19,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true
  });
  productGallery.controller.control = galleryThumbs;
  galleryThumbs.controller.control = productGallery;
  //------------------------------------------------------------------------//

  //------------------------------------------------------------------------//
  //Filter tooltips
  // var filterCheckboxes = document.querySelectorAll('.filter input.checkbox');

  // Array.prototype.forEach.call(filterCheckboxes, function(element) {
  //   element.addEventListener('click', function() {
  //     var _this = this,
  //       tooltip = new Foundation.Tooltip(_this.nextElementSibling.querySelector('.filter-tooltip'), {});
  //     console.log(tooltip);

  //     if (this.checked) {
  //       tooltip.foundation('show');
  //     }
  //   });
  // });
  //------------------------------------------------------------------------//
});
