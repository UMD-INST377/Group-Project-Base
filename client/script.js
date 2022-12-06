function initMap() {
  console.log('initMap');
  const map = L.map('map').setView([38.9897, -76.9378], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  return map;
}

function initChart(chart, object) {
  const labels = Object.keys(object);
  const info = Object.keys(object).map((item) => object[item].length);

  const data = {
    labels: labels,
    datasets: [{
      label: 'Restaurants by Category',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45]
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  return new Chart(
    chart,
    config
  );
}

function changeChart(chart, dataObject) {
  const labels = Object.keys(dataObject);
  const info = Object.keys(dataObject).map((item) => dataObject[item].length);
  chart.data.labels = labels;
  chart.data.datasets.forEach((set) => {
    set.data = info;
    return set;
  });

  chart.update();
}

function shapeDataForLineChart(array) {
  return array.reduce((collection, item) => {
    if (!collection[item.category]) {
      collection[item.category] = [item];
    } else {
      collection[item.category].push(item);
    }
    return collection;
  }, {});
}

async function mainEvent() {
  const pageMap = initMap();

  const form = document.querySelector('.main_form'); // get your main form so you can do JS with it
  const submit = document.querySelector('#get-resto'); // get a reference to your submit button
  const chartTarget = document.querySelector('#myChart');

  const results = await fetch('/api/CrimeIncidentsPG');
  
  const arrayFromJson = await results.json();

  initChart(chartTarget);
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());
