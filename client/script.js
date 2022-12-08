function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  // eslint-disable-next-line max-len
  return Math.floor(Math.random() * (newMax - newMin + 1) + newMin); // The maximum is inclusive and the minimum is inclusive
}

function initMap() {
  console.log('initMap');
  const map = L.map('map').setView([38.9897, -76.9378], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  return map;
}

function markerPlace(array, map) {
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      layer.remove();
    }
  });

  array.forEach((item, index) => {
    const {coordinates} = item.geocoded_column_1;
    L.marker([coordinates[1], coordinates[0]]).addTo(map);
    if (index === 0) {
      map.setView([coordinates[1], coordinates[0]], 10);
    }
  });
}

function initChart(chart, object) {
  const labels = Object.keys(object);
  const info = Object.keys(object).map((item) => object[item].length);

  const data = {
    labels: labels,
    datasets: [{
      label: 'Crimes by Category',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: info
    }]
  }; 
  console.log('initChart');
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  return new Chart(
    chart,
    config
  );
}

function processCrime(list) {
  console.log('fired processCrime');
  const range = [...Array(15).keys()];
  const newArray = range.map((item) => {
    const index = getRandomIntInclusive(0, list.length);
    return list[index];
  });
  return newArray;
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

async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json';
  const data = await fetch(url);
  const json = await data.json();
  // eslint-disable-next-line max-len
  const reply = json.filter((item) => Boolean(item.geocoded_column_1)).filter((item) => Boolean(item.name));
  return reply;
}

async function mainEvent() {
  const pageMap = initMap();

  const form = document.querySelector('.main_form');
  const submit = document.querySelector('#get-resto');
  const loadAnimation = document.querySelector('.lds-ellipsis');
  // const restoName = document.querySelector('#resto');
  const chartTarget = document.querySelector('#myChart');
  // submit.style.display = 'none';

  const results = await fetch('https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json');
  const arrayFromJson = await results.json();
  const shapedData = shapeDataForLineChart(arrayFromJson);
  const myChart = initChart(chartTarget, shapedData);

  if (arrayFromJson?.length > 0) {
    submit.style.display = 'block';
    console.log('hii');
    loadAnimation.classList.remove('lds-ellipsis');
    loadAnimation.classList.add('lds-ellipsis_hidden');

    let currentList = [];

    form.addEventListener('submit', (submitEvent) => {
      submitEvent.preventDefault();
      currentList = processCrime(arrayFromJson.data);
      markerPlace(currentList, pageMap);
      changeChart();
    });
  }
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());
