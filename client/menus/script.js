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
    <th>location</th>
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
      <td>${currentArray[i].fat}</td>
      <td>${currentArray[i].location}</td>`;
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


  //This chunk of code is for adding the names to the buttons on the accordion
  const api_results = await fetch('/api/dining'); //call get function from api routes for dining
  const hallArray = await api_results.json(); //convert to array

  //The Dinner
  let hall0String = `${hallArray.data[0].hall_name}`; //Indexes the hall's name
  const hall0Table = document.querySelector('.the_diner'); //Selects the element to insert name
  hall0Table.innerHTML = '';
  hall0Table.innerHTML+=hall0String; //inserts it

  //South Campus Dinning Hall
  let hall1String = `${hallArray.data[1].hall_name}`;
  const hall1Table = document.querySelector('.sc_diner');
  hall1Table.innerHTML = '';
  hall1Table.innerHTML+=hall1String;

  //North Campus Dinning Hall
  let hall2String = `${hallArray.data[2].hall_name}`;
  const hall2Table = document.querySelector('.nc_diner');
  hall2Table.innerHTML = '';
  hall2Table.innerHTML+=hall2String;



  
  //This block of code turns the buttons into working accordions
  const accordion = document.getElementsByClassName("accordion"); //Grabs the button's class
  for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() { //For changing which button is active
      this.classList.toggle("active");

      const drop = this.nextElementSibling;
      if (drop.style.display === "block") { //Toggles the dropdown open and close
        drop.style.display = "none";
      } else {
        drop.style.display = "block";
      }
    });
    
  }


  //create the table
  createHTMLtable(currentArray);
  
}

document.addEventListener('DOMContentLoaded', async() => mainEvent());