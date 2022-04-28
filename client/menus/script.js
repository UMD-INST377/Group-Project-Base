function createHTMLtable(currentArray) {
  //takes in array, prints html table
  //create table
  let result = '<table border=1>';
  //create table headers
  result += `
  <tr>
    <th>meal_name</th>
    <th>meal_id</th>
    <th>calories</th>
    <th>serving_size</th>
    <th>cholesterol</th>
    <th>sodium</th>
    <th>carbs</th>
    <th>protein</th>
    <th>meal_id</th>
    <th>fat</th>
  </tr>`;
  //loop through each object in array, print cell values
  for (let i = 0; i < currentArray.length; i++) {
    result += '<tr>';
    result += `
      <td>${currentArray[i].meal_name}</td>
      <td>${currentArray[i].meal_id}</td>
      <td>${currentArray[i].calories}</td>
      <td>${currentArray[i].serving_size}</td>
      <td>${currentArray[i].cholesterol}</td>
      <td>${currentArray[i].sodium}</td>
      <td>${currentArray[i].carbs}</td>
      <td>${currentArray[i].protein}</td>
      <td>${currentArray[i].meal_id}</td>
      <td>${currentArray[i].fat}</td>`;
    result += '</tr>';
  }
  result += '</table>';
  //close table

  const targetList = document.querySelector('.meal_table');
  //get div class meal table

  //inject the table
  targetList.innerHTML = '';
  targetList.innerHTML += result;

}

function dataHandler(arr) {
  return arr.slice(0, 10); //get first 10 rows from array
}

async function mainEvent() { //mainEvent refers to page loading
  const mealTable = document.querySelector('.meal_table'); //get meal_table div class
  const results = await fetch('/api/allmeals'); //call get function from api routes for meals
  const mealArrayFromJson = await results.json(); //convert to array
  //get first 10 head of meals table
  let currentArray = []; 
  if (mealArrayFromJson.data.length > 0) {
    currentArray = dataHandler(mealArrayFromJson.data);
  }
  //create the table
  createHTMLtable(currentArray);
  
}

document.addEventListener('DOMContentLoaded', async() => mainEvent());