import './assets/sass/main.scss';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination]);

const swiper1 = new Swiper('.popular-carousel', {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,
  centeredSlides: true,
  loop: true,
  // speed: 3000,
  pagination: {
    el: '.popular-carousel__pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
  },
});

setInterval(() => swiper1.slideNext(), 7000);

const swiper2 = new Swiper('.most-popular-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.most-popular-slider__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.most-popular-slider__next-button',
    prevEl: '.most-popular-slider__prev-button',
  },
});

setInterval(() => swiper2.slideNext(), 7000);

const swiper3 = new Swiper('.honeymoon-offer-slider', {
  autoHeight: 'true',
  slidesPerView: 'auto',
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  pagination: {
    el: '.honeymoon-offer-slider__pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      autoHeight: 'true',
      slidesPerView: 'auto',
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
  },
});

setInterval(() => swiper3.slideNext(), 7000);

const swiper4 = new Swiper('.most-popular-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.most-popular-slider__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.most-popular-slider__next-button',
    prevEl: '.most-popular-slider__prev-button',
  },
});

setInterval(() => swiper4.slideNext(), 14000);

const swiper5 = new Swiper('.ticket-slider', {
  slidesPerView: 'auto',
  spaceBetween: 200,
  slidesPerGroup: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.ticket-slider__next-button',
    prevEl: '.ticket-slider__prev-button',
  },
});

setInterval(() => swiper5.slideNext(), 14000);

const toggleMobileNav = () => {
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavBackground = document.querySelector('.mobile-background-nav');
  const mobileCloseButton = document.querySelector('.mobile-nav__close-button');
  const body = document.querySelector('body');

  // Show side menu and semi-transparent background and disable scroll
  mobileNav.classList.add('mobile-nav_open');
  mobileNavBackground.classList.add('mobile-background-nav_show');
  body.style = 'overflow: hidden';

  // Remove
  const removeNavAndBackground = () => {
    mobileNav.classList.remove('mobile-nav_open');
    mobileNavBackground.classList.remove('mobile-background-nav_show');
    body.style = '';
  };

  if (mobileNavBackground.classList.contains('mobile-background-nav_show')) {
    mobileNavBackground.addEventListener('click', removeNavAndBackground);
  } else {
    mobileNavBackground.removeEventListener('click', removeNavAndBackground);
  }

  if (mobileNav.classList.contains('mobile-nav_open')) {
    mobileCloseButton.addEventListener('click', removeNavAndBackground);
  } else {
    mobileCloseButton.removeEventListener('click', removeNavAndBackground);
  }
};

document
  .getElementById('burger-menu')
  .addEventListener('click', toggleMobileNav);
