function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + newMin); // The maximum is inclusive and the minimum is inclusive
}

function processCameras(list) {
  console.log('speed cameras list');
  const range = [...Array(20).keys()];
  const newArray = range.map((item) => {
    const index = getRandomIntInclusive(0, list.length - 1);
    return list[index];
  });
  return newArray;
}

function initMap() {
  const map = L.map('map').setView([38.7849, -76.8721], 10);
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
    console.log(item.location_1);

    const lat = item.location_1.latitude;
    const long = item.location_1.longitude;

    console.log(lat, long);

    cameraMarker = L.marker([lat, long]).addTo(map);

    console.log('After', lat, long);

    if (index === 0) {
      map.setView([lat, long], 10);
    }

    const address = item.street_address;
    const {school} = item;
    const postedSpeed = item.posted_speed;
    const enforcedSpeed = item.enforcement;

    cameraMarker.bindPopup(`Address: ${address}<br>School: ${school}<br>Posted Speed: ${postedSpeed}<br>Enforced Speed: ${enforcedSpeed}`);
  });
}

/* function clickedOn(array, map) {
  array.forEach((item, index) => {
    const lat = item.location_1.latitude;
    const long = item.location_1.longitude;
    const popup = L.popup().setLatLng([lat, long]).setContent('You Clicked me!').openOn(map);
    L.marker([lat, long]).addTo(map);
    if (index === 0) {
      map.setView([lat, long], 10);
      map.on('click', onMapClick);
    }
    alert(`You clicked the map at ${onMapClick.latlng}`);
  });
} */

function filterList(list, value) {
  
}

async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/mnkf-cu5c.json';
  const data = await fetch(url);
  const json = await data.json();
  const reply = json.filter((item) => Boolean(item.location_1)).filter((item) => Boolean(item.school));
  return reply;
}

async function mainEvent() {
  const pageMap = initMap();

  const form = document.querySelector('.main_form');
  const submit = document.querySelector('#get-resto');
  const loadAnimation = document.querySelector('.lds-ellipsis');
  submit.style.display = 'none';

  const mapData = await getData();

  console.log(mapData);

  console.table(mapData);

  console.log(mapData);
  console.log(mapData[0]);
  console.log(`${mapData[0].school} ${mapData[0].location}`);

  // Return if we have no data
  if (mapData?.length > 0) {
    // let's turn the submit button back on by setting it to display as a block when we have data available
    submit.style.display = 'block';

    // Let's hide our load button not that we have some data to manipulate
    loadAnimation.classList.remove('lds-ellipsis');
    loadAnimation.classList.add('lds-ellipsis_hidden');

    let cameraList = [];
    
    /*
    form.addEventListener('input', (event) => 

    );
    */
    form.addEventListener('submit', async (submitEvent) => {
      submitEvent.preventDefault();
      cameraList = processCameras(mapData);
      console.log(cameraList);
      markerPlace(cameraList, pageMap);
      // clickedOn(cameraList, pageMap);
    });
  }
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());
