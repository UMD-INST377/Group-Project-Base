/* eslint-disable max-len */

// Random Number Generator for API
function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + newMin); // The maximum is inclusive and the minimum is inclusive
}

// Function that injects information from API
function injectHTML(list) {
  console.log('Fired Inject HTML');
  const target = document.querySelector('#library_list');
  target.innerHTML = '';

  const listEl = document.createElement('ol');
  target.appendChild(listEl);

  list.forEach((item) => {
    const el = document.createElement('li');
    el.innerText = item.branch_name;
    listEl.appendChild(el);
  });
}

// Function that processes a list of PG County Libraries into an array of 15
function processLibraries(list) {
  console.log('Fired Library List');
  const range = [...Array(15).keys()];
  const newArray = range.map((item) => {
    const index = getRandomIntInclusive(0, list.length);
    return list[index];
  });
  return newArray;
}

// Function used to filter list by Zipcode once library list is generated
function filterList(array, filterInputValue) {
  console.log('HERE');
  return array.filter((item) => {
    const lowerCaseName = `${item.branch_name} ${item.zip_code}`.toLowerCase();
    const lowerCaseQuery = filterInputValue.toLowerCase();
    return lowerCaseName.includes(lowerCaseQuery);
  });
}

// Function for map
function initMap() {
  const map = L.map('map').setView([38.9897, -76.9378], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  console.log('initMap');
  return map;
}

// Function to put marker points on the map
function markerPlace(array, map) {
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      layer.remove();
    }
  });
  array.forEach((item, index) => {
    const lat = item.location_1.latitude;
    const long = item.location_1.longitude;
    const numLat = parseFloat(lat);
    const numLong = parseFloat(long);
    L.marker([numLat, numLong]).addTo(map);
    if (index === 0) {
      map.setView([numLat, numLong], 10);
    }
  });
}

// ASYNC Function that pulls data from API
async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/7k64-tdwr.json'; // PG County Library URL
  const data = await fetch(url);
  const json = await data.json();

  const reply = json.filter((item) => Boolean(item.zip_code)).filter((item) => Boolean(item.branch_name));
  console.log(json);
  return reply;
}

async function mainEvent() {
  const form = document.querySelector('.main_form'); // get your main form so you can do JS with it
  const submit = document.querySelector('#get-zip'); // get a reference to submit button
  const loadAnimation = document.querySelector('.lds-ellipsis'); // get a reference to loading animation
  submit.style.display = 'none'; // let submit button disappear

  const pageMap = initMap();
  const mapData = await getData();


  // This IF statement ensures we can't do anything if we don't have information yet
  if (mapData?.length > 0) { // the question mark in this means "if this is set at all"
    submit.style.display = 'block'; // turns the submit button back on by setting it to display as a block when we have data available
    loadAnimation.classList.remove('lds-ellipsis'); // hides the load button now that we have some data to manipualte
    loadAnimation.classList.add('lds-ellipsis_hidden'); // turns the submit button back on by setting it to display as a block when we have data

    let currentList = [];
    form.addEventListener('input', (event) => {
      console.log(event.target.value);
      const newFilterList = filterList(currentList, event.target.value);
      injectHTML(newFilterList);
      markerPlace(newFilterList, pageMap);
    });

    // And here's an eventListener! It's listening for a "submit" button specifically being clicked
    // this is a synchronous event event, because we already did our async request above, and waited for it to resolve
    form.addEventListener('submit', (submitEvent) => {
      submitEvent.preventDefault(); // Needed to stop our page from changing to a new URL even though it heard a GET request
      console.log('Submit Event Listener');
      currentList = processLibraries(mapData); // This constant will have the value of your 15-restaurant collection when it processes

      injectHTML(currentList); // function call will perform the "side effect" of injecting the HTML list
      markerPlace(currentList, pageMap);
    });
  }
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());
