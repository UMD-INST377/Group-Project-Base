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
      el.innerText = `${item.street_number} ${item.street_name} ${item.street_type
      } ${item.zip_code}`;
      listEl.appendChild(el);
    });
  }
  // Function that fliters the list from the API data. //
  function filterList(list, filterInputValue) {
    return list.filter((item) => {
      const lowerCaseName = item.name.toLowerCase();
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
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    return map;
  }
  // The fucntion that adds a marker placement onto the map //
  function markerPlace(array, map) {
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        layer.remove();
      }
    });
    array.forEach((item, index) => {
      const latitude = item.lat;
      const longitude = item.long;
      // console.log(item.location[1]);
      L.marker(latitude, longitude).addTo(map);
      // if (index === 0) {
      //   map.setView([location[1], location[0]], 10);
      // }
    });
  }
  //  The async function that retreives the GET request information //
  async function getData() {
    const url = 'https://data.princegeorgescountymd.gov/resource/9hyf-46qb.json';
    const data = await fetch(url);
    const json = await data.json();
    const reply = json.filter((item) => Boolean(item.location)).filter((item) => Boolean(item.inspection_id));
    console.log(reply);
    return reply;
  }
  // The async function that runs all the rpevious functions into our HTML file //
  async function mainEvent() {
    const form = document.querySelector('.main_form');
    const submit = document.querySelector('#get-house');
    const loadAnimation = document.querySelector('.lds-ellipsis');
    submit.style.display = 'none';
    const pageMap = initMap();
  
    const mapData = await getData();
  
    // submit.style.display = 'none';
  
    console.table(mapData);
    console.log(mapData[0]);
  
    console.log(
      `${mapData[0].location} ${mapData[0].inspection_id}`
    );
  
    if (mapData.length > 0) {
      submit.style.display = 'block';
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
  
        currentList = processHouse(mapData);
  
        injectHTML(currentList);
        markerPlace(currentList, pageMap);
      });
    }
  }
  document.addEventListener('DOMContentLoaded', async () => mainEvent());
  