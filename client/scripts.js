let slidePostition = 0;
const slides = document.querySelectorAll('.carousel_item');
const totalSlides = slides.length;
// eslint-disable-next-line prefer-const
let nextSlide = document.querySelector('#carousel_button-next');
const prevSlide = document.querySelector('#carousel_button-prev');

nextSlide.addEventListener('click', () => {
  // eslint-disable-next-line no-use-before-define
  moveToNextSlide();
});
prevSlide.addEventListener('click', () => {
  // eslint-disable-next-line no-use-before-define
  moveToPrevSlide();
});

function updateSlidePosition() {
  // eslint-disable-next-line no-restricted-syntax
  for (let slide of slides) {
    slide.classList.remove('carousel_item-visible');
    slide.classList.add('carousel_item-hidden');
  }

  slides[slidePostition].classList.add('carousel_item-visible');
}

function moveToNextSlide() {
  if (slidePostition === totalSlides - 1) {
    slidePostition = 0;
  } else {
    // eslint-disable-next-line no-plusplus
    slidePostition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePostition === 0) {
    slidePostition = totalSlides - 1;
  } else {
    // eslint-disable-next-line no-plusplus
    slidePostition--;
  }
  updateSlidePosition();
}