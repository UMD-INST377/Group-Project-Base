/* eslint-disable no-console */
function makeGraph(x, y) {
  const fetching = document.getElementById('chartToDisplay');
  new Chart(fetching, {
    type: 'bar',
    data: {
      labels: x,
      datasets: [{
        label: 'Countries',
        data: y,
        borderwidth: 1
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

function getCountry(array) {
  returnCountryArray = [];
  array.forEach((element) => (returnCountryArray.push(element.Country)));
  console.log(returnCountryArray);
  return returnCountryArray;
}

function getRate(array) {
  returnRateArray = [];
  array.forEach((element) => (returnRateArray.push(element.Rate)));
  console.log(returnRateArray);
  return returnRateArray;
}

async function mainEvent() {
  const data = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const arrayBTC = await data.json();
  console.log(arrayBTC);

  xLabel = [];
  rateData = [];

  if (arrayBTC.data?.length > 0) {
    xLabel = getCountry(arrayBTC.data);
    rateData = getRate(arrayBTC.data);
  }
  makeGraph(xLabel, rateData);
}
 
document.addEventListener('DOMContentLoaded', async () => mainEvent());