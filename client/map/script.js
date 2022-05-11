/* const map = L.map('map').setView([38.9923,-76.9467], 1);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
}).addTo(map);

const marker = L.marker([38.9923,-76.9467]).addTo(map); */
function createHtmlList(collection) {
  // console.log('fired HTML creator');
  // console.table(collection);
  console.log(collection);
  const targetList = document.querySelector('.resto-list');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {name} = item;
    const displayName = name.toLowerCase();
    const injectThisItem = `<li>${displayName}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}
/* function initMap(targetId) {
  const latLong = [38.9882,-76.9447];
  const map = L.map(targetId).setView(latLong, 15);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
  }).addTo(map);
  return map;
}

function addMapMarkers(map, collection) {
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      layer.remove();
    }
  }) 
  
  collection.forEach((item) => {
    const point = item.geocoded_column_1?.coordinates;
    console.log(item.geocoded_column_1?.coordinates);
    L.marker([point[0], point[1]]).addTo(map);
  });
} */
/* function setLat(hallArray) {
  const hall0 = document.querySelector('.the_diner'); // Selects the element to insert the name
  hall0.innerHTML = '';
  hall0.innerHTML += `${hallArray.data[0].hall_lat}`; // inserts the hall name into the html

  // South Campus Dinning Hall
  const hall1Button = document.querySelector('.sc_diner');
  hall1Button.innerHTML = '';
  hall1Button.innerHTML += `${hallArray.data[1].hall_lat}`;
  
  // North Campus Dinning Hall
  const hall2Button = document.querySelector('.nc_diner');
  hall2Button.innerHTML = ''
  hall2Button.innerHTML += `${hallArray.data[2].hall_lat}`;
}

function setLong(hallArray) {
  const hall0 = document.querySelector('.the_diner'); // Selects the element to insert the name
  hall0.innerHTML = '';
  hall0.innerHTML += `${hallArray.data[0].hall_long}`; // inserts the hall name into the html

  // South Campus Dinning Hall
  const hall1 = document.querySelector('.sc_diner');
  hall1.innerHTML = '';
  hall1.innerHTML += `${hallArray.data[1].hall_long}`;
  
  // North Campus Dinning Hall
  const hall2 = document.querySelector('.nc_diner');
  hall2.innerHTML = ''
  hall2.innerHTML += `${hallArray.data[2].hall_long}`;
}

function addNames(hallArray) {
  // The Diner
  const hall0 = document.querySelector('.the_diner'); // Selects the element to insert the name
  hall0.innerHTML = '';
  hall0.innerHTML += `${hallArray.data[0].hall_name}`; // inserts the hall name into the html
  // South Campus Dinning Hall
  const hall1 = document.querySelector('.sc_diner');
  hall1.innerHTML = '';
  hall1.innerHTML += `${hallArray.data[1].hall_name}`;
  // North Campus Dinning Hall
  const hall2 = document.querySelector('.nc_diner');
  hall2.innerHTML = ''
  hall2.innerHTML += `${hallArray.data[2].hall_name}`;
} */

async function mainEvent() {
  const results = await fetch('/api/dining');
  const hallArray = await results.json();


  const map = L.map('map').setView([38.9882, -76.9460], 14);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  for (let i = 0; i < hallArray.data.length; i++) {
    L.marker([hallArray.data[i].hall_lat, hallArray.data[i].hall_long]).addTo(map)
      .bindPopup(hallArray.data[i].hall_name)
      .openPopup();
  }

  // console.log(hallArray.data.length);
  // console.log(hallArray.data[0].hall_name); 
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());