let slidePostition = 0;
const slides = document.querySelectorAll('.carousel_item');
const meals = document.querySelector('#form-id');

const vegan = document.querySelector('#filter-type-1');
const veget = document.querySelector('#filter-type-2');
const halal = document.querySelector('#filter-type-3');
let currentData = [];
const totalSlides = slides.length;
// eslint-disable-next-line prefer-const
let nextSlide = document.querySelector('#carousel_button-next');
const prevSlide = document.querySelector('#carousel_button-prev');


/*
Shows Ouput for front page
*/
meals.addEventListener('submit', async (e) => {
  e.preventDefault();
  const results = await fetch('/api/dining');
  const arrayFromJson = await results.json();
  console.log(arrayFromJson);
  const targetList = document.querySelector('.food-list');
  const filterData = filterCheck(arrayFromJson);
  console.log(filterData);
  filterData.forEach((item) => {
    const rows = document.createElement('tr');
    const mealId = document.createElement('td');
    const mealName = document.createElement('td');
    const mealCat = document.createElement('td');
    const mealFilter = document.createElement('td');
    mealId.innerHTML = item.hall_address;
    mealName.innerHTML = item.meal_name;
    mealCat.innerHTML = item.meal_category;
    mealFilter.innerHTML = item.restriction_type;
    rows.appendChild(mealId);
    rows.appendChild(mealName);
    rows.appendChild(mealCat);
    rows.appendChild(mealFilter);
    targetList.appendChild(rows);
  });
});

function filterCheck(array) {
  let filterArray = array;
  if (vegan.checked) {
    const filterOne = filterArray.filter(
      (item) => item.meal_category === parseInt(vegan.value)
    );
    filterArray = filterOne;
  }
  if (veget.checked) {
    const filterTwo = filterArray.filter(
      (item) => item.meal_category === parseInt(veget.value)
    );
    filterArray = filterTwo;
  }
  if (halal.checked) {
    const filterThree = filterArray.filter(
      (item) => item.meal_category === parseInt(halal.value)
    );
    filterArray = filterThree;
  }
  return filterArray;
}

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