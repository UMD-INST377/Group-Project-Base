let slidePosition = 0;
const slides = document.querySelectorAll('.carousel_item');
const totalSlides = slides.length;

document
  .querySelector('#carousel_button--next')
  .addEventListener('click', function() {
        moveToNextSlide();
  })

document.
    querySelector('#carousel_button--prev')
    .addEventListener("click", function() {
        moveToPrevSlide();
    })

function updateSlidePosition() {    //Updates the positioning of each slides by removing the previous slide and adding this new one
    for (let slide of slides) {
        slide.classList.remove('carousel_item--visible');
        slide.classList.add('carousel_item--hidden');
    }
    slides[slidePosition].classList.add('carousel_item--visible');
}   //Will be used in functions to both move to the next and previous slides

function moveToNextSlide() {    //Allows users to move to the next slide

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    updateSlidePosition();
}

function moveToPrevSlide() {    //Allows users to move to the past slide

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    updateSlidePosition();
}