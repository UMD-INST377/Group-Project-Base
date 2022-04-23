/*
function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(
    Math.random() * (newMax - newMin + 1) + newMin
  );
}

function dataHandler(dataArray) {
  console.log('fired dataHandler');
  const range = [...Array(15).keys()];
  const listItems = range.map((item, index) => {
    const restNum = getRandomIntInclusive(0, dataArray.length - 1);
    return dataArray[restNum];
  });
  return listItems;
}
*/

function createHtmlList(collection) {
  console.log('fired HTML creator');
  console.log(collection);
  const targetList = document.querySelector('.monday');
  // console.log(targetList)
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {name} = item;
    const displayName = name;
    targetList.innerHTML += displayName;
  });
}

// Main function
async function mainEvent() { // the async keyword means we can make API requests
  console.log('script loaded');
  const targetList = document.querySelector('.monday');

  const results = await fetch('chandra/meals');
  const breakfastItems = await results.json();
  console.log(breakfastItems);
  
  breakfastItems.forEach((item) => {
    // const {name} = item;
    // const displayName = name;
    targetList.innerHTML += item;
  });
  
  if (breakfastItems.length > 0) {
    createHtmlList(breakfastItems);
  }
}

// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent());