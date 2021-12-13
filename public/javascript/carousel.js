/* eslint-disable no-plusplus */
const config = {
  type: 'slider',
  perView: 5,
  breakpoints: {
    1024: {
      perView: 2
    },
    600: {
      perView: 1
    }
  },
  peek: {
    before: 0,
    after: 225
  },
  hoverpause: false,
  dragThreshold: false,
  rewind: false
};

const carousel = document.querySelectorAll('.glide');

for (let i = 0; i < carousel.length; i += 1) {
  new Glide(carousel[i], config).mount();
}