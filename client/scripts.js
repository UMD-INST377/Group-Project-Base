// Data Handler
function dataHandler(dataArray) {
  console.log('dataHandler');
  const range = [...Array(10).keys()];
  const listItems = range.map((item, index) => dataArray[index]);
  return listItems;
}

function createHtmlList(collection) {
  console.log('fired HTML creator');
  console.log(collection);
  const targetList = document.querySelector('.breakfast');
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
  // const targetList = document.querySelector('.monday');

  const results = await fetch('chandra/meals');
  const breakfastItems = await results.json();
  console.log(breakfastItems);

  // const dataJson = JSON.stringify(breakfastItems.data);
  const foodNames = dataHandler(breakfastItems.data);
  createHtmlList(foodNames);

  // format data to look nicer on homepage
  // const dataJson = JSON.stringify(breakfastItems.data);
  // targetList.innerHTML = dataJson;
}

// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent());