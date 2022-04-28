function createHTMLtable(currentArray) {
    //takes in array, prints html table
    //create table
    let result = '<table border=1>';
    //create table headers
    result += `
    <tr>
      <th>hall_id</th>
      <th>hall_name</th>
      <th>hall_address</th>
      <th>hall_lat</th>
      <th>hall_long</th>
    </tr>`;
    //loop through each object in array, print cell values
    for (let i = 0; i < currentArray.length; i++) {
      result += '<tr>';
      result += `
        <td>${currentArray[i].hall_id}</td>
        <td>${currentArray[i].hall_name}</td>
        <td>${currentArray[i].hall_address}</td>
        <td>${currentArray[i].hall_lat}</td>
        <td>${currentArray[i].hall_long}</td>`;
      result += '</tr>';
    }
    result += '</table>';
    //close table
    const targetList = document.querySelector('.hall_list');
    //get div class meal table
  
    //inject the table
    targetList.innerHTML = '';
    targetList.innerHTML += result;
  
  }
  

async function mainEvent() { //mainEvent refers to page loading
    const mealTable = document.querySelector('.hall_list'); //get meal_table div class
    const results = await fetch('/api/dining'); //call get function from api routes for meals
    const mealArrayFromJson = await results.json(); //convert to array 
    
    //create the table
    createHTMLtable(mealArrayFromJson.data);
    
  }
  
  document.addEventListener('DOMContentLoaded', async() => mainEvent());