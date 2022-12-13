/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable max-len */

async function getData(url) {
  const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
  const json = await data.json();

  return json;
}

// Returns a list containing the value of the given 'property' for each element in the JSON
function getPropertyForAll(json, property) {
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

function injectHTML(list) {
  console.log('fired injectHTML');
  const target = document.querySelector('#catagories_list');
  target.innerHTML = '';

  const listEl = document.createElement('ol');
  target.appendChild(listEl);
  list.forEach((item) => {
    const el = document.createElement('li');
    el.innerText = item.name;
    listEl.appendChild(el);
  });
  /*
    ## What to do in this function
      - Accept a list of restaurant objects
      - using a .forEach method, inject list element into your index.html for every element in the list
      - Display the name of that restaurant and what category of food it is
  */
}

// Display a bar chart showing the price of each coin (alphabetically ordered)
async function initEcosystemMarketCapChart() {
  const cryptocurrencyDataURL = 'https://api.coingecko.com/api/v3/coins/';
  const cryptocurrencyJson = await getData(cryptocurrencyDataURL); // get the ecosystem data

  const labelsList = getPropertyForAll(cryptocurrencyJson, 'name'); // extract the labels
  
  const marketDataList = getPropertyForAll(cryptocurrencyJson, 'market_data'); // extract market data list
  const currentPriceList = getPropertyForAll(marketDataList, 'current_price'); // extract the current price in multiple currencies
  const cryptoPriceList = getPropertyForAll(currentPriceList, 'usd'); // extract the current price in usd

  let start = 0; // index to start the sublist at
  let numOfElements = 10; // the number of elements we want in the sublist
  let labelSublist = rotateList(labelsList, start, numOfElements); // rotate the labels list
  let cryptoPriceSublist = rotateList(cryptoPriceList, start, numOfElements); // rotate the market cap list

  const targetElement = document.querySelector('#market-cap-chart'); // get DOM Object for chart

  // prepare the data for the chart
  const data = {
    labels: labelSublist,
    datasets: [{
      label: 'Crypto Price (USD)',
      data: cryptoPriceSublist,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ]
    }]
  };

  // configure the asesthetics of the chart
  const config = {
    options: {
      responsive: true,
      backgroundColor: '#9BD0F5',
      maintainAspectRatio: false,
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

    if (start > cryptocurrencyJson.length) {
      start = cryptocurrencyJson.length - (cryptocurrencyJson.length % 10);
      numOfElements = cryptocurrencyJson.length % 10;
      labelSublist = rotateList(labelsList, start, numOfElements);
      cryptoPriceSublist = rotateList(cryptoPriceList, start, numOfElements);

      start = -10; // start at -10 to offset increment above
    } else {
      numOfElements = 10;
      labelSublist = rotateList(labelsList, start, numOfElements);
      cryptoPriceSublist = rotateList(cryptoPriceList, start, numOfElements);
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
      const newMarketCap = cryptoPriceSublist[i];
      marketCapChart.data.datasets.forEach((dataset) => dataset.data.push(newMarketCap));
    }
    marketCapChart.update();
  });
}

async function initTrendingCryptoTable() {
  // Get the json object containing the crypto data
  const cryptocurrencyDataURL = 'https://api.coingecko.com/api/v3/coins/';
  const cryptocurrencyJson = await getData(cryptocurrencyDataURL); // get the cryptocurrency data

  // Extract the data we need from the JSON object
  const targetElement = document.querySelector('#trending-crypto-table'); // get DOM object where the table will live
  const headers = ['Name', 'ID', 'Current Price'];
  const tableData = cryptocurrencyJson.map((currency) => {
    const n = currency.name; // currency name
    const s = currency.symbol; // currency id
    const c = currency.market_data.current_price.usd; // currency price
    const data = [n, s, c];
    return data;
  });

  // Initialize the chart
  const table = new Handsontable(
    targetElement, {
      licenseKey: 'non-commercial-and-evaluation',
      data: tableData,
      colHeaders: headers,
      width: 450,
      height: 300
    }
  );

  const prevThreeButton = document.querySelector('#prev-three');
  prevThreeButton.addEventListener('click', async (submitEvent) => { // display the next three cryptocurrencies
    console.log('prev3');
  });

  const nextThreeButton = document.querySelector('#next-three');
  nextThreeButton.addEventListener('click', async (submitEvent) => { // display the previous three cryptocurrencies
    console.log('next3');
  });
  return table;
}

async function initFallingCryptoTable() {
  // Get the json object containing the crypto data
  const cryptocurrencyDataURL = 'https://api.coingecko.com/api/v3/coins/';
  const cryptocurrencyJson = await getData(cryptocurrencyDataURL); // get the cryptocurrency data

  // Extract the data we need from the JSON object
  const targetElement = document.querySelector('#price-percentage-falling-table'); // get DOM object where the table will live
  const headers = ['Name', 'ID', '% Change'];
  const tableData = cryptocurrencyJson.map((currency) => {
    const n = currency.name; // currency name
    const i = currency.id; // currency id

    const currPrice = currency.market_data.current_price.usd;
    const priceChange = currency.market_data.price_change_24h_in_currency.usd;
    const c = priceChange / (currPrice - priceChange); // percentage price change
    const data = [n, i, c];
    return data;
  });

  // Initialize the chart
  const table = new Handsontable(
    targetElement, {
      licenseKey: 'non-commercial-and-evaluation',
      data: tableData,
      colHeaders: headers,
      width: 550,
      height: 300
    }
  );

  const prevThreeButton = document.querySelector('#prev-three');
  prevThreeButton.addEventListener('click', async (submitEvent) => { // display the next three cryptocurrencies
    console.log('prev3');
  });

  const nextThreeButton = document.querySelector('#next-three');
  nextThreeButton.addEventListener('click', async (submitEvent) => { // display the previous three cryptocurrencies
    console.log('next3');
  });

  return table;
}

async function initRisingCryptoTable() {
  // Get the json object containing the crypto data
  const cryptocurrencyDataURL = 'https://api.coingecko.com/api/v3/coins/';
  const cryptocurrencyJson = await getData(cryptocurrencyDataURL); // get the cryptocurrency data

  // Extract the data we need from the JSON object
  const targetElement = document.querySelector('#price-percentage-rising-table'); // get DOM object where the table will live
  const headers = ['Name', 'ID', '% Change'];
  const tableData = cryptocurrencyJson.map((currency) => {
    const n = currency.name; // currency name
    const i = currency.id; // currency id

    const currPrice = currency.market_data.current_price.usd;
    const priceChange = currency.market_data.price_change_24h_in_currency.usd;
    const c = priceChange / (currPrice - priceChange); // percentage price change
    const data = [n, i, c];
    return data;
  });

  // Initialize the chart
  const table = new Handsontable(
    targetElement, {
      licenseKey: 'non-commercial-and-evaluation',
      data: tableData,
      colHeaders: headers,
      width: 550,
      height: 300
    }
  );

  const prevThreeButton = document.querySelector('#prev-three');
  prevThreeButton.addEventListener('click', async (submitEvent) => { // display the next three cryptocurrencies
    console.log('prev3');
  });

  const nextThreeButton = document.querySelector('#next-three');
  nextThreeButton.addEventListener('click', async (submitEvent) => { // display the previous three cryptocurrencies
    console.log('next3');
  });
  return table;
}

async function initSearchBar() {
  const targetElement = document.querySelector('#search_button');
  targetElement.addEventListener('click', async () => {
    console.log('search crypto');
  });
}

async function mainEvent() {
  const ecosystemChart = initEcosystemMarketCapChart();
  const trendingCryptoTable = initTrendingCryptoTable();
  const fallingCryptoTable = initFallingCryptoTable();
  const risingCryptoTable = initRisingCryptoTable();
  const searchBar = initSearchBar();
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());