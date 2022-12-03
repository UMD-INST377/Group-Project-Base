/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable quotes */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import { Chart } from "chart.js/auto";
import fs from 'fs';

async function getData() {
  const url = 'https://api.coingecko.com/api/v3/coins/categories?order=name_asc';
  const data = await fetch(url);
  const json = await data.json();

  return json;
}

async function initChart(targetElement, jsonObject) {
  /*
  targetElement: The DOM object where we want to insert the visualization
  dataObject: The Object containing the information in a one-to-one key-value form

  returns Chart: A new Chart object that's configured with the data in dataObject
  */
  const labels = Object.keys(jsonObject); // Get the names of the cryptocurrency
  const info = Object.keys(jsonObject).map((item) => jsonObject[item]); // Get the cryptocurrency data
  const market_cap_data = info.map((market_cap) => info[market_cap]); // Get the market cap for each cryptocurrency

  const data = {
    labels: labels,
    datasets: [{
      label: 'Market Cap',
      data: market_cap_data
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
      config: config
    }

  );
}

async function mainEvent() {
  let data = await getData(); // get the json data
  let chartTarget = document.querySelector('#myChart');
  // initChart(target, data);

  fs.writeFile('crypto-data.txt', data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('success!');
    }
  });
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());