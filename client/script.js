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
  return json.map((item) => item[property]);
}

async function rotateList(array, start, numOfElements) {
  const retval = [];
  if (start > array.length - 1) {
    start = 0;
  }
  for (let i = start; i < start + numOfElements; i++) {
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
  const json = await getData(); // get the json data
  const labelsList = await getProperty(json, 'name'); // extract the labels
  const marketCapList = await getProperty(json, 'market_cap'); // extract the market cap data

  // Visualizations
  let start = 10; // where to start
  let marketCapSublist = await rotateList(labelsList, start, 10); // rotate the market capital list
  const labelSublist = await rotateList(labelsList, start, 10); // rotate the labels list

  const targetElement = document.querySelector('#market_cap_chart'); // get DOM Object for chart
  const marketCapChart = initChart(marketCapSublist, marketCapList, targetElement); // create the chart

  const updateChartForm = document.querySelector('#update-chart-button'); // get DOM object for the update chart button
  updateChartForm.addEventListener('submit', async (submitEvent) => { // add event listener to the button
    submitEvent.preventDefault();
    console.log('execute!');
    // If our starting position is longer
    if (start > json.length) {
      start = json.length - (json.length % 10);
      marketCapSublist = await rotateList(marketCapList, start, json.length % 10);
    } else {
      start += 10;
      marketCapSublist = await rotateList(marketCapList, start, 10);
    }
    chart.data.labels = labelSublist;
    chart.data.datasets.forEach((dataset) => {
      dataset.data = marketCapSublist;
    });
  });
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());