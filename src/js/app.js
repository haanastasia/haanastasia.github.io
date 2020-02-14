'use strict';

import 'bootstrap';
import '../sass/styles.scss';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../userfiles/', true, /\.(png|jpe?g|svg)$/));

import './catalog/quantity';


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