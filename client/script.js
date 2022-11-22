function initChart(targetElement, dataObject) {
    const labels = Object.keys(dataObject);
    const info = Object.keys(dataObject).map((item) => dataObject[item].length);
  
    const data = {
      labels: labels,
      datasets: [{
        label: 'Restaurants By Category',
        backgroundColor: 'rgb(255, 60, 255)',
        borderColor: 'rgb(255, 255, 255)',
        borderWidth: '3',
        data: info
      }]
    };
    const config = {
      type: 'bar',
      data: data,
      options: {}
    };
  
    return new Chart(
      targetElement,
      config
    );
  }

  async function getData() {
    const url = 'https://rest.coinapi.io/v1/assets/BTC'; // remote URL! you can test it in your browser
    apikey = "36B44DF9-D56A-4A0D-BA15-997D94599D7B"
    headers = {'X-CoinAPI-Key' : apikey}
    response = (url, headers=headers)
    const data = await fetch(response); // We're using a library that mimics a browser 'fetch' for simplicity
    const json = await data.json(); // the data isn't json until we access it using dot notation
    const reply = json.filter((item) => Boolean(item.geocoded_column_1)).filter((item) => Boolean(item.name));
  
    return reply;
  }

async function mainEvent() {
const chartData = await getData();
console.log("Hello world!"); 

}
