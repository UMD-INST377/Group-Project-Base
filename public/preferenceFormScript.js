const fpClear = document.querySelector('#fpClear');
const cpClear = document.querySelector('#cpClear');
const form = document.querySelector('.preferenceForm');
const prefCheckboxes = document.querySelectorAll('.prefCheckbox');
const colorCheckboxes = document.querySelectorAll('.colorCheckbox');
const budgetSelect = document.querySelector('.budgetSelect');

let data;

function calculateResults(event) {
  event.preventDefault();
  console.log(data);
  console.log(budgetSelect.value);
  prefCheckboxes.forEach((checkBox) => {
    // eslint-disable-next-line no-param-reassign
    if (checkBox.checked === true) {
      console.log(checkBox.value);
    }
  });

  colorCheckboxes.forEach((checkBox) => {
    // eslint-disable-next-line no-param-reassign
    if (checkBox.checked === true) {
      console.log(checkBox.value);
    }
  });
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
  data = loadData();
  form.addEventListener('submit', calculateResults);
}

window.onload = windowActions();