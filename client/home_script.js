
  

async function mainEvent() { //mainEvent refers to page loading
    //const hallTable = document.querySelector('.hall_list'); //get hall_list div class
    //const results = await fetch('/api/dining'); //call get function from api routes for dining
    //const hallArrayFromJson = await results.json(); //convert to array 
    
    //create the table
    //createHTMLtable(hallArrayFromJson.data);
  
const table = document.querySelector('.table')
const mealData = await fetch('/api/josh')
const data = await mealData.json()
let currentData = data
console.log(data);
const searchBar = document.querySelector('#search')

function createHTMLtable(currentArray) {
  currentData = currentArray.filter((item) => item.meal_name.toLowerCase().includes(searchBar.value.toLowerCase()))
  console.log(currentData);
  table.innerHTML = `<tr>
  <th>
  Meal Name
  </th>
  <th>
 Meal Category
  </th>
  <th>
 Dining Hall 
  </th>
</tr>`
currentData.forEach(element => {
  table.innerHTML += `<tr> <th>${element.meal_name}</th> <th>${element.meal_category}</th> <th>${element.hall_name}</th> </tr>`
  
});
}

searchBar.addEventListener('change', () => {createHTMLtable(data)})
  }
  
  document.addEventListener('DOMContentLoaded', async() => mainEvent());