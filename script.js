function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + newMin); // The maximum is inclusive and the minimum is inclusive
}

function processCameras(list) {
  console.log('speed cameras list');
  const range = [...Array(20).keys()];
  const newArray = range.map((item) => {
    const index = getRandomIntInclusive(0, list.length);
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
    const {coordinates} = item.location_1;
    const marker = L.marker([latitude, longitude]).addTo(map);
    L.latlng(marker);
    if (index === 0) {
      map.setView([latitude, longitude], 10);
    }
  });
}

function clickedOn(array, map) {
  array.forEach((item, index) => {
    const {coordinates} = item.location_1;
    const popup = L.popup().setLatLng([latitude, longitude]).setContent('You Clicked me!').openOn(map);
    const marker = L.marker([latitude, longitude]).addTo(map);
    L.latlng(marker)
    if (index === 0) {
      map.setView([latitude, longitude], 10);
      map.on('click', onMapClick);
    }
    alert(`You clicked the map at ${onMapClick.latlng}`);
  });
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

    console.table(mapData);
    console.log(mapData[0]);
    console.log(`${mapData[0].school} ${mapData[0].location}`);

    // Return if we have no data
    if(mapData?.length > 0) {
      // let's turn the submit button back on by setting it to display as a block when we have data available
      submit.style.display = 'block'; 

    // Let's hide our load button not that we have some data to manipulate
    loadAnimation.classList.remove('lds-ellipsis');
    loadAnimation.classList.add('lds-ellipsis_hidden');

    let cameraList = [];

    form.addEventListener('submit', async (submitEvent) => {
      submitEvent.preventDefault();
      cameraList = processCameras(mapData); 
      console.log(cameraList);
      markerPlace(cameraList, pageMap);
      clickedOn(cameraList, pageMap);
        });
    }
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());
