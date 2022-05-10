/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */

// how to access object in returned query array: console.log(arrayFromJson.data[0]);

function generateTableHead(table, data) {
  // eslint-disable-next-line no-param-reassign
  table.innerHTML = '';
  const thead = table.createTHead();
  const row = thead.insertRow();
  for (const key of data) {
    const th = document.createElement('th');
    const text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

// TODO: clear table before generating
function generateTable(table, data) {
  for (const element of data) {
    const row = table.insertRow();
    // eslint-disable-next-line guard-for-in
    for (key in element) {
      const cell = row.insertCell();
      const text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

/* function createHtmlList(collection) {
  const targetList = document.querySelector('.plants_list');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {common_name} = item;
    const displayName = common_name;
    const injectThisItem = `<li>${displayName}</li>`;
    targetList.innerHTML += injectThisItem;
  });
} */

async function mainEvent() {
  console.log('script loaded');
  const results = await fetch('/api/map');
  const arrayFromJson = await results.json();
  console.log(arrayFromJson);

  const table = document.querySelector('table');
  const data = Object.keys(arrayFromJson.data[0]);
  generateTableHead(table, data);

  // generate table
  // const table = document.querySelector('table');
  // const data = Object.keys(arrayFromJson.data[0]);
  // generateTableHead(table, data);
  // generateTable(table, arrayFromJson.data);

  // const form = document.querySelector('.map_form');
  const location = document.querySelector('#location');
  const submit = document.querySelector('.submit_button');

  if (arrayFromJson.data.length > 0) {
    location.addEventListener('input', async (event) => {
      console.log(event.target.value);

      const selectLocation = arrayFromJson.data.filter((item) => {
        const upperCode = item.location_code.toUpperCase();
        const upperInput = event.target.value.toUpperCase();
        return upperCode.includes(upperInput);
      });

      /* console.log(selectLocation);
      generateTableHead(table, data);
      generateTable(table, selectLocation); */

      submit.addEventListener('click', async () => {
        console.log('submitted');
        generateTableHead(table, data);
        generateTable(table, selectLocation);
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());