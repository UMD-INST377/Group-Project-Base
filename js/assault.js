/*
  ## Utility Functions
    Under this comment place any utility functions you need - like an inclusive random number selector
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

function injectHTML(list) {
  console.log('fired injectHTML');
  const target = document.querySelector('#crime_list');
  target.innerHTML = '';
  const listEl = document.createElement('ol');
  target.appendChild(listEl);
  list.forEach((item) => {
    const el = document.createElement('li');
    el.innerText = item.street_address;
    listEl.appendChild(el);
  });
}

function processCrime(list) {
  const newArray = list.filter((item) => {
    const clearanceCodeIncType = item.clearance_code_inc_type;
    if (clearanceCodeIncType && clearanceCodeIncType === 'ASSAULT') {
      console.log(item);
      return item;
    }
    return null;
  });
  return newArray;
}

function initMap() {
  console.log('initMap');
  const map = L.map('map').setView([38.9897, -76.9378], 11);
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
		}});
  array.forEach((item, index) => {
    const latitude = item.latitude;
    const longitude = item.longitude;
    L.marker([latitude, longitude]).addTo(map);
    if(index === 0) {
      map.setView([latitude, longitude], 11);
    }
  });
}

async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json';
  const data = await fetch(url);
  const json = await data.json();
  const reply = json.filter((item) => Boolean(item.location)).filter((item) => Boolean(item.clearance_code_inc_type));
  return reply;
}

async function mainEvent() {
  // the async keyword means we can make API requests
  const form = document.querySelector('.main_form'); // get your main form so you can do JS with it
  const submit = document.querySelector('#get-resto'); // get a reference to your submit button
  const loadAnimation = document.querySelector('.lds-ellipsis');
  submit.style.display = 'none'; // let your submit button disappear

  // initChart(chartTarget);
  const pageMap = initMap();
  /* API data request */
  const mapData = await getData();

  console.table(mapData);

  // in your browser console, try expanding this object to see what fields are available to work with
  // for example: arrayFromJson.data[0].name, etc
  console.log(mapData[0]);

  // this is called "string interpolation" and is how we build large text blocks with variables
  console.log(`${mapData[0].clearance_code_inc_type} ${mapData[0].street_address}`);

  // This IF statement ensures we can't do anything if we don't have information yet
  if (mapData.length > 0) { // the question mark in this means "if this is set at all"
    submit.style.display = 'block'; // let's turn the submit button back on by setting it to display as a block when we have data available

    loadAnimation.classList.remove('lds-ellipsis');
    loadAnimation.classList.add('lds-ellipsis_hidden');

    let currentList = [];
    form.addEventListener('input', (event) => {
      console.log(event.target.value);
      const newFilterList = filterList(currentList, event.target.value);
      injectHTML(newFilterList);
      markerPlace(newFilterList, pageMap);
    });

    form.addEventListener('submit', (submitEvent) => {
      // This is needed to stop our page from changing to a new URL even though it heard a GET request
      submitEvent.preventDefault();

      // This constant will have the value of your 15-restaurant collection when it processes
      currentList = processCrime(mapData);

      // And this function call will perform the "side effect" of injecting the HTML list for you
      injectHTML(currentList);
      markerPlace(currentList, pageMap);
    });
  }
}

document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests