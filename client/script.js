/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable max-len */

async function getData(url) {
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

async function initChart() {
  /*
  targetElement: The DOM object where we want to insert the visualization
  dataObject: The Object containing the information in a one-to-one key-value form
  returns Chart: A new Chart object that's configured with the data in dataObject
  */
  const ecosystemDataURL = 'https://api.coingecko.com/api/v3/coins/categories?order=name_asc';
  const ecosystemJson = await getData(ecosystemDataURL); // get the ecosystem data

  const labelsList = getProperty(ecosystemJson, 'name'); // extract the labels
  const marketCapList = getProperty(ecosystemJson, 'market_cap'); // extract the market cap data

  let start = 0; // index to start the sublist at
  let numOfElements = 10; // the number of elements we want in the sublist
  let labelSublist = rotateList(labelsList, start, numOfElements); // rotate the labels list
  let marketCapSublist = rotateList(marketCapList, start, numOfElements); // rotate the market cap list

  const targetElement = document.querySelector('#market-cap-chart'); // get DOM Object for chart

  // prepare the data for the chart
  const data = {
    labels: labelSublist,
    datasets: [{
      label: 'Eco System Market Cap',
      data: marketCapSublist
    }]
  };

  // configure the asesthetics of the chart
  const config = {
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  const marketCapChart = new Chart(
    targetElement, {
      type: 'bar',
      data: data,
      config
    }
  );

  const updateChartButton = document.querySelector('#update-chart-button'); // get DOM object for the update chart button
  updateChartButton.addEventListener('click', async (submitEvent) => { // add event listener to the button
    submitEvent.preventDefault(); // stop the event from causing a redirect

    // increase the starting index
    start += 10;

    if (start > ecosystemJson.length) {
      start = ecosystemJson.length - (ecosystemJson.length % 10);
      numOfElements = ecosystemJson.length % 10;
      labelSublist = rotateList(labelsList, start, numOfElements);
      marketCapSublist = rotateList(marketCapList, start, numOfElements);

      start = -10; // start at -10 to offset increment above
    } else {
      numOfElements = 10;
      labelSublist = rotateList(labelsList, start, numOfElements);
      marketCapSublist = rotateList(marketCapList, start, numOfElements);
    }

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

async function initTable() {
  // Get the json object containing the crypto data
  const cryptocurrencyDataURL = 'https://api.coingecko.com/api/v3/coins/';
  const cryptocurrencyJson = await getData(cryptocurrencyDataURL); // get the cryptocurrency data

  // Extract the data we need from the JSON object
  const targetElement = document.querySelector('#trending-crypto-table'); // get DOM object where the table will live
  const headers = ['Name', 'ID', 'Current Price'];
  const tableData = cryptocurrencyJson.map((currency) => {
    const n = currency.name; // currency name
    const i = currency.id; // currency id
    const c = currency.market_data.current_price.usd; // currency price
    const data = [n, i, c];
    return data;
  });

  const table = new Handsontable(
    targetElement, {
      tableData,
      colHeaders: headers,
      columns: [
        {data: 1, type: 'text'},
        {data: 2, type: 'text'},
        {data: 3, type: 'numeric'}
      ],
      licenseKey: 'non-commercial-and-evaluation'
    }
  );

  return table;
}

async function mainEvent() {
  const ecosystemChart = initChart();
  const trendingCryptoTable = initTable();
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());