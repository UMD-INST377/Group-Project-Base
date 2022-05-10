/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */

// for search.html
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

async function mainEvent() {
  console.log('script loaded');
  const results = await fetch('/api/plants');
  const arrayFromJson = await results.json();
  console.log(arrayFromJson);

  const table = document.querySelector('table');
  const data = Object.keys(arrayFromJson.data[0]);
  generateTableHead(table, data);

  const common_name = document.querySelector('#common_name');
  const botanical_name = document.querySelector('#latin_name');
  const submit = document.querySelector('.submit_button');

  selectPlant = arrayFromJson.data;

  if (arrayFromJson.data.length > 0) {
    submit.addEventListener('click', async (event) => {
      event.preventDefault();
      console.log('submitted');
      generateTableHead(table, data);
      generateTable(table, selectPlant);
    });

    /// // /
    common_name.addEventListener('input', async (event) => {
      console.log(event.target.value);

      const selectPlant = arrayFromJson.data.filter((item) => {
        const upperCode = item.common_name.toLowerCase();
        const upperInput = event.target.value.toLowerCase();
        return upperCode.includes(upperInput);
      });

      submit.addEventListener('click', async () => {
        console.log('submitted');
        generateTableHead(table, data);
        generateTable(table, selectPlant);
      });
    });

    botanical_name.addEventListener('input', async (event) => {
      console.log(event.target.value);

      const selectPlant = arrayFromJson.data.filter((item) => {
        const upperCode = item.botanical_name.toLowerCase();
        const upperInput = event.target.value.toLowerCase();
        return upperCode.includes(upperInput);
      });

      submit.addEventListener('click', async () => {
        console.log('submitted');
        generateTableHead(table, data);
        generateTable(table, selectPlant);
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());