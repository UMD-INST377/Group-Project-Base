function createHTMLtable(currentArray) {
    //takes in array, prints html list
    //create list
    let result = '<ul>';

    //loop through each object in array, add hall names to a list
    for (let i = 0; i < currentArray.length; i++) {
      result += `
        <li> <a href="/menus/index.html">${currentArray[i].hall_name}</a></li>`;
    }
    result += '</ul>';

    
    const targetList = document.querySelector('.hall_list');
  
    //inject the table
    targetList.innerHTML = '';
    targetList.innerHTML += result;
  
  }
  

async function mainEvent() { //mainEvent refers to page loading
    const mealTable = document.querySelector('.hall_list'); //get hall_list div class
    const results = await fetch('/api/dining'); //call get function from api routes for dining
    const mealArrayFromJson = await results.json(); //convert to array 
    
    //create the table
    createHTMLtable(mealArrayFromJson.data);
    
  }
  
  document.addEventListener('DOMContentLoaded', async() => mainEvent());