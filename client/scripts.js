import HallHours from "../models/HallHours";

let slidePostition = 0;
const slides = document.querySelectorAll('.carousel_item');
const meals = document.querySelector('#form-id');
const totalSlides = slides.length;
// eslint-disable-next-line prefer-const
let nextSlide = document.querySelector('#carousel_button-next');
const prevSlide = document.querySelector('#carousel_button-prev');

/*
Shows Ouput for front page
*/
meals.addEventListener('submit', async (e) => {
  e.preventDefault();
  const results = await fetch('/api/meals');
  const arrayFromJson = await results.json();
  console.log(arrayFromJson);
  const targetList = document.querySelector('.food-list');
  arrayFromJson.forEach((item) => {
    const rows = document.createElement('tr');
    const meal_id = document.createElement('td');
    const mealName = document.createElement('td');
    const mealCat = document.createElement('td');
    meal_id.innerHTML = item.meal_id;
    mealName.innerHTML = item.meal_name;
    mealCat.innerHTML = item.meal_category;
    rows.appendChild(meal_id);
    rows.appendChild(mealName);
    rows.appendChild(mealCat);
    targetList.appendChild(rows);
  });
});

/*
For Carousel
*/
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
  for (const slide of slides) {
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

HallHours.addEventListener('submit', async (e) => {
  e.preventDefault();
  const results = await fetch('/api/hallHours');
  const arrayFromJson = await results.json();
  console.log(arrayFromJson);
  const targetList = document.querySelector('.food-list');
  arrayFromJson.forEach((item) => {
    const rows = document.createElement('tr');
    const hallHourId = document.createElement('td');
    const day = document.createElement('td');
    const scheduleId = document.createElement('td');
    const hallId = document.createElement('td');
    hallHourId.innerHTML = item.hall_hour_id;
    day.innerHTML = item.day;
    scheduleId.innerHTML = item.schedule_id;
    hallId.innerHTML = item.hall_id;
    rows.appendChild(hallHourId);
    rows.appendChild(day);
    rows.appendChild(scheduleId);
    rows.appendChild(hallId);
    targetList.appendChild(rows);
  });
});