
// Returns a JSON object from the 'url'
async function getData(url) {
  const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
  const json = await data.json();

  return json;
}

// Returns a list containing the value of the given 'property' for each element in the JSON
function getPropertyForAll(json, property) {
  data = json.map((item) => item[property]);
  return data;
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
  const cryptocurrencyDataURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true';
  const cryptocurrencyJson = sort(await getData(cryptocurrencyDataURL), 'max_supply'); // get a 250 long list of coins and their 7 day change in price

  const Coin_Names = await getPropertyForAll(cryptocurrencyJson, 'name'); // extract the labels
  console.log(Coin_Names)

  const Coin_History = await getPropertyForAll(cryptocurrencyJson, 'sparkline_in_7d'); // extract nested array
  console.log(Coin_History)

  const History_Price = await getPropertyForAll(Coin_History, 'price'); // extract 7 days worth of price changes in array
  console.log(History_Price)

  let start = 0; // index to start the sublist at
  let numOfElements = 10; // the number of elements we want in the sublist
  let labelSublist = rotateList(Coin_Names, start, numOfElements); // rotate the labels list
  console.log(labelSublist)
  let cryptoPriceSublist = rotateList(History_Price, start, numOfElements); // rotate the market cap list
  

  const targetElement = document.querySelector('#market-cap-chart'); // get DOM Object for chart

  // prepare the data for the chart

  // to not cluster the graph, the "" are skipped along the x-axis
  const labels = (["DAY1", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "DAY3", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "DAY5", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "TODAY", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);
  
  const data = {
    labels: labels,
    datasets: [
      {
        label: labelSublist[0],
        data: cryptoPriceSublist[0],
        borderColor: "#f79205",
        backgroundColor: "#f79205",
        yAxisID: 'y',
      },
      {
        label: labelSublist[1],
        data: cryptoPriceSublist[1],
        borderColor: "#00fc00",
        backgroundColor: "#00fc00",
        yAxisID: 'y',
      },
      {
        label: labelSublist[2],
        data: cryptoPriceSublist[2],
        borderColor: "#0291f7",
        backgroundColor: "#0291f7",
        yAxisID: 'y',
      },
      {
        label: labelSublist[3],
        data: cryptoPriceSublist[3],
        borderColor: "#f70202",
        backgroundColor: "#f70202",
        yAxisID: 'y',
      },
      {
        label: labelSublist[4],
        data: cryptoPriceSublist[4],
        borderColor: "#f20aee",
        backgroundColor: "#f20aee",
        yAxisID: 'y',
      }
    ]
  };

  // configure the asesthetics of the chart
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Line Chart - Multi Axis'
        }
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
  
          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      }
    },
  };

  const marketCapChart = new Chart(
    targetElement, {
      type: 'line',
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
      labelSublist = rotateList(Coin_Names, start, numOfElements);
      cryptoPriceSublist = rotateList(History_Price, start, numOfElements);

      start = -10; // start at -10 to offset increment above
    } else {
      numOfElements = 10;
      labelSublist = rotateList(Coin_Names, start, numOfElements);
      cryptoPriceSublist = rotateList(History_Price, start, numOfElements);
    }

    // Remove old data from chart
    while (marketCapChart.data.datasets.length > 0) {
      marketCapChart.data.labels.pop();
      marketCapChart.data.datasets.pop();
    }

    marketCapChart.data.datasets.push(
      {
        label: labelSublist[0],
        data: cryptoPriceSublist[0],
        borderColor: "#f79205",
        backgroundColor: "#f79205",
        yAxisID: 'y',
      },
      {
        label: labelSublist[1],
        data: cryptoPriceSublist[1],
        borderColor: "#00fc00",
        backgroundColor: "#00fc00",
        yAxisID: 'y',
      },
      {
        label: labelSublist[2],
        data: cryptoPriceSublist[2],
        borderColor: "#0291f7",
        backgroundColor: "#0291f7",
        yAxisID: 'y',
      },
      {
        label: labelSublist[3],
        data: cryptoPriceSublist[3],
        borderColor: "#f70202",
        backgroundColor: "#f70202",
        yAxisID: 'y',
      },
      {
        label: labelSublist[4],
        data: cryptoPriceSublist[4],
        borderColor: "#f20aee",
        backgroundColor: "#f20aee",
        yAxisID: 'y',
      });

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
/*
async function initSearchBar() {
  const form = document.querySelector('.search_form');
  form.addEventListener('input', (event) => {
    event.preventDefault();
    console.log(event.target);
  });
}
*/

async function mainEvent() {
  const ecosystemChart = initCryptoDataChart();
  /*const searchBar = initSearchBar();*/
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());