const fpClear = document.querySelector('#fpClear');
const cpClear = document.querySelector('#cpClear');
const form = document.querySelector('.preferenceForm');
const prefCheckboxes = document.querySelectorAll('.prefCheckbox');
const colorCheckboxes = document.querySelectorAll('.colorCheckbox');
let data;

function calculateResults(event) {
  event.preventDefault();
  console.log(data);
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