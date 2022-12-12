/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable max-len */

function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + newMin); // The maximum is inclusive and the minimum is inclusive
}

function injectHTML(list) {
  console.log('fired injectHTML');
  const target = document.querySelector('#crime_list');
  target.innerHTML = '';

  const listEl = document.createElement('ol');
  target.appendChild(listEl);

  list.forEach((item) => {
    const el = document.createElement('li');
    el.innerText = item.clearance_code_inc_type;
    listEl.appendChild(el);
  });
}

function processRestaurants(list) {
  console.log('fired crime list');
  const range = [...Array(15).keys()];
  const newArray = range.map((item) => {
    const index = getRandomIntInclusive(0, list.length);
    return list[index];
  });
  return newArray;
}

function filterList(array, filterInputValue) {
  return newArray = array.filter((item) => {
    if (!item.clearance_code_inc_type) { return; }
    const lowerCaseName = item.clearance_code_inc_type.toLowerCase();
    const lowerCaseQuery = filterInputValue.toLowerCase();
    return lowerCaseName.includes(lowerCaseQuery);
  });
}

function initMap() {
  console.log('initMap');
  const map = L.map('map').setView([38.7849, -76.8721], 13);
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
    L.marker([item.location.latitude, item.location.longitude], {alt: item.street_address}).addTo(map).bindPopup(item.street_address);
    if (index === 0) {
      map.setView([item.location.latitude, item.location.longitude], 10);
    }
  });
}

function initChart(chart, object) {
  const labels = Object.keys(object);

  const info = labels.map((item) => object[item].length);

  const data = {
    labels: labels,
    datasets: [{
      label: 'Different type of Crime',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      data: info
    }]
  };

  const config = {
    type: 'bar',
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

  console.log('Newdata', labels, info);

  chart.data.labels = labels;
  chart.data.datasets.forEach((set) => {
    set.data = info;
    return set;
  });
  chart.update();
}
function shapeDataForLineChart(array) {
  return array.reduce((collection, item) => {
    if (!collection[item.clearance_code_inc_type]) {
      collection[item.clearance_code_inc_type] = [item];
    } else {
      collection[item.clearance_code_inc_type].push(item);
    }
    return collection;
  }, {});
}
async function mainEvent() {
  const pageMap = initMap();
  const form = document.querySelector('.main_form');
  const submit = document.querySelector('#get-location');
  const loadAnimation = document.querySelector('.lds-ellipsis');
  const ctx = document.querySelector('#myChart');
  submit.style.display = 'none';

  const url = 'https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json';
  const results = await fetch(url);
  const reply = await results.json();
  const arrayFromJson = reply.filter((item) => item.clearance_code_inc_type.length > 1);

  const shapedData = shapeDataForLineChart(arrayFromJson);
  const myChart = initChart(ctx, shapedData);

  console.table(arrayFromJson[0]);

  if (arrayFromJson?.length > 0) {
    submit.style.display = 'block';
    loadAnimation.classList.remove('lds-ellipsis');
    loadAnimation.classList.add('lds-ellipsis_hidden');

    let currentList = [];

    form.addEventListener('input', (event) => {
      console.log(event.target.value);
      const filteredList = filterList(currentList, event.target.value);
      injectHTML(filteredList);
      markerPlace(filteredList, pageMap);
      const localData = shapeDataForLineChart(filteredList);
      changeChart(myChart, localData);
    });

    form.addEventListener('submit', (submitEvent) => {
      submitEvent.preventDefault();

      currentList = processRestaurants(arrayFromJson);
      console.log(currentList);

      injectHTML(currentList);
      markerPlace(currentList, pageMap);
      const localData = shapeDataForLineChart(currentList);
      changeChart(myChart, localData);
    });
  }
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());