// Data Handler
function dataHandler(dataArray) {
  console.log('dataHandler');
  const range = [...Array(10).keys()];
  const listItems = range.map((item, index) => dataArray[index]);
  return listItems;
}

// from Chandra's
// create breakfast list
// function createBreakfast(collection) {
//   console.log('fired HTML creator');
//   console.log(collection);
//   const targetList = document.querySelector('.breakfast');
//   targetList.innerHTML = '';
//   collection.forEach((item) => {
//     const {meal_name} = item;
//     const injectThisItem = `<li>${meal_name}</li>`;
//     targetList.innerHTML += injectThisItem;
//   });
// }