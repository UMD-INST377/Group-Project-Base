/* eslint-disable no-console */
/* eslint-disable max-len */

async function initChart(targetElement, jsonObject) {
  /*
  targetElement: The DOM object where we want to insert the visualization
  dataObject: The Object containing the information in a one-to-one key-value form

  returns Chart: A new Chart object that's configured with the data in dataObject
  */
  const currencies = Object.keys(jsonObject); // Get the indexes of the cryptocurrency
  console.log(currencies)

  const currencyDetails = currencies.map((item) => jsonObject[item]); // Get the cryptocurrency data
  console.log(currencyDetails)

  const currencyNames = currencies.map((currency) => { // Get the currency names
    const info = currencyDetails[currency];
    return info.name;
  });
  console.log(currencyNames)

  const marketCapData = currencies.map((currency) => { // Get the market cap for each cryptocurrency
    const info = currencyDetails[currency];
    return info.market_cap;
  });

  const data = {
    labels: currencyNames,
    datasets: [{
      label: 'Market Cap',
      data: marketCapData
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

async function getData() {
  /* Get the data asynchronously */
  const url = 'https://api.coingecko.com/api/v3/coins/categories?order=name_asc'; // remote URL! you can test it in your browser
  const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
  const json = await data.json();
  console.log(json)

  return json;
}

async function mainEvent() {
  const data = await getData(); // get the json data
  const chartTarget = document.querySelector('#myChart');
  initChart(chartTarget, data);
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());