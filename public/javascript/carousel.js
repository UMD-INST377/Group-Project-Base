const config = {
  type: 'carousel',
  perView: 5,
  autoplay: 3000,
  breakpoints: {
    1024: {
      perView: 2
    },
    600: {
      perView: 1
    }
  },
  animationTimingFunc: 'linear',
  animationDuration: 800,
  peek: {
    before: 100,
    after: 100
  },
  hoverpause: false,
  dragThreshold: false
};

const carousel = document.querySelectorAll('.glide');

for (let i = 0; i < carousel.length; i += 1) {
  new Glide(carousel[i], config).mount();
}