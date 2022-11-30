
/* eslint-disable no-console */
/* eslint-disable max-len */
function initChart(targetElement, dataObject) {
  const labels = Object.keys(dataObject);
  const info = Object.keys(dataObject).map((item) => dataObject[item].length);


  function initChart(chart) {
    const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

    const data = {
      label: labels,
      datasets: [{
        label: "temp",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    }
    const config = {
     type : 'line',
     data: data,
     options: {}
  }
    return new Chart(
      chart,
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
  const target = document.querySelector('#crypto_information'); // Get the 'div' where the cryptocurrency information will be placed
  target.innerHTML = ''; // clear the 'div' 

  /* Get the 'name', 'id', and 'market_cap' for each of the currencies */
  ['name', 'id', 'market_cap'].forEach((item) => {
    const p = document.createElement('p');
    p.innerText = `${item}: ${obj[item]}`;
    target.append(p);
  });
}

async function mainEvent() {
  const json = await getData(); // Get the cryptocurrency data from the API
  const form = document.querySelector('#category_form'); // Get the button that we press to see the next cryptocurrency

  /* Iterate over the cryptocurrency data */ 
  let index = 0;
  form.addEventListener('submit', (submitEvent) => {
    submitEvent.preventDefault();
    injectHTML(json[index]);
    index += 1;
    index = index > json.length ? 0 : index + 1;
  });

  const form = document.querySelector('.main_form');
  const chartTarget = doccument.querySelector('#myChart');

  initChart(chartTarget);
  doccument.getElementById('button').addEventListener("click", console.log("hello"));
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());

