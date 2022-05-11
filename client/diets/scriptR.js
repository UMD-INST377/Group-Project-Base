async function mainEvent() {
  const form = document.querySelector('.form-r');
  const button = document.querySelector('#submit_button'); // form & submit button

  const checklist = document.querySelectorAll('.each_option > input[type=checkbox]');  
  // selected diet restrictions (can be more than one)

  const mealList = document.querySelector('.meal_list');
  // the list elements that display compatible meals to the user

  button.addEventListener('click', async(submitEvent) => {
    submitEvent.preventDefault();
    console.log('clicked!');
    mealList.innerHTML = '';

    let userFilters = [];  // holds which checkboxes the user selected

    const data = await fetch('/api/allergies');  // this is all the meals and their restrictions
    const formatData = await data.json(); 

    [...checklist].forEach((el) => {  // for all 8 fields - if checked, add to the list
      if (el.checked) {
          userFilters.push(el.value);
      }
    
    });

    let withinDiet = []; // stores the meals the user can safely eat

    // note: the database has many duplicate meals - one entry per EACH diet restriction
    for (let i = 0; i < formatData.length; i++) { 
      const thisMeal = await formatData[i];               // each entry for a meal in the database
      const thisMealName = thisMeal.meal_name;            // the meal's name
      const thisRestriction = thisMeal.restriction_id;    // the code for that diet restriction
      const isItAllergy = (value) => value > 3;           // 1, 2, 3 are vegan, vegetarian, halal
                                                          // everyone can eat those diets - inclusive
                                                          // 4-8 = more exclusive -remove from list

      // does this diet restriction for this meal match any of the user's filters? (YES)
      if (userFilters.includes(String(thisRestriction))) {

        // if it's not an allergy and it's not already a duplicate, add it to the list
        if (!isItAllergy(thisRestriction) && !withinDiet.includes(thisMealName)) {
          withinDiet.push(thisMealName)
        } 
        else if (isItAllergy(thisRestriction) && withinDiet.includes(thisMealName)) {
          withinDiet = withinDiet.filter(item => {
            return item !== thisMealName;
          });
        } // if it is an allergy & meal was added to the list before, remove it back **ERROR HANDLING!
      }       

      // (NO), this diet restriction ISN'T in the user's list
      else { 
        
        //...this is just complicated.  If it's not already a duplicate:
        // option A: all of the user's filter(s) are allergies and this one doesnt match. Add it.**
        // option B: one of the user's filters is vegetarian or halal - don't add it, they don't match
        // **NOTE: because of duplicates in the database, the above error handling is necessary
        if (!withinDiet.includes(thisMealName) && userFilters.every(isItAllergy)) { 
          withinDiet.push(thisMeal.meal_name);  
        }
        else { continue; } // if for some reason none of these are true, skip it. 
      }
      
    }

    withinDiet.forEach(item => {
      mealList.innerHTML += `<li>${item}</li>`;
    });
  

  });

}


document.addEventListener('DOMContentLoaded', async() => mainEvent());