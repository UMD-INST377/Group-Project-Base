// function to get random integer value
function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
  // The maximum is inclusive and the minimum is inclusive
}

// function that randomly selects 10 speed cameras and returns them as a list
function processCameras(list) {
  console.log('speed cameras list');
  const range = [...Array(10).keys()];
  const indexList = [];
  const newArray = range.map((item) => {
    let index = getRandomIntInclusive(0, list.length - 1);

    while (indexList.includes(index)) {
      index = getRandomIntInclusive(0, list.length - 1);
    }

    indexList.push(index);
    return list[index];
  });
  return newArray;
}

// intialize the map
function initMap() {
  const map = L.map('map').setView([38.7849, -76.8721], 10);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  return map;
}

// function that places the speed camera popups based on coordinates
function markerPlace(array, map) {
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      layer.remove();
    }
  });

  array.forEach((item, index) => {
    const lat = item.location_1.latitude;
    const long = item.location_1.longitude;

    cameraMarker = L.marker([lat, long]).addTo(map);

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

// function that filters the speed cameras based on school name
function filterList(array, filterInputValue) {
  return array.filter((item) => {
    if (!item.school) { return; }
    const lowerCaseSchool = item.school.toLowerCase();
    const lowerCaseQuery = filterInputValue.toLowerCase();
    // eslint-disable-next-line consistent-return
    return lowerCaseSchool.includes(lowerCaseQuery);
  });
}

// get data from our API
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
  const all = document.querySelector('#get-all');
  const loadAnimation = document.querySelector('.lds-ellipsis');
  submit.style.display = 'none';
  all.style.display = 'none';

  const mapData = await getData();

  // Return if we have no data
  if (mapData?.length > 0) {
    // let's turn the submit button back on by setting it to display as a block when we have data available
    submit.style.display = 'block';
    all.style.display = 'block';

    // Let's hide our load button not that we have some data to manipulate
    loadAnimation.classList.remove('lds-ellipsis');
    loadAnimation.classList.add('lds-ellipsis_hidden');

    let cameraList = [];

    form.addEventListener('input', (event) => {
      const filteredList = filterList(cameraList, event.target.value);
      markerPlace(filteredList, pageMap);
    });

    form.addEventListener('submit', async (submitEvent) => {
      submitEvent.preventDefault();
      cameraList = processCameras(mapData);
      markerPlace(cameraList, pageMap);
    });

    all.addEventListener('click', async (allEvent) => {
      allEvent.preventDefault();
      cameraList = mapData;
      markerPlace(cameraList, pageMap);
    });
  }
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());
