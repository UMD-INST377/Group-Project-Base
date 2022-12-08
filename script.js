// const { isPrimitive } = require("sequelize/types/utils");

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

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '79286f9b48msh455d85ddc2d4316p18f1ccjsnabaae7ed74b1',
//     'X-RapidAPI-Host': 'genius.p.rapidapi.com'
//   }
// };

async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/rh7w-bmhm.json';
  const data = await fetch(url);
  const json = await data.json();
  return json;
}
async function mainEvent() {
  console.log('Script loaded');
  const data = await getData();
  console.log('Data recived', data);
  const chartTarget = document.querySelector('#myChart');

  const chartData = await getData();
  const processedData = shapeDataForChart(chartData);
  console.log(processedData);
  const myChart = initChart(chartTarget, processedData);
  changeChart(myChart, processedData);
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());
