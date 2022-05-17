function createHTMLtable(entry) {
  // takes in array, prints html table
  // create table
  let result = '<table>';
  // create table headers
  result += `
  <tr>
    <th>Calories</th>
    <td>${entry.calories}</td>
    </tr>
    <th>Serving size</th>
    <td>${entry.serving_size}</td>
    </tr>
    <th>Cholesterol</th>
    <td>${entry.cholesterol}</td>
    </tr>
    <th>Sodium</th>
    <td>${entry.sodium}</td>
    </tr>
    <th>Carbs</th>
    <td>${entry.carbs}</td>
    </tr>
    <th>Protein</th>
    <td>${entry.protein}</td>
    </tr>
    <th>Fat</th>
    <td>${entry.fat}</td>
  </tr></table>
  <table border=1>
   <tr>
   <th>Restrictions</th>
   </tr>
   <tr>
   <td>${entry.restriction}</td>
   </tr></table>`;
  // loop through each object in array, print cell values
  return result;
}
function addNames(hallArray) {
  // The Diner
  const hall0Button = document.querySelector('.the_diner'); // Selects the element to insert the name
  hall0Button.innerHTML = '';
  hall0Button.innerHTML += `${hallArray.data[0].hall_name}`; // inserts the hall name into the html
  hall0Button.innerHTML += ''
  // South Campus Dinning Hall
  const hall1Button = document.querySelector('.sc_diner');
  hall1Button.innerHTML = '';
  hall1Button.innerHTML += `${hallArray.data[1].hall_name}`;

  // North Campus Dinning Hall
  const hall2Button = document.querySelector('.nc_diner');
  hall2Button.innerHTML = ''
  hall2Button.innerHTML += `${hallArray.data[2].hall_name}`;
}

function addMeals(locData) {
  // Each hall has their own seperate list for the dropdowns
  let hall0Meals = '<div class = "meal_list_wrap"><ul>'; // The Diner
  let hall1Meals = '<div class = "meal_list_wrap"><ul>'; // South Campus
  let hall2Meals = '<div class = "meal_list_wrap"><ul>'; // North Campus
  for (i = 0; i < locData.length; i++) { // This creates a list of each hall's menu items
    if (locData[i].location == 'The Diner') {
      panelInfo = createHTMLtable(locData[i]);
      hall0Meals += `<li><button class = "accordion">${locData[i].meal_name}</button><div class = "panel">${panelInfo}</div></li>`;
    } else if (locData[i].location == 'South Campus Dining Hall') {
      panelInfo = createHTMLtable(locData[i]);
      hall1Meals += `<li><button class = "accordion">${locData[i].meal_name}</button><div class = "panel">${panelInfo}</div></li>`;
    } else if (locData[i].location == '251 North Dining Hall') {
      panelInfo = createHTMLtable(locData[i]);
      hall2Meals += `<li><button class = "accordion">${locData[i].meal_name}</button><div class = "panel">${panelInfo}</div></li>`;
    }
  }
  hall0Meals += '</ul></div>'
  hall1Meals += '</ul></div>'
  hall2Meals += '</ul></div>'
  // The lists are then inserted into the dropdowns
  const target0 = document.querySelector('.the_diner_menu');
  target0.innerHTML = '';
  target0.innerHTML += hall0Meals;

  const target1 = document.querySelector('.sc_diner_menu');
  target1.innerHTML = '';
  target1.innerHTML += hall1Meals;

  const target2 = document.querySelector('.nc_diner_menu');
  target2.innerHTML = '';
  target2.innerHTML += hall2Meals;
}

async function mainEvent() { // mainEvent refers to page loading
  const results = await fetch('/api/allmeals'); // call get function from api routes for meals
  const mealArrayFromJson = await results.json(); // convert to array
  // get first 10 head of meals table

  // inject the names of the dining halls into the html buttons
  const api_results = await fetch('/api/dining'); // call get function from api routes for dining
  const hallArray = await api_results.json(); // convert to array
  addNames(hallArray);

  // inject the list of meals into the dropdowns
  const loc = await fetch('/api/allmeals');
  const locArray = await loc.json();
  addMeals(locArray.data);

  // This block of code turns the buttons into working button_block s
  const button_block = document.getElementsByClassName('button_block '); // Grabs the button's class
  for (i = 0; i < button_block.length; i++) {
    button_block[i].addEventListener('click', function() { // For changing which button is active
      this.classList.toggle('active');

      const drop = this.nextElementSibling;
      
      if (drop.style.display === 'flex') { // Toggles the dropdown open and close
        drop.style.display = 'none';
      } else {
        drop.style.display = 'flex';
      }
    });
  }
  const acc = document.getElementsByClassName('accordion'); // Grabs the button's class
  for (j = 0; j < acc.length; j++) {
    acc[j].addEventListener('click', function() { // For changing which button is active
      this.classList.toggle('active');
      const panel = this.nextElementSibling;
      if (panel.style.display === 'flex') { // Toggles the dropdown open and close
        panel.style.display = 'none';
      } else {
        panel.style.display = 'flex';
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', async() => mainEvent());