// Data Handler
function dataHandler(dataArray) {
  console.log('dataHandler');
  const range = [...Array(10).keys()];
  const listItems = range.map((item, index) => dataArray[index]);
  return listItems;
}


async function mainEvent() {

  const results = await fetch('/api/meals');
  const mealJson = await results.json();

  let mealCat = '<ul>';
  let northMeals = '<ul>';
  for (i = 0; i < mealJson.length; i++){
     northMeals += `<li> ${mealJson[i].meal_name} </li>`;
     mealCat += `<li> ${mealJson[i].meal_category} </li>`;
  } 
  northMeals += '</ul>';
  mealCat += '</ul>';


  const nameList = document.querySelector(".meal_names");
  nameList.innerHTML = '';
  nameList.innerHTML += northMeals;

  const catList = document.querySelector(".category");
  catList.innerHTML = '';
  catList.innerHTML += mealCat;
}


document.addEventListener('DOMContentLoaded', async () => mainEvent());