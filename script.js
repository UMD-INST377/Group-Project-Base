function initChart(chart) {
  // const ctx = document.getElementById('myChart');

  return new Chart(chart, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function processData(array) {
  
}

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '79286f9b48msh455d85ddc2d4316p18f1ccjsnabaae7ed74b1',
    'X-RapidAPI-Host': 'genius.p.rapidapi.com'
  }
};

async function getData() {
  const url = 'https://genius.p.rapidapi.com/search?q=Kendrick%20Lamar';
  const data = await fetch(url, options);
  const json = await data.json();
  const reply = json.filter()
  return json;
}
async function mainEvent() {
  console.log('Script loaded');
  const data = await getData();
  console.log('Data recived', data);
  const chartTarget = document.querySelector('#myChart');

  const myChart = initChart(chartTarget);
  const chartData = await getData();
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());
