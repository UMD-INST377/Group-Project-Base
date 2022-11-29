

  function initChart(chart) {
    const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

    const data = {
      label: labels,
      datasets: [{
        label: "temp",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    }
    const config = {
     type : 'line',
     data: data,
     options: {}
  }
    return new Chart(
      chart,
      config
    );
}

  async function getData() {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
  async function mainEvent() {

    const form = document.querySelector('.main_form');
    const chartTarget = doccument.querySelector('#myChart');

    initChart(chartTarget);

    doccument.getElementById('button').addEventListener("click", console.log("hello"));
  }