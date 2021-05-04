const fpClear = document.querySelector('#fpClear');
const cpClear = document.querySelector('#cpClear');
const form = document.querySelector('.preferenceForm');
const prefCheckboxes = document.querySelectorAll('.prefCheckbox');
const colorCheckboxes = document.querySelectorAll('.colorCheckbox');
const budgetSelect = document.querySelector('.budgetSelect');
const errorText = document.querySelector('.errorText');

let data;

function calculateResults(event) {
  event.preventDefault(); // stops the page from reloading
  console.log(data);
  let min;
  let max;

  errorText.innerHTML = ''; // clears the errorText if there is any there from before
  if (budgetSelect.value == 1) { 
    min = 0;
    max = 100;
  } else if (budgetSelect.value == 2) {
    min = 100;
    max = 200;
  } else if (budgetSelect.value == 3) {
    min = 200;
    max = 300;
  } else if (budgetSelect.value == 4) {
    min = 300;
    max = 10000;
  } else {
    errorText.innerHTML = 'You must select a budget';
    return; // breaks out of the function if there is anything there
  }
  console.log(min);
  console.log(max);

  const preferenceSelections = []; // array that the furniture preferences will end up in 
  prefCheckboxes.forEach((checkBox) => {
    // eslint-disable-next-line no-param-reassign
    if (checkBox.checked === true) {
      preferenceSelections.push(checkBox.value);
    }
  });
  // eslint-disable-next-line max-len
  if (preferenceSelections.length === 0) { // error handling for if no furniture preference is selected 
    errorText.innerHTML = 'You must select a furniture preference';
    return;
  }

  const colorSelections = []; // array that the color preferences will end up in 
  colorCheckboxes.forEach((checkBox) => {
    // eslint-disable-next-line no-param-reassign
    if (checkBox.checked === true) {
      colorSelections.push(checkBox);
    }
  });
  if (colorSelections.length === 0) { // error handling for if no color preference is selected
    errorText.innerHTML = 'You must select a color preference';
    return;
  }

  // this is where the magic happens
  const selections = preferenceSelections.map((selection) => {
    const final = data.data.filter((value) => value.category_name === selection
    && Math.round(value.product_unit_price) >= min && Math.round(value.product_unit_price) <= max);
    return {
      ...final
    };
  });
  console.log(selections);
}

async function loadData() {
  const request = await fetch('/api/wholeProduct/');
  data = await request.json();
  return data;
}

function clearButtons() {
  fpClear.addEventListener('click', () => {
    console.log('Furniture Clear Clicked');
    prefCheckboxes.forEach((checkBox) => {
      // eslint-disable-next-line no-param-reassign
      checkBox.checked = false;
    });
  });

  cpClear.addEventListener('click', () => {
    console.log('Color Clear Clicked');
    colorCheckboxes.forEach((checkBox) => {
      // eslint-disable-next-line no-param-reassign
      checkBox.checked = false;
    });
  });
}

async function windowActions() {
  clearButtons();
  loadData();
  form.addEventListener('submit', calculateResults);
}

window.onload = windowActions();