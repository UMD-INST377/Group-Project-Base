/* eslint-disable max-len */

// const { load } = require('dotenv');
/*
  ## Utility Functions
    Under this comment place any utility functions you need - like an inclusive random number selector
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
async function getData(){
  const url = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json';
  const data = await fetch(url);
  const json = await data.json();
  return json;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  
function injectHTML(list) {
  console.log('fired injectHTML');
  const target = document.querySelector('#stuff');
  target.innerHTML = '';

  const listEl = document.createElement('ol');
  target.appendChild(listEl);

  list.forEach((item) => {
    const str = `<li>${item.total_bags_litter} bag(s), affecting the ${item.major_wshed} watershed area. </li>`;
    listEl.innerHTML += str;
  });
  }

function processLitter(list) {
  console.log('fired litter list');
  const range = [...Array(15).keys()]; // sp. notation to create array of 15 elements
  const newArray = range.map((item) => {
    const index = getRandomIntInclusive(0, list.length);
    return list[index];
  }); 
  return newArray;
}
  
function filterList(array, filterInputValue) {
  return array.filter((item) => {
    const lowercaseName = item.name.toLowerCase(); // sets query items in array to lowercase
    const lowercaseQuery = filterInputValue.toLowerCase(); // sets input to lowercase
    return lowercaseName.includes(lowercaseQuery); // if input is included in query name, returns to array
  });
}
  
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
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      layer.remove();
    }
  });
  array.forEach((item, index) => {
    const lat = item.latitude;
    const long = item.longitude;
    console.log(item);
  L.marker([long, lat]).addTo(map);
  if (index === 0) {
    map.setView([long, lat], 10);
    }
  });
}
  
async function mainEvent() {

  const data = await getData();

  const map = initMap();
  // the async keyword means we can make API requests
  const form = document.querySelector('.main_form'); // get your main form so you can do JS with it
  const submit = document.querySelector('#getLitter'); // get a reference to your submit button

  if (data.length > 0) {
    
    let currentList = [];

    form.addEventListener('input', (event) => {
      console.log(event.target.value);
      const newFilterList = filterList(currentList, event.target.value);
      injectHTML(newFilterList);
      markerPlace(newFilterList, map);
    });

    form.addEventListener('submit', (submitEvent) => {
      // This is needed to stop our page from changing to a new URL even though it heard a GET request
      submitEvent.preventDefault();

      currentList = processLitter(data);

      injectHTML(currentList);
      markerPlace(currentList, map);
    });
  }
}
  

document.addEventListener('DOMContentLoaded', async () => mainEvent());
  