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
    const mealJson = mealsJ.data
  
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

  async function mainEvent() {
    createMealTable();
  }
  
  
  document.addEventListener('DOMContentLoaded', async () => mainEvent());