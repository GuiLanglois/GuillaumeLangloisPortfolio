import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;
    this.options = {
      grabCursor: true,
      autoplay: false,
      slidesOffsetAfter: 20,
      slidesOffsetBefore: 20,
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
          slidesPerView: 1.1175,
        },
        400: {
          slidesPerView: 1.1125,
        },
        550: {
          slidesPerView: 1.075,
        },
        675: {
          slidesPerView: 1.06,
        },
        768: {
          slidesPerView: 2.085,
        },
        1366: {
          slidesOffsetAfter: 30,
          slidesOffsetBefore: 30,
          slidesPerView: 3.15,
        },
        1630: {
          slidesPerView: 4.1,
        },
        1850: {
          slidesPerView: 5.1,
        },
      };
    }

    if (variant == 'qualities') {
      this.options.breakpoints = {
        1024: {
          slidesPerView: 3,
        },
      };
    }

    if (variant == 'split-2') {
      this.options.breakpoints = {
        1024: {
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
