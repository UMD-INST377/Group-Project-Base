/* eslint-disable no-console */
/* eslint-disable max-len */
function initChart(targetElement, dataObject) {
  const labels = Object.keys(dataObject);
  const info = Object.keys(dataObject).map((item) => dataObject[item].length);

  const data = {
    labels: labels,
    datasets: [{
      label: 'Restaurants By Category',
      backgroundColor: 'rgb(255, 60, 255)',
      borderColor: 'rgb(255, 255, 255)',
      borderWidth: '3',
      data: info
    }]
  };
  const config = {
    type: 'bar',
    data: data,
    options: {}
  };

  return new Chart(
    targetElement,
    config
  );
}

async function getData() {
  /* Get the data asynchronously */
  const url = 'https://api.coingecko.com/api/v3/coins/categories?order=name_asc'; // remote URL! you can test it in your browser
  const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
  const json = await data.json();
  return json;
}

async function injectHTML(obj) {
  const target = document.querySelector('#crypto_information');
  target.innerHTML = '';

  ['name', 'id', 'market_cap'].forEach((item) => {
    const p = document.createElement('p');
    p.innerText = `${item}: ${obj[item]}`;
    target.append(p);
  });
}

async function mainEvent() {
  const json = await getData(); // Get the data from the API
  const form = document.querySelector('#category_form');

  let index = 0;
  form.addEventListener('submit', (submitEvent) => {
    submitEvent.preventDefault();
    injectHTML(json[index]);
    index += 1;
    index = index > json.length ? 0 : index + 1;
  });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());