/* eslint-disable max-len */
/* eslint-disable no-console */

function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + newMin); // The maximum is inclusive and the minimum is inclusive
}

function shapeInfoForChart(array) {
  const completeArrayOfAmounts = array.map((subArray) => subArray
    .filter((item) => item.amount)
    .map((item) => item.amount));
  console.log(completeArrayOfAmounts);
  const completeArrayOfSums = completeArrayOfAmounts.map((subArray) => subArray
    .reduce((sum, current) => Number(sum) + Number(current), 0));
  console.log(completeArrayOfSums);
  return completeArrayOfSums;
}

function initChart(chart, dataObject) {
  const valuesArray = Object.values(dataObject);
  const info = shapeInfoForChart(valuesArray);
  const labels = Object.keys(dataObject);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: info,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(255, 128, 0)',
          'rgb(153 ,255, 153)',
          'rgb(153, 51, 255)',
          'rgb(153, 0, 76)',
          'rgb(0, 0, 153)',
          'rgb(153, 0, 153)',
          'rgb(64, 64, 64)'
        ]
      }
    ]
  };

  const config = {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Spending Information for FY 2021 by Agency'
        }
      }
    }
  };

  return new Chart(
    chart,
    config
  );
}

function injectHTML(list) {
  console.log('fired injectHTML');
  const target = document.querySelector('#restaurant_list');
  target.innerHTML = '';

  const listEl = document.createElement('ol');
  target.appendChild(listEl);
  listReverse = list.reverse();
  listReverse.forEach((item) => {
    const el = document.createElement('li');
    el.innerText = item.agency;
    listEl.appendChild(el);
  });
}

function processRestaurants(list) {
  console.log('fired restaurants list');
  const range = [...Array(10).keys()];
  const newArray = range.map((item) => {
    const index = getRandomIntInclusive(0, list.length);
    return list[index];
  });
  return newArray;
}

function filterList(array, filterInputValue) {
  const newArray = array.filter((item) => {
    const lowerCaseName = item.agency.toLowerCase();
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
  const valuesArray = Object.values(dataObject);
  const info = shapeInfoForChart(valuesArray);

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
  const chartTarget = document.querySelector('#myChart');

  const chartData = await getData();
  const processedData = shapeDataForChart(chartData);
  console.log(processedData);
  const myChart = initChart(chartTarget, processedData);

  if (data.length > 0) {
    let currentList = [];

    submit.style.display = 'block';

    loadAnimtion.classList.remove('lds-ellipsis');
    loadAnimtion.classList.add('lds-ellipsis_hidden');

    form.addEventListener('input', (event) => {
      console.log('input', event.target.value);
      const newFilterList = filterList(currentList, event.target.value);
      injectHTML(newFilterList);
      const localData = shapeDataForChart(newFilterList);
      changeChart(myChart, localData);
    });

    form.addEventListener('submit', async (submitEvent) => {
      submitEvent.preventDefault();
      console.log('form submitted');

      currentList = processRestaurants(data);
      console.log(currentList);

      injectHTML(currentList.sort((a, b) => a.amount - b.amount));
      const localData = shapeDataForChart(currentList);
      changeChart(myChart, localData);
    });
  }
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());