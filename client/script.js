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
      data: info
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


async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json';
  const data = await fetch(url);
  const json = await data.json();
  const reply = json.filter((item) => Boolean(item.geocoded_column_1)).filter((item) => Boolean(item.name));
  return reply;
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


async function mainEvent() {
  const pageMap = initMap();

  const form = document.querySelector('.main_form');
  const submit = document.querySelector('#get-resto');
  // const loadAnimation = document.querySelector('.lds-ellipsis');
  const restoName = document.querySelector('#resto');
  const chartTarget = document.querySelector('#myChart');
  // submit.style.display = 'none';

  initChart(chartTarget);

  const chartData = await getData();
  const shapedData = shapeDataForLineChart(chartData);
  const myChart = initChart(chartTarget, shapedData);

  if (chartData?.length > 0) {
    submit.style.display = 'block';

    loadAnimation.classList.remove('ldas-ellipsis');
    loadAnimation.classList.add('lds-ellipsis_hidden');

    let currentList = [];

    form.addEventListener('input', (event) => {
      console.log(event.target.value);
    });


  }

  const results = await fetch('/api/CrimeIncidentsPG');

  const arrayFromJson = await results.json();
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());
