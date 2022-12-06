/* eslint-disable max-len */
/* eslint linebreak-style: ["error", "windows"] */

// function used to grab random number from the API //
function getRandomInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
}
// The function that injects the HTML page with information from the API //
function injectHTML(list) {
  console.log('fired injectHTML');
  const target = document.querySelector('#house_list');
  target.innerHTML = '';

  const listEl = document.createElement('ol');
  target.appendChild(listEl);

  list.forEach((item) => {
    const el = document.createElement('li');
    el.innerText = `${item.street_number} ${item.street_name} ${item.street_type} ${item.zip_code}`;
    listEl.appendChild(el);
  });
}
// Function that fliters the list from the API data. //
function filterList(list, filterInputValue) {
  return list.filter((item) => {
    const lowerCaseName = item.street_number.toLowerCase();
    const lowerCaseQuery = filterInputValue.toLowerCase();
    return lowerCaseName.includes(lowerCaseQuery);
  });
}
// Function that process the house list into an array of 10 houses per search //
function processHouse(list) {
  const range = [...Array(10).keys()];
  const newArray = range.map((item) => {
    const index = getRandomInclusive(0, list.length);
    return list[index];
  });
  return newArray;
}
// The function that is incharge of the objects for the map location //
function initMap() {
  console.log('initMap');
  const map = L.map('map').setView([38.9897, -76.9378], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  return map;
}
// The fucntion that adds a marker placement onto the map //
function markerPlace(array, map) {
  console.log('markerPlace', array);
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      layer.remove();
    }
  });
  array.forEach((item, index) => {
    const lat = item.location.latitude;
    const long = item.location.longitude;
    console.log([lat, long]);
    L.marker([lat, long]).addTo(map);
    if (index === 0) {
      map.setView([lat, long], 10);
    }
  });
}
//  The async function that retreives the GET request information //
async function violationH7() {
  const url = 'https://data.princegeorgescountymd.gov/resource/9hyf-46qb.json?violation_code=1H7';
  const data = await fetch(url);
  const json = await data.json();
  const reply = json.filter((item) => Boolean(item.violation_code));
  console.log(reply);
  switch (reply) {
    default:
      break;

    case 1:
      statement = item.location.latitude != null;
      console.log(statement);
      return statement;
  }
  // const newArray = reply.map((item) => {
  //   if (!item.location.latitude && item.location.longitude) {
  //     return item;
  //   }
  //   const assumption = item.location;
  //   console.log(assumption);
  // });
  const array1 = reply;
  const truth = array1.filter((item) => Boolean(item.location));
  console.log(truth);
  // console.log(newArray);
  return reply;
}
// The async function that runs all the rpevious functions into our HTML file //
async function mainEvent() {
  const form = document.querySelector('.main_form');
  const loadAnimation = document.querySelector('.lds-ellipsis');
  const h7 = document.querySelector('#violationh7');

  h7.style.display = 'none';

  const pageMap = initMap();
  const violation1 = await violationH7();

  if (violation1.length > 0) {
    h7.style.display = 'block';
    loadAnimation.classList.remove('lds-ellipsis');
    loadAnimation.classList.add('lds-ellipsis_hidden');

    let currentList = [];
    form.addEventListener('input', (event) => {
      console.log(event.target.value);
      const newFilterList = filterList(currentList, event.target.value);
      injectHTML(newFilterList);
      markerPlace(newFilterList, pageMap);
    });

    form.addEventListener('submit', (SubmitEvent) => {
      SubmitEvent.preventDefault();

      currentList = processHouse(violation1);

      injectHTML(currentList);
      markerPlace(currentList, pageMap);
    });
  }
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());
