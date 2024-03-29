import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper/core';

SwiperCore.use([Navigation]);

const swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.header__button--next',
    prevEl: '.header__button--prev',
  },
});

function burgerMenu(selector) {
  const menu = $(selector);
  const button = menu.find('.burger-menu__button', '.burger-menu__lines');
  const links = menu.find('.burger-menu__link');
  const overlay = menu.find('.burger-menu__overlay');

  function toggleMenu() {
    menu.toggleClass('burger-menu__active');
    if (menu.hasClass('burger-menu__active')) {
      $('body').scss('overlow', 'hidden');
    } else {
      $('body').scss('overlow', 'visible');
    }
  }

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
}

burgerMenu('.burger-menu');
