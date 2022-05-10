// Data Handler
function dataHandler(dataArray) {
  console.log('dataHandler');
  const range = [...Array(10).keys()];
  const listItems = range.map((item, index) => dataArray[index]);
  return listItems;
}

async function createMealTable(){
  const results = await fetch('/api/meals');
  const mealsJ = await results.json();
  const mealJson = mealJson.data

  let mealCat = '<ul>';
  let northMeals = '<ul>';
  for (i = 0; i < mealJson.length; i++){
     northMeals += `<li> ${mealJson[i].meal_name} </li>`;
     mealCat += `<li> ${mealJson[i].meal_category} </li>`;
  } 

  northMeals += '</ul>';
  mealCat += '</ul>';


  const nameList = document.querySelector(".meal_names");
  nameList.innerHTML = "";
  nameList.innerHTML += northMeals;

  const catList = document.querySelector(".category");
  catList.innerHTML = "";
  catList.innerHTML += mealCat;
}



async function createMacroTable(){
  const fetchMacros = await fetch("/api/macroNames");
  const macrosJ = await fetchMacros.json();
  const macros = macrosJ.data
  let table = `<table border = 1>
  <tr>
    <th>Food Name</th>
    <th>Calories</th>
    <th>Serving Size</th>
    <th>Cholesterol</th>
    <th>Sodium</th>
    <th>Carbs</th>
    <th>Protein</th>
    <th>Fat</th>
  </tr>`;
  console.log(macros)
  for (i = 0 ; i < macros.length; i++) {
    table += `<tr>
      <td>${macros[i].meal_name}</td>
      <td>${macros[i].calories}</td>
      <td>${macros[i].serving_size}</td>
      <td>${macros[i].cholesterol}</td>
      <td>${macros[i].sodium}</td>
      <td>${macros[i].carbs}</td>
      <td>${macros[i].protein}</td>
      <td>${macros[i].fat}</td>
    </tr>`
  }
  table += '</table>';
  console.log(table);
  const macroQuery = document.querySelector(".macro_table");
  macroQuery.innerHTML = '';
  macroQuery.innerHTML += table;
  
}



async function mainEvent() {
  createMealTable();
  createMacroTable();
}


document.addEventListener('DOMContentLoaded', async () => mainEvent());