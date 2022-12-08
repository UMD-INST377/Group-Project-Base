// const { isPrimitive } = require("sequelize/types/utils");

function initChart(chart) {
  // const ctx = document.getElementById('myChart');

  return new Chart(chart, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
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

function processData(array) {
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

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '79286f9b48msh455d85ddc2d4316p18f1ccjsnabaae7ed74b1',
//     'X-RapidAPI-Host': 'genius.p.rapidapi.com'
//   }
// };

async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/uh6s-izyj.json';
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
  const processedData = processData(chartData);
  console.log(processedData);
  const myChart = initChart(chartTarget, processedData);
  //initChart(chartTarget);
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());
