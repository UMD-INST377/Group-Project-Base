const form = document.querySelector('.main-form');
const submit = document.querySelector('#get-location');
// const data = getData();

// console.log(data);

async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json';
  const apiData = await fetch(url);
  const json = await apiData.json();
  console.log(json);
  return json;
}
getData();

function initMap() {
  console.log('initMap');
  const map = L.map('map').setView([38.9849, -76.9378], 13);
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
    const {coordinates} = item.Location;
    L.marker([coordinates[1], coordinates[0]]).addTo(map);
    if (index === 0) {
      map.setView([coordinates[1], coordinates[0]], 10);
    }
  });
}

const map = initMap();
