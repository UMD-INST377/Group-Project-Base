// Returns a JSON object from the 'url'
async function getData(url) {
  const data = await fetch(url);
  const json = await data.json();

  return json;
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
  });

  const nextThreeButton = document.querySelector('#next-three');
  nextThreeButton.addEventListener('click', async (submitEvent) => { // display the previous three cryptocurrencies
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
  });

  const nextThreeButton = document.querySelector('#next-three');
  nextThreeButton.addEventListener('click', async (submitEvent) => { // display the previous three cryptocurrencies
  });

  return table;
}

async function mainEvent() {
  const trendingCryptoTable = initTrendingCryptoTable();
  const fallingCryptoTable = initFallingCryptoTable();
  const searchBar = initSearchBar();
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());