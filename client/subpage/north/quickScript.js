// Data Handler
function dataHandler(dataArray) {
  console.log('dataHandler');
  const range = [...Array(dataArray.length).keys()];
  const listItems = range.map((item, index) => dataArray[index]);
  return listItems;
}

// create category list
function createCategory(collection) {
  console.log('fired HTML creator');
  console.log(collection);
  const targetList = document.querySelector('.category');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {meal_category} = item;
    const injectThisItem = `<li>${meal_category}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}

// create category list
function createMeals(collection) {
  console.log('fired HTML creator');
  console.log(collection);
  const targetList = document.querySelector('.meal_names');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {meal_name} = item;
    const injectThisItem = `<li>${meal_name}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}

// Main function
async function mainEvent() {
  console.log('script loaded');

  // data
  const ans = await fetch('/chandra/allmeals');
  const entireMeal = await ans.json();
  console.log(entireMeal);
  
  const inputMeal = dataHandler(entireMeal.data);
  createCategory(inputMeal);
  createMeals(inputMeal);
}

// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent());