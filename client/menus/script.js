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
  const hall0Button = document.querySelector('.the_diner'); //Selects the element to insert the name
  hall0Button.innerHTML = '';
  hall0Button.innerHTML+=`${hallArray.data[0].hall_name}`; //inserts the hall name into the html

  //South Campus Dinning Hall
  const hall1Button = document.querySelector('.sc_diner');
  hall1Button.innerHTML = '';
  hall1Button.innerHTML+=`${hallArray.data[1].hall_name}`;

  //North Campus Dinning Hall
  const hall2Button = document.querySelector('.nc_diner');
  hall2Button.innerHTML = '';
  hall2Button.innerHTML+=`${hallArray.data[2].hall_name}`;



  //This chunk is for adding each dining hall's list of meals to their dropdown
  const loc = await fetch('/api/mealsByHall');
  const locArray = await loc.json();
  locData = locArray.data
  //Each hall has their own seperate list for the dropdowns
  let hall0Meals = '<ul>' //The Diner
  let hall1Meals = '<ul>' //South Campus
  let hall2Meals = '<ul>' // North Campus
  for(i=0; i<locData.length; i++){ //This creates a list of each hall's menu items
    if(locData[i]['hall_name'] == 'The Diner'){
      hall0Meals += `<li> ${locData[i].meal_name} </li>`
    }else if(locData[i]['hall_name'] == 'South Campus Dining Hall'){
      hall1Meals += `<li> ${locData[i].meal_name} </li>`
    }else if(locData[i]['hall_name'] == '251 North Dining Hall'){
      hall2Meals += `<li> ${locData[i].meal_name} </li>`
    }
  }
  hall0Meals += '<ul>'
  hall0Meals += '<ul>'
  hall0Meals += '<ul>'
  //The lists are then inserted into the dropdowns
  const target0 = document.querySelector('.the_diner_menu');
  target0.innerHTML = '';
  target0.innerHTML += hall0Meals;

  const target1 = document.querySelector('.sc_diner_menu');
  target1.innerHTML = '';
  target1.innerHTML += hall0Meals;

  const target2 = document.querySelector('.nc_diner_menu');
  target2.innerHTML = '';
  target2.innerHTML += hall0Meals;




  
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