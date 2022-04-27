// Data Handler
function dataHandler(dataArray) {
  console.log('dataHandler');
  const range = [...Array(dataArray.length).keys()];
  const listItems = range.map((item, index) => dataArray[index]);
  return listItems;
}

/*
function createList(collection, targetNames, names) {
  console.log('fired HTML creator');
  console.log(collection);
  const targetList = targetNames;
  targetList.innerHTML = '';
  collection.forEach((item) => {
    ({names} = item);
    const injectThisItem = `<li>${names}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}
*/

// create calories
function createCalories(collection) {
  console.log('fired HTML creator');
  console.log(collection);
  const targetList = document.querySelector('.calories');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {calories} = item;
    const injectThisItem = `<li>${calories}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}

// create serving_size
function createServingSize(collection) {
  console.log('fired HTML creator');
  console.log(collection);
  const targetList = document.querySelector('.serving');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {serving_size} = item;
    const injectThisItem = `<li>${serving_size}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}

// create cholesterol
function createCholesterol(collection) {
  console.log('fired HTML creator');
  console.log(collection);
  const targetList = document.querySelector('.cholesterol');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {cholesterol} = item;
    const injectThisItem = `<li>${cholesterol}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}

// create sodium
function createSodium(collection) {
  console.log('fired HTML creator');
  console.log(collection);
  const targetList = document.querySelector('.sodium');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {sodium} = item;
    const injectThisItem = `<li>${sodium}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}

// create carbs
function createCarbs(collection) {
  console.log('fired HTML creator');
  console.log(collection);
  const targetList = document.querySelector('.carbs');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {carbs} = item;
    const injectThisItem = `<li>${carbs}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}

// create protein
function createProtein(collection) {
  console.log('fired HTML creator');
  console.log(collection);
  const targetList = document.querySelector('.protein');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {protein} = item;
    const injectThisItem = `<li>${protein}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}

// create fat
function createFat(collection) {
  console.log('fired HTML creator');
  console.log(collection);
  const targetList = document.querySelector('.fat');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {fat} = item;
    const injectThisItem = `<li>${fat}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}

// Main function
async function mainEvent() {
  console.log('script loaded');

  // breakfast
  const macroResult = await fetch('/chandra/macro');
  const macroJson = await macroResult.json();
  console.log(macroJson);

  const inputMacro = dataHandler(macroJson.data);

  createCalories(inputMacro);
  createServingSize(inputMacro);
  createCholesterol(inputMacro);
  createSodium(inputMacro);
  createCarbs(inputMacro);
  createProtein(inputMacro);
  createFat(inputMacro);
}

// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent());