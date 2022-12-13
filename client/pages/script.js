// Work in Progress
function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
}

function injectHTML(list) {
  console.log('fired injectHTML');
  const target = document.querySelector('#art_list');
  target.innerHTML = '';

  const listEl = document.createElement('ol');
  target.appendChild(listEl);
  list.forEach((item) => {
    const el = document.createElement('li');
    el.innerText = item.name;
    listEl.appendChild(el);
  });
}

function processMueseums(list) {
  console.log('fired mueseum list');
  const range = [...Array(15).keys()];
  const newArray = range.map((item) => {
    const index = getRandomIntInclusive(0, list.length);
    return list[index];
  });
  return newArray;
}

// function initMap() {
//  console.log('initMap');
// const map = L.map('map').setView([38.5324, -77.125], 10);
//  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    maxZoom: 19,
//    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//  }).addTo(map);
//  return map;
// }

function initChart(chart) {
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June'
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
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

function markerPlace(array, map) {
  console.log('markerPlace', array);
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      layer.remove();
    }
  });

  array.forEach((item, index) => {
    const {coordinates} = item.geocoded_column_1;
    console.log(item);
    L.marker([coordinates[1], coordinates[0]]).addTo(map);
    if (index === 0) {
      map.setView([coordinates[1], coordinates[0]], 9);
    }
  });
}

async function mainEvent() {
  const pageMap = initMap();
  const form = document.querySelector('.main_form');
  const submit = document.querySelector('#get-resto');
  const textBox = document.querySelector('#resto');
  const chartTarget = document.querySelector('#myChart');
  submit.style.display = 'none';

  const results = await fetch('/api/smithsonian/search');
  const arrayFromJson = await results.json();
  
  initChart(chartTarget);

  if (arrayFromJson.data?.length > 0) {
    submit.style.display = 'block';
    let currentList = [];

    form.addEventListener('input', (event) => {
      console.log(event.target.value);
      const newFilterList = filterList(currentList, event.target.value);
      injectHTML(newFilterList);
      markerPlace(newFilterList, pageMap);
    });
    form.addEventListener('submit', (submitEvent) => {
      submitEvent.preventDefault();

      currentList = processMueseums(arrayFromJson.data);
      console.log(currentList);

      injectHTML(currentList);
      // markerPlace(currentList, pageMap);

      // By separating the functions, we open the possibility of regenerating the list
      // without having to retrieve fresh data every time
      // We also have access to some form values, so we could filter the list based on name
    });
  }
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());
