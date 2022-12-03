/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable max-len */

async function getData() {
  const url = 'https://api.coingecko.com/api/v3/coins/categories?order=name_asc'; // remote URL! you can test it in your browser
  const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
  const json = await data.json();

  return json;
}

async function getProperty(json, property) {
  return json.forEach((item) => item[property]);
}

async function rotateList(array, start, numOfElements) {
  const retval = [];
  if (start > array.length - 1) {
    start = 0;
  }
  for (let i = start + numOfElements; i >= start; i--) {
    retval.push(array[i]);
  }
  return retval;
}

async function initChart(initLabels, initMarketCapData, targetElement) {
  /*
  targetElement: The DOM object where we want to insert the visualization
  dataObject: The Object containing the information in a one-to-one key-value form

  returns Chart: A new Chart object that's configured with the data in dataObject
  */

  const data = {
    labels: initLabels,
    datasets: [{
      label: 'Market Cap',
      data: initMarketCapData
    }]
  };

  const config = {
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  return new Chart(
    targetElement, {
      type: 'bar',
      data: data,
      config
    }
  );
}

function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
  });
  chart.update();
}

function removeData(chart) {
  chart.data.labels.pop();
  chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
  });
  chart.update();
}

async function mainEvent() {
  const data = getData();
  const json = await data.json(); // get the json data
  const labels = getProperty(json, 'name'); // extract the labels
  const marketCap = getProperty(json, 'market_cap'); // extract the market cap data

  // Visualizations
  let start = 10; // stores the index of the last element in the sublist
  let marketCapitalSublist = rotateList(labels, start, 10); // rotate the market capital list
  let labelSublist = rotateList(labels, start, 10); // rotate the labels list
  
  const targetElement = document.querySelector('#market_cap_chart'); // get DOM Object for chart
  const marketCapChart = initChart(labels, marketCap, targetElement); // create the chart
  const updateChartButton = document.querySelector('#update-chart-button'); // get DOM object for the update chart button

  let start = 10; // where to start
  updateChartButton.addEventListener('submit', async () => { // add event listener to the button
    
  });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());