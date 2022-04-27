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

function updateParks(collection) {
  // console.table(collection);
  const targetList = document.querySelector('#park');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {park_name} = item;
    const displayName = park_name.toLowerCase();
    const injectThisItem = `<option>${displayName}</option>`;
    targetList.innerHTML += injectThisItem;
  });
}

function initMap(targetID) {
  const latLong = [38.784, -76.872];
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
    console.log(item.park_lat);
    console.log(item.park_long);

    const point = [item.park_lat , -item.park_long];
    // console.log(item.geocoded_column_1?.coordinates);
    L.marker([item.park_lat , -item.park_long]).addTo(map);
  });
}

// function refreshList (target, storage) {
//   target.addEventListener('click', async (event) => {
//     event.preventDefault();
//     localStorage.clear();
//     const parks = await fetch('/api/race/parks');
//     const parksArray = await parks.json();
//     console.log(typeof parksArray);
//     localStorage.setItem(storage, parksArray);
//     // location.reload();
//   });
// }
// function inputListener(target) {
//   target.addEventListener('input', async (event) => {
//     console.log(event.target.value);
//     const selectResto = storedDataArray.filter((item) => {
//       const lowerName = item.name.toLowerCase();
//       const lowerValue = event.target.value.toLowerCase();
//       return lowerName.includes(lowerValue);
//     });
//     console.log(selectResto);
//     updateParks(selectResto);
//   });
// }
async function mainEvent() { // the async keyword means we can make API requests
  const form = document.querySelector('.main_form'); // change this selector to match the id or classname of your actual form
  const submit = document.querySelector('.submit_button');

  const parks = document.querySelector('#park');
  const refresh = document.querySelector('.refresh_list');

  const map = initMap('map');
  const retrievalVar = 'parks';
  submit.style.display = 'none';

  // refreshList(refresh, retrievalVar);

  const parksapi = await fetch('/api/race/');
  const parksjson = await parksapi.json();
  const parksArray = parksjson.parks;
  // const storedDataArray = JSON.parse(parksArray);
  console.log(parksArray);
  // console.log(storedDataArray);

  updateParks(parksArray);
  if (parksArray?.length > 0) {
    // this statement is to prevent a race condition on data load
    submit.style.display = 'block';

    let currentArray = [];
    // inputListener(parks);
    parks.addEventListener('change', async (event) => {
      console.log(event.target.value);
    });

    form.addEventListener('submit', async (submitEvent) => {
      // async has to be declared all the way to get an await
      submitEvent.preventDefault(); // This prevents your page from refreshing!
      // console.log('form submission'); // this is substituting for a "breakpoint"
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