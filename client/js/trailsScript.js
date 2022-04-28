let currentPark;

function formToObject(htmlFormElement) {
  const formItem = new FormData(htmlFormElement).entries();
  const formArray = Array.from(formItem);
  const formObject = formArray.reduce((collection, item, index) => {
    if (!collection[item[0]]) {
      collection[item[0]] = item[1];
    }
    return collection;
  }, {});
  return formObject;
}
// to-do write function to retrive park info from park name

// to-do hook up review form

function updateParks(collection) {
  // console.table(collection);
  const targetList = document.querySelector('#park');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {park_name} = item;
    const displayName = park_name;
    const injectThisItem = `<option>${displayName}</option>`;
    targetList.innerHTML += injectThisItem;
  });
}

async function displayReviews(parkId) {
  // console.table(collection);
  const url = `/api/race/reviews/${parkId}`;
  const reviews = await fetch(url);
  const reviewsJson = await reviews.json();
  console.log(reviewsJson);
  const targetList = document.querySelector('.reviews');
  targetList.innerHTML = '';

  reviewsJson.forEach((item) => {
    targetList.innerHTML += `Title: ${item.title}<br>`;
    targetList.innerHTML += `Author: ${item.author}<br>`;
    targetList.innerHTML += `Description: ${item.description}<hr>`;
  });
}

function initMap(targetID) {
  const latLong = [37.901984, -75.3526373]; // assateague island start

  const map = L.map(targetID).setView(latLong, 13); // lat long zoom
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
  });
  collection.forEach((item) => {
    // console.log(item.park_lat);
    // console.log(item.park_long);

    const point = [item.park_lat, item.park_long];
    // console.log(item.geocoded_column_1?.coordinates);
    if (item.park_lat) {
      L.marker([item.park_lat, -item.park_long]).addTo(map);
    }
  });
}

function findPark(park, parkArray) {
  let match;
  parkArray.forEach((item) => {
    // console.log(item);
    if (item.park_name === park) {
      console.log('park found');
      match=item;
    }
  });
  return match;
}

async function mainEvent() { // the async keyword means we can make API requests
  const form = document.querySelector('.main_form'); // change this selector to match the id or classname of your actual form

  const selectPark = document.querySelector('.select_park');

  const parks = document.querySelector('#park');
  const refresh = document.querySelector('.refresh_list');

  const map = initMap('map');
  const retrievalVar = 'parks';
  selectPark.style.display = 'none';

  // refreshList(refresh, retrievalVar);

  const parksapi = await fetch('/api/race/');
  const parksjson = await parksapi.json();
  const parksArray = parksjson.parks;
  // const storedDataArray = JSON.parse(parksArray);
  console.log(parksArray);
  // console.log(storedDataArray);

  updateParks(parksArray);
  if (parksArray?.length > 0) {
    currentPark = parksArray[0];
    // this statement is to prevent a race condition on data load
    selectPark.style.display = 'block';

    let currentArray = parksArray;
    // inputListener(parks);
    addMapMarkers(map, currentArray);
    parks.addEventListener('change', async (event) => {
      // console.log(event.target.value);
      // console.log(parksArray);
      matchingPark = findPark(event.target.value, parksArray);
      console.log(matchingPark);
      currentPark = matchingPark;
    });

    form.addEventListener('submit', async (submitEvent) => {
      // async has to be declared all the way to get an await
      submitEvent.preventDefault(); // This prevents your page from refreshing!
      // console.log('form submission'); // this is substituting for a "breakpoint"
    });
    selectPark.addEventListener('click', async (submitEvent) => {
      // async has to be declared all the way to get an await
      submitEvent.preventDefault(); // This prevents your page from refreshing!
      // console.log('form submission'); // this is substituting for a "breakpoint"
      console.log('park selected');
      console.log(currentPark.park_id);
      displayReviews(currentPark.park_id);
    });
    refresh.addEventListener('click', async (submitEvent) => {
      // async has to be declared all the way to get an await
      submitEvent.preventDefault(); // This prevents your page from refreshing!
      // console.log('form submission'); // this is substituting for a "breakpoint"
      currentArray = parksArray;
      console.log(currentArray);
      updateParks(currentArray);
      addMapMarkers(map, currentArray);
    });
  }
}

// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests