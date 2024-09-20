import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;
    this.options = {
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

    if (variant == 'split') {
      this.options.breakpoints = {
        1024: {
          slidesPerView: 2.5,
        },
      };
    }

    if (variant == 'effect') {
      this.options.effect = 'flip';
      this.options.longSwipesMs = 500;
    }

    if ('autoplay' in this.element.dataset) {
      this.options.autoplay = {
        delay: 5000,
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
