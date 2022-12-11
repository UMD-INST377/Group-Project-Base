function getRandomIntInclusive(min, max){
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);
    return Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
  }
  
  function injectHTML(list) {
    console.log('fired injectHTML');
    const target = document.querySelector("#Library_List");
    target.innerHTML = '';
  
    const listEl = document.createElement('ol');
    target.appendChild(listEl);
  
    list.forEach(item => {
      const el = document.createElement('li');
      el.innerText = item.branch_name;
      listEl.appendChild(el);
    })
    return listEl;
  }
  
  async function getData(){
    const url = 'https://data.princegeorgescountymd.gov/resource/7k64-tdwr.json'; // remote URL! you can test it in your browser
    const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
    const json = await data.json(); // the data isn't json until we access it using dot notation
    const reply = json.filter((item) => Boolean(item.location_1)).filter((item) => Boolean(item.branch_name));
    console.log('Results in library API', json.length); 
    return reply ;
  }

  function processRestaurants(list) {
    console.log('fired library list');
    const range = [...Array(20).keys()];
    const newArray = range.map((item) => {
      const index = getRandomIntInclusive(0, list.length);
      return list[index];
    })
    return newArray;

  }
  
  /* This function filters the given list by the input value. turning a string into an integer */
  function filterList(array, filterInputValue){
    return newArray = array.filter((item) => {
      const intVal = new Number(filterInputValue);
      const zipMatch = item.zip_code.includes(intVal);
      return zipMatch;
    })
  }

  function initMap(){
    console.log('initMap');
    const map = L.map('map').setView([38.880540, -76.831386],10.5);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    return map;
  }


  function markerPlace(array, map){
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        layer.remove();
      }
    });

    array.forEach((item, index) => {
      //const [latitude, longitude] = item.location_1;
      const latitude = item.location_1.latitude;
      const longitude = item.location_1.longitude;
      const numLat = parseFloat(latitude);
      const numLng = parseFloat(longitude);
      //L.marker([numLat, numLng]).addTo(map);
      L.marker([numLat, numLng]).bindPopup(L.popup({maxWidth:500}).
      setContent("Branch name: " + item.branch_name +"<br>"+"Branch type: " + item.branch_type +"<br>"+
       "\nPhone Number: " + item.telephone))
      .addTo(map);

      if(index === 0){
        map.setView([numLat, numLng], 10.5);
      }
    })
  }


  async function mainEvent() {
  
    const pageMap = initMap();

    const form = document.querySelector('.main_form'); 
    const submit = document.querySelector('#get-zipcode'); 
    const loadAnimation = document.querySelector('.lds-ellipsis');
    submit.style.display = 'none'; 
  
   
    const libraryData = await getData();
    
    console.table(libraryData);
  
   
    if (libraryData?.length > 0) {

      submit.style.display = 'block'; 
      loadAnimation.classList.remove('lds-ellipsis');
      loadAnimation.classList.add('lds-ellipsis_hidden');

      let currentList = [];

      form.addEventListener('input', (event) => {
        console.log(event.target.value);
        const filteredList = filterList(currentList, event.target.value);
        injectHTML(filteredList);
        markerPlace(filteredList, pageMap);
      })

     
      form.addEventListener('submit', (submitEvent) => {

        submitEvent.preventDefault();
  

        currentList = processRestaurants(libraryData);
      
   
        injectHTML(currentList);
        markerPlace(currentList, pageMap);
        
   
      });
    }
  }

  document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
  