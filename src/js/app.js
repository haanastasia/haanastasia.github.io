'use strict';

import 'bootstrap';
import '../sass/styles.scss';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../userfiles/', true, /\.(png|jpe?g|svg)$/));

import './catalog/quantity';
import './catalog/cart';
import './menu/mobile';

// Import Swiper and modules
import { Swiper, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/js/swiper.esm.js';

// Install modules
Swiper.use([Navigation, Autoplay, Pagination, Scrollbar]);

// Now you can use Swiper
var swiper = new Swiper('.swiper-container', {
  speed: 200,
  autoplay: {
    delay: 2000,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },  
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});


var sets = new Swiper('#sets', {
  slidesPerView: 1.3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },  
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    550: {
      slidesPerView: 1.6,
      spaceBetween: 30,
      slidesPerGroup: 1,
      centeredSlides: true
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,
      centeredSlides: false
    }
  },
});


var rols = new Swiper('#rols', {
  slidesPerView: 1.3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },  
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    550: {
      slidesPerView: 1.6,
      spaceBetween: 30,
      slidesPerGroup: 1,
      centeredSlides: true
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,
      centeredSlides: false
    }
  },
});

var pizza = new Swiper('#pizza', {
  slidesPerView: 1.3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },  
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    550: {
      slidesPerView: 1.6,
      spaceBetween: 30,
      slidesPerGroup: 1,
      centeredSlides: true
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,
      centeredSlides: false
    }
  },
});

var novinki = new Swiper('#novinki-slider', {
  slidesPerView: 1.3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },  
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    550: {
      slidesPerView: 1.6,
      spaceBetween: 30,
      slidesPerGroup: 1,
      centeredSlides: true
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,
      centeredSlides: false
    }
  },
});

var akcii = new Swiper('#akcii-slider', {
  slidesPerView: 1.3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },  
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    550: {
      slidesPerView: 1.6,
      spaceBetween: 30,
      slidesPerGroup: 1,
      centeredSlides: true
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,
      centeredSlides: false
    }
  },
});
 