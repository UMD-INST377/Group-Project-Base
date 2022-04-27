function createHTMLlist(collection) {
  console.log('fired HTML creator function');
  console.log(collection);
  const targetList = document.querySelector('.macro_table');
  targetList.innerHTML = '';
  columns = ['macro_id', 'calories', 'serving_size', 'cholesterol', 'sodium', 'carbs', 'protein', 'meal_id', 'fat'];
  collection.forEach((item) => {
    const newRow = '</br>';
    targetList.innerHTML += newRow;
    for (let i = 0; i < columns.length; i++) {
      const injectThisItem = `<li style = "background-color: white;">${columns[i]}: ${item[columns[i]]}</li>`;
      targetList.innerHTML += injectThisItem;
    }
  });
}

function getRandomInt(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(
    Math.random() * (newMax - newMin + 1) + newMin
  );
}

function dataHandler(arr) {
  console.log('fired dataHandler');
  // console.log(arr);
  const range = [...Array(15).keys()];
  const listItems = range.map((item, index) => {
    const ind = getRandomInt(0, arr.length - 1);
    return arr[ind];
  });
  return listItems;
}

async function mainEvent() {
  const macroTable = document.querySelector('.macro_table');
  const results = await fetch('/api/macros');
  const macroArrayFromJson = await results.json();
  if (macroArrayFromJson.data.length > 0) {
    let currentArray = [];
    currentArray = dataHandler(macroArrayFromJson.data);
    createHTMLlist(currentArray);
  }
}

document.addEventListener('DOMContentLoaded', async() => mainEvent());