/* eslint-disable max-len */
/* eslint-disable no-console */
// const { isPrimitive } = require("sequelize/types/utils");

function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + newMin); // The maximum is inclusive and the minimum is inclusive
}

function initChart(chart, dataObject) {
  // const ctx = document.getElementById('myChart');
  const info = Object.keys(dataObject).map((item) => dataObject[item].length);
  const labels = Object.keys(dataObject);
  return new Chart(chart, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Spending Information for FY 2021 by Agency',
        data: info,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function injectHTML(list) {
  console.log('fired injectHTML');
  const target = document.querySelector('#restaurant_list');
  target.innerHTML = '';

  const listEl = document.createElement('ol');
  target.appendChild(listEl);
  list.forEach((item) => {
    const el = document.createElement('li');
    el.innerText = item.amount;
    listEl.appendChild(el);
  });
}

function processRestaurants(list) {
  console.log('fired restaurants list');
  const range = [...Array(15).keys()];
  const newArray = range.map((item) => {
    const index = getRandomIntInclusive(0, list.length);
    return list[index];
  });
  return newArray;
}

function filterList(array, filterInputValue) {
  const newArray = array.filter((item) => {
    const lowerCaseName = item.amount.toLowerCase();
    const lowerCaseQuery = filterInputValue.toLowerCase();
    return lowerCaseName.includes(lowerCaseQuery);
  });
  return newArray;
}

function shapeDataForChart(array) {
  console.log('Data Processed');
  return array.reduce((collection, item) => {
    if (!collection[item.agency]) {
      collection[item.agency] = [item];
    } else {
      collection[item.agency].push(item);
    }
    return collection;
  }, {});
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

async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/rh7w-bmhm.json';
  const data = await fetch(url);
  const json = await data.json();
  return json;
}

async function mainEvent() {
  const form = document.querySelector('.main_form');
  const submit = document.querySelector('#get-data');
  const loadAnimtion = document.querySelector('.lds-ellipsis');
  submit.style.display = 'none';

  console.log('Script loaded');
  const data = await getData();
  console.log('Data recived', data);
  // console.table(getData().data);
  const chartTarget = document.querySelector('#myChart');

  const chartData = await getData();
  const processedData = shapeDataForChart(chartData);
  const myChart = initChart(chartTarget, processedData);

  if (data.length > 0) {
    submit.style.display = 'block';

    loadAnimtion.classList.remove('lds-ellipsis');
    loadAnimtion.classList.add('lds-ellipsis_hidden');

    let currentList = [];

    form.addEventListener('input', (event) => {
      console.log('input', event.target.value);
      const newFilterList = filterList(currentList, event.target.value);
      injectHTML(newFilterList);
    });

    form.addEventListener('submit', async (submitEvent) => {
      submitEvent.preventDefault();
      console.log('form submitted');

      currentList = processRestaurants(data);
      console.log(currentList);

      injectHTML(currentList);
      const localData = shapeDataForChart(chartData);
      changeChart(myChart, localData);

      // const formData = new FormData(submitEvent.target);
      // const formProps = Object.fromEntries(formData);

      // const fetchQuery = new URLSearchParams(formProps);
      // const results = await fetch(`https://data.princegeorgescountymd.gov/resource/rh7w-bmhm.json${fetchQuery}`);

      // const arrayFromJson = await results.json();
      // console.table(arrayFromJson.data);
    });
  }
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());
