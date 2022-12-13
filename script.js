async function getData() {
    const url = 'https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json';
    const request = await fetch(url);
    const json = await request.json();
    const reply = json.filter((item) => Boolean(item.clearance_code_inc_type)).filter((item) => Boolean(item.location));
    return reply;
  }

  function initMap() {
    // will need this to inject markers later!
    console.log('initMap');
    const map = L.map('map').setView([38.8300, -76.8500], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    return map;
  }
//
function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin) + newMin); // The maximum is exclusive and the minimum is inclusive
}

function injectHTML(list) {
  console.log('fired injectHTML');
  const target = document.querySelector('#incident_list');
  target.innerHTML = '';

  const listEl = document.createElement('ol');
  target.appendChild(listEl);

  list.forEach((item) => {
    const el = document.createElement('li');
    el.innerText = item.name;
    listEl.appendChild(el);
  });
}

  function processIncidents(list) {
    console.log('fired incidents list');
    const range = [...Array(15).keys()]; // special notation to create the array
    const newArray = range.map((item) => {
      const index = getRandomIntInclusive(0, list.length);
      return list[index];
    });
    return newArray;
  }

  function markerPlace(array, map) {
    // must keep the reference to the marker so this is here
    // const marker = L.marker([51.5, -0.09]).addTo(map);
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        layer.remove();
      }
    });

    array.forEach((item, index) => {
      const newLat = new Number(latitude);
      const newLng = new Number(longitude);
      const newLatLng = (newLat, newLng);
      L.marker(newLatLng).addTo(map);
      if (index === 0) {
        map.setView([coordinates[1], coordinates[0]], 9);
      }
    });

  }

  function filterList(array, filterInputValue) {
    return array.filter((item) => {
      // filter prepares an array based on items from the initial array that match the truth cases set up as a test
      if (!item.name) {
        return;
      } // return an element only when the element has an actual item name
      const lowerCaseName = item.name.toLowerCase();
      const lowerCaseQuery = filterInputValue.toLowerCase();
      return lowerCaseName.includes(lowerCaseQuery);
    });
  }



  async function mainEvent() {
    
    const pageMap = initMap();
    // the async keyword means we can make API requests
    const form = document.querySelector('.main_form'); // get your main form so you can do JS with it
    const submit = document.querySelector('#get-incident'); // get a reference to your submit button
    //const loadAnimation = document.querySelector('.lds-ellipsis'); -->
    submit.style.display = 'none'; // let your submit button disappear
  
    const arrayFromJson = await getData(); // here is where we get the data from our request as JSON
  
    console.table(arrayFromJson);
  
    // in your browser console, try expanding this object to see what fields are available to work with
    // for example: arrayFromJson.data[0].name, etc
    console.log(arrayFromJson[0]);
  
    // this is called "string interpolation" and is how we build large text blocks with variables
    console.log(
      `${arrayFromJson.data[0].name} ${arrayFromJson.data[0].category}`
    );
  
    // This IF statement ensures we can't do anything if we don't have information yet
    if (arrayFromJson.data?.length > 0) {
      // the question mark in this means "if this is set at all" & return if we have no data
      submit.style.display = 'block'; // let's turn the submit button back on by setting it to display as a block when we have data available
  
      // Let's hide the load button now that we have data to manipulate
      loadAnimation.classList.remove('lds-ellipsis');
      loadAnimation.classList.add('lds-ellipsis_hidden'); // turn the submit button back on by setting it to display as a block when we have data available
      
      let currentList = [];
      
      form.addEventListener('input', (event) => {
        console.log(event.target.value); // pull-in form for event bubbling
        const filteredList = filterList(currentList, event.target.value); // filter current list from event target value
        injectHTML(filteredList);
        markerPlace(filteredList, pageMap);
      });
  
      // And here's an eventListener! It's listening for a "submit" button specifically being clicked
      // this is a synchronous event event, because we already did our async request above, and waited for it to resolve
      form.addEventListener('submit', (submitEvent) => {
        // This is needed to stop our page from changing to a new URL even though it heard a GET request
        submitEvent.preventDefault();
  
        // This constant will have the value of your 15-restaurant collection when it processes
        currentList = processIncidents(arrayFromJson);
        console.log(currentList);
  
        // And this function call will perform the "side effect" of injecting the HTML list for you
        injectHTML(currentList);
        markerPlace(currentList, pageMap);
      });
    }
  }
  
  /*
        This last line actually runs first!
        It's calling the 'mainEvent' function at line 57
        It runs first because the listener is set to when your HTML content has loaded
      */
  document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
