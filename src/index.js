import './assets/sass/main.scss';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination]);

// Connect sliders
window.addEventListener(
  'load',
  () => {
    const swiper1 = new Swiper('.popular-carousel', {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loopFillGroupWithBlank: true,
      centeredSlides: true,
      loop: true,
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
      slidesPerView: 'auto',
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
      centeredSlides: true,
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
  },
  false
);

// Mobile sidebar
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

// Countdown timer
const dateDistance = (date) => {
  date = Number(Date.parse(date));

  const now = new Date().getTime();

  const distance = date - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    distance,
    days,
    hours,
    minutes,
    seconds,
  };
};

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

setInterval(() => {
  const { days, hours, minutes, seconds } = dateDistance('10/10/2021');

  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;
}, 1000);
