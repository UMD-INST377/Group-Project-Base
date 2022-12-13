/* eslint-disable no-new-wrappers */
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
  console.log('markerPlace');
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      layer.remove();
    }
  });

  array.forEach((item, index) => {
    const lat = new Number(item.latitude);
    const lng = new Number(item.longitude);
    const newLatLng = L.latLng(lat, lng);

    L.marker(newLatLng).addTo(map);
    if (index === 0) {
      map.setView(newLatLng, 10);
    }
  });
}

function initChart(chart, object) {
  const labels = Object.keys(object);
  const info = Object.keys(object).map((item) => object[item].length);

  const data = {
    labels: labels,
    datasets: [{
      label: 'Crime By Type',
      barPercentage: 1,
      data: info,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
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
    }
  };

  return new Chart(
    chart,
    config
  );
}

function processCrime(list, data) {
  console.log('fired processCrime');
  const newArray = [];
  list.forEach((item, index) => {
    if (Number(item.date.substring(8, 10)) === data) {
      newArray.push(item);
    }
  });
  return newArray;
}

function shapeDataForBarChart(array) {
  console.log('fired shapeData');
  return array.reduce((collection, item) => {
    if (!collection[item.clearance_code_inc_type]) {
      collection[item.clearance_code_inc_type] = [item];
    } else {
      collection[item.clearance_code_inc_type].push(item);
    }
    return collection;
  }, {});
}

function changeChart(chart, dataObject) {
  console.log('fired changeChart');
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
  // const reply = json.filter((item) => Boolean(item.geocoded_column_1)).filter((item) => Boolean(item.name));
  return json;
}

async function mainEvent() {
  const pageMap = initMap();

  const form = document.querySelector('.main_form');
  const submit = document.querySelector('#get-day');
  const loadAnimation = document.querySelector('.lds-ellipsis');
  const dayNum = document.querySelector('#day');
  const chartTarget = document.querySelector('#myChart');
  submit.style.display = 'none';

  const arrayFromJson = await getData();
  const shapedData = shapeDataForBarChart(arrayFromJson);
  const myChart = initChart(chartTarget, shapedData);

  if (arrayFromJson?.length > 0) {
    submit.style.display = 'block';

    loadAnimation.classList.remove('lds-ellipsis');
    loadAnimation.classList.add('lds-ellipsis_hidden');

    let currentList = [];

    form.addEventListener('submit', (submitEvent) => {
      submitEvent.preventDefault();
      let localData = [];
      if (dayNum.value.length !== 0) {
        data = Number(dayNum.value);
        currentList = processCrime(arrayFromJson, data);
        localData = shapeDataForBarChart(currentList);
      } else {
        currentList = arrayFromJson;
        localData = shapeDataForBarChart(arrayFromJson);
      }
      changeChart(myChart, localData);
      markerPlace(currentList, pageMap);
    });
  }
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());
