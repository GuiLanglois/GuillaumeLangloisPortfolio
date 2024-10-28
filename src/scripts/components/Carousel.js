import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;
    this.options = {
      grabCursor: true,
      autoplay: false,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
        type: 'bullets',
      },
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
    };

    this.init();
  }

  init() {
    this.setOptions();

    new Swiper(this.element, this.options);
  }

  setOptions() {
    const variant = this.element.dataset.variant;

    if (variant == 'skills') {
      this.options.breakpoints = {
        350: {
          centeredSlides: true,
          slidesPerView: 1.08,
        },
        400: {
          centeredSlides: true,
          slidesPerView: 1.075,
        },
        550: {
          centeredSlides: true,
          slidesPerView: 1.07,
        },
        675: {
          centeredSlides: true,
          slidesPerView: 1.05,
        },
        768: {
          centeredSlides: false,
          slidesPerView: 2.075,
        },
        1366: {
          centeredSlides: false,
          slidesPerView: 3.1,
        },
        1630: {
          centeredSlides: false,
          slidesPerView: 4.1,
        },
        1850: {
          centeredSlides: false,
          slidesPerView: 5.1,
        },
      };
    }

    if (variant == 'qualities') {
      this.options.breakpoints = {
        350: {
          centeredSlides: true,
          slidesPerView: 1.05,
        },
        768: {
          slidesOffsetBefore: 20,
          slidesOffsetAfter: 20,
          centeredSlides: false,
          slidesPerView: 2.1,
        },
        1366: {
          slidesOffsetBefore: 30,
          slidesOffsetAfter: 30,
          centeredSlides: false,
          slidesPerView: 3.1,
        },
      };
    }

    if (variant == 'split-2') {
      this.options.breakpoints = {
        900: {
          centeredSlides: true,
          slidesPerView: 1.5,
        },
        1366: {
          centeredSlides: false,
          slidesPerView: 2,
        },
      };
    }

    if (variant == 'effect') {
      this.options.effect = 'flip';
      this.options.longSwipesMs = 500;
    }

    if ('autoplay' in this.element.dataset) {
      this.options.autoplay = {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      };
    }

    if ('loop' in this.element.dataset) {
      this.options.loop = true;
    }

    if ('gap' in this.element.dataset) {
      this.options.spaceBetween = 50;
    }
  }
}
