function getRandomIntInclusive(min, max) {
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);
    return Math.floor(Math.random() * (newMax - newMin + 1) + newMin); 
  
  function injectHTML(list) {
    console.log('fired injectHTML');
    const target = document.querySelector('#restaurant_list');
    target.innerHTML = '';
  
    const listEl = document.createElement('ol');
    target.appendChild(listEl);
    list.forEach((item) => {
      const el = document.createElement('li');
      el.innerText = item.name;
      listEl.appendChild(el);
    });
  }
  
  function processRestaurants(list) {
    console.log('fired restaurants list');
    const range = [...Array(15).keys()];
    const newArray = range.map((item) => {
      const index = getRandomIntInclusive(0, list.length);
      return list[index];
    });
    return newArray;
  }
  
  function filterList(list, filterInputValue) {
    return list.filter((item) => {
      if (!item.name) { return; }
      const lowerCaseName = item.name.toLowerCase();
      const lowerCaseQuery = filterInputValue.toLowerCase();
      return lowerCaseName.includes(lowerCaseQuery);
    })
  }

  function initMap() {

    console.log('initMap');
    const map = L.map('map').setView([38.9897, -76.9378], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
      maxZoom: 19,
      attributes: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' 
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
      const {coordinates} = item.geocoded_column_1;
      L.marker([coordinates[1], coordinates[0]]).addTo(map);
      if(index === 0) {
        map.setView([coordinates[1], coordinates[0]], 10);
      }
    });
    }

  async function mainEvent() {
    const pageMap = initMap();
    const form = document.querySelector('.main_form'); 
    const submit = document.querySelector('#get-resto'); 
    const loadAnimation = document.querySelector('.lds-ellipsis');
    submit.style.display = 'none'; 


    const results = await fetch('/api/foodServicePG');
    const arrayFromJson = await results.json(); 
  

    console.log('Test PG County Set')
    console.table(arrayFromJson);
  

    console.log(arrayFromJson.data[0]);
  

    console.log(`${arrayFromJson.data[0].name} ${arrayFromJson.data[0].category}`);
  

    if (arrayFromJson.data?.length > 0) { 
      submit.style.display = 'block'; 
  

      loadAnimation.classList.remove('lds-ellipsis');
      loadAnimation.classList.add('lds-ellipsis_hidden');
  
      let currentList = [];
  
      form.addEventListener('input', (event) => {
        console.log(event.target.value);
        const filteredList = filterList(currentList, event.target.value);
        injectHTML(filteredList);
        markerPlace(filteredList, pageMap); 
      });
      form.addEventListener('submit', (submitEvent) => {

        submitEvent.preventDefault();
  

        currentList = processRestaurants(arrayFromJson.data);

        injectHTML(currentList);
        markerPlace(currentList, pageMap); 
      });
    }
  }
  document.addEventListener('DOMContentLoaded', async () => mainEvent()); 
  