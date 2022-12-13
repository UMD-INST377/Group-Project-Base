/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable max-len */

// Returns a JSON object from the 'url'
async function getData(url) {
  const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
  const json = await data.json();

  return json;
}

// Returns a list containing the value of the given 'property' for each element in the JSON
function getPropertyForAll(json, property) {
  return json.map((item) => item[property]);
}

// Get 'numOfElements' from 'list' beginning at 'start'; wrap around the list if necessary
function rotateList(list, start, numOfElements) {
  const retval = [];
  if (start > list.length - 1) {
    start = 0;
  }
  for (let i = start; i < start + numOfElements; i++) {
    retval.push(list[i]);
  }
  return retval;
}

// Sorts the object, using Selection Sort algorithm, by the object according to the given property
function sort(obj, property) {
  let smallestIndex;
  let temp;
  for (let i = 0; i < obj.length; i++) {
    smallestIndex = i;

    // Find the smallest element in obj[i... j]
    for (let j = i + 1; j < obj.length; j++) {
      if (obj[smallestIndex][property] > obj[j][property]) {
        smallestIndex = j;
      }
    }

    // Swap obj[i] and the smallest element
    temp = obj[i];
    obj[i] = obj[smallestIndex];
    obj[smallestIndex] = temp;
  }

  return obj;
}

// Display a bar chart showing the price of each coin (alphabetically ordered)
async function initCryptoDataChart() {
  const cryptocurrencyDataURL = 'https://api.coingecko.com/api/v3/coins/';
  const cryptocurrencyJson = sort(await getData(cryptocurrencyDataURL), 'name'); // get the ecosystem data, and sort it by 'name'
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

// Injects the filtered list of cryptocurrencies into the search area
function injectHTML(list) {
  const targetElement = document.querySelector('#crypto_list');
  targetElement.innerHTML = ''; // Clear the inner HTML of the list

  const listEl = document.createElement('ol');
  targetElement.appendChild(listEl);
  list.forEach((item) => {
    const el = document.createElement('li');
    el.innerText = item.name;
    listEl.appendChild(el);
  });
  console.log('fired injectHTML');
}

async function initSearchBar() {
  const targetElement = document.querySelector('#search_button');
  targetElement.addEventListener('click', async () => {
    // injectHTML(null);
    injectHTML();
  });
}

async function mainEvent() {
  const ecosystemChart = initCryptoDataChart();
  const searchBar = initSearchBar();
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());