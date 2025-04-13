class imageSlider extends HTMLElement {
  constructor() {
    super();
    this.slider = this.querySelector('.swiper');
    this.titleItems = this.querySelectorAll('.image-slider__title-item');
  }

  initSlider() {
    const nextButton = this.slider.querySelector('.swiper-button-next');
    const prevButton = this.slider.querySelector('.swiper-button-prev');

    this.swiper = new Swiper(this.slider, {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
      },
      on: {
        slideChange: () => {
          this.updateActiveTitle(this.swiper.activeIndex);
        }
      }
    });

    this.titleItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.swiper.slideTo(index);
        this.updateActiveTitle(index);
      });
    });
  }

  updateActiveTitle(index) {
    this.titleItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  connectedCallback() {
    this.initSlider();
  }
}

if (customElements.get('image-slider') === undefined) {
  customElements.define("image-slider", imageSlider);
}