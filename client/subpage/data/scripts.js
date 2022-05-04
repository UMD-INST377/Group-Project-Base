let oldMeal;
let newMeal;

async function mainEvent() {
  const form = document.querySelector('.main_form');
  const originalName = document.querySelector('#original_name');
  const newName = document.querySelector('#new_name');
  const submit = document.querySelector('.button');

  originalName.addEventListener('input', async (event) => {
    oldMeal = event.target.value;
    console.log(oldMeal);
  });

  newName.addEventListener('input', async (event) => {
    newMeal = event.target.value;
    console.log(event.target.value);
  });

  const database = await fetch('/chandra/allmeals');
  const allItems = await database.json();
  
  const arr = [];
  allItems.data.forEach((item) => {
    const {meal_name} = item;
    arr.push(meal_name);
  });
  console.log(arr);

  form.addEventListener('submit', async (submitEvent) => {
    submitEvent.preventDefault();
    if (arr.includes(oldMeal)) {
      console.log('it is true');
    } else {
      console.log('it is false');
    }
    console.log('Form Submitted');
  });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());