/* eslint-disable no-param-reassign */
/* eslint-disable prefer-template */
/* eslint-disable max-len */
/* eslint-disable no-console */

/*
Regular Functions
*/

// Returns a random int within the parameter range
function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
}

// Takes the spending data and turns it into a usable array
function processSpending(list) {
  const range = [...Array(20).keys()]; // Creates an array of 15 elements
  const newArray = range.map(() => {
    const index = getRandomIntInclusive(0, list.length);
    return list[index];
  });
  return newArray;
}

function injectHTML(list) {
  console.log('fired injectHTML');
  const target = document.querySelector('#spending_list');
  target.innerHTML = '';

  const listEl = document.createElement('ol');
  target.appendChild(listEl);

  list.forEach((item) => {
    const el = document.createElement('li');
    el.innerText = '$' + item.amount + ': ' + item.agency + ' - ' + item.payment_description;
    listEl.appendChild(el);
  });
}

function initChart(chart, object) {
  const labels = Object.keys(object);
  const info = Object.keys(object).map((item) => object[item].length);

  console.log(labels);
  console.log(info);

  const data = {
    labels: labels,
    datasets: [{
      label: 'PG County Spending',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: info
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {maintainAspectRatio: false}
  };

  return new Chart(
    chart,
    config
  );
}

function changeChart(chart, dataObject) {
  const labels = Object.keys(dataObject);
  const info = Object.keys(dataObject).map((item) => dataObject[item].length);

  chart.data.labels = labels;
  chart.data.datasets.forEach((set) => {
    set.data = info;
    return set;
  });

  chart.update();
}

function shapeDataForLineChart(array) {
  return array.reduce((collection, item) => {
    if (!collection[item.agency]) {
      collection[item.agency] = [item];
    } else {
      collection[item.agency].push(item);
    }
    return collection;
  }, {});
}

/*
Asycronous Functions
*/

// Function to get the json data from the API
async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/2qma-7ez9.json';
  const data = await fetch(url);
  const json = await data.json();
  const reply = json.filter((item) => Boolean(item.agency)).filter((item) => Boolean(item.amount));
  return reply;
}

// Main function
async function mainEvent() {
  const form = document.querySelector('.main_form');
  const submit = document.querySelector('#get-spend');
  const chartTarget = document.querySelector('#myChart');
  submit.style.display = 'block';

  const spendingData = await getData(); // waits for the data to be gathered
  const shapedData = shapeDataForLineChart(spendingData);
  const myChart = initChart(chartTarget, shapedData);

  let currentList = [];
  currentList = processSpending(spendingData);
  console.log(currentList);

  // Get spending button listener
  form.addEventListener('submit', (submitEvent) => {
    submitEvent.preventDefault();
    currentList = processSpending(spendingData);
    injectHTML(currentList);
    const localData = shapeDataForLineChart(currentList);
    changeChart(myChart, localData);
  });
}

// Runs mainEvent when HTML is loaded
document.addEventListener('DOMContentLoaded', async () => mainEvent());
