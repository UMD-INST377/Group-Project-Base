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

function getProperty(json, property) {
  return json.map((item) => item[property]);
}

function rotateList(array, start, numOfElements) {
  const retval = [];
  if (start > array.length - 1) {
    start = 0;
  }
  for (let i = start; i < start + numOfElements; i++) {
    retval.push(array[i]);
  }
  return retval;
}

function initChart(initLabels, initMarketCap, targetElement) {
  /*
  targetElement: The DOM object where we want to insert the visualization
  dataObject: The Object containing the information in a one-to-one key-value form

  returns Chart: A new Chart object that's configured with the data in dataObject
  */

  const data = {
    labels: initLabels,
    datasets: [{
      label: 'Market Cap',
      data: initMarketCap
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

async function mainEvent() {
  const json = await getData(); // get the json data
  const labelsList = getProperty(json, 'name'); // extract the labels
  const marketCapList = getProperty(json, 'market_cap'); // extract the market cap data

  // Visualizations
  let start = 0; // where to start
  let numOfElements = 10;
  let labelSublist = rotateList(labelsList, start, numOfElements); // rotate the labels list
  let marketCapSublist = rotateList(marketCapList, start, numOfElements); // rotate the market capital list

  const targetElement = document.querySelector('#market-cap-chart'); // get DOM Object for chart
  const marketCapChart = initChart(labelSublist, marketCapSublist, targetElement); // initialize the chart

  const updateChartButton = document.querySelector('#update-chart-button'); // get DOM object for the update chart button
  updateChartButton.addEventListener('click', async (submitEvent) => { // add event listener to the button
    submitEvent.preventDefault(); // stop the event from causing a redirect

    // increase the starting index
    start += 10;

    if (start > json.length) {
      start = json.length - (json.length % 10);
      numOfElements = json.length % 10;
      labelSublist = rotateList(labelsList, start, numOfElements);
      marketCapSublist = rotateList(marketCapList, start, numOfElements);

      start = 0;
    } else {
      numOfElements = 10;
      labelSublist = rotateList(labelsList, start, numOfElements);
      marketCapSublist = rotateList(marketCapList, start, numOfElements);
    }

    console.log(marketCapChart.data.labels);
    marketCapChart.data.datasets.forEach((dataset) => console.log(dataset.data));

    // Remove old data from chart
    while (marketCapChart.data.labels.length > 0) {
      marketCapChart.data.labels.pop();
      marketCapChart.data.datasets.forEach((dataset) => dataset.data.pop());
    }

    // Add new data to chart
    for (let i = 0; i < numOfElements; i++) {
      const newLabel = labelSublist[i];
      marketCapChart.data.labels.push(newLabel);
      const newMarketCap = marketCapSublist[i];
      marketCapChart.data.datasets.forEach((dataset) => dataset.data.push(newMarketCap));
    }
    marketCapChart.update();
  });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());