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

function searchIncidents(list) {
  const newArray = list.filter((item) => {
    const clearance = item.clearance_code_inc_type;
    if (clearance === 'ACCIDENT') {
      return item;
    } else if (clearance === 'ACCIDENT WITH IMPOUND') {
      return item;
    } else if (clearance === 'ASSAULT') {
      return item;
    } else if (clearance === 'ASSAULT, SHOOTING') {
      return item;
    } else if (clearance === 'ASSAULT, WEAPON') {
      return item;
    } else if (clearance === 'AUTO, STOLEN') {
      return item;
    } else if (clearance === 'AUTO, STOLEN & RECOVERED') {
      return item;
    } else if (clearance === 'B & E, COMMERCIAL') {
      return item;
    } else if (clearance === 'B & E, RESIDENTIAL') {
      return item;
    } else if (clearance === 'B & E, VACANT') {
      return item;
    } else if (clearance === 'HOMICIDE') {
      return item;
    } else if (clearance === 'SEX OFFENSE') {
      return item;
    } else if (clearance === 'THEFT') {
      return item;
    } else if (clearance === 'THEFT FROM AUTO') {
      return item;
    } else if (clearance === 'ROBBERY, COMMERCIAL') {
      return item;
    } else if (clearance === 'ROBBERY, RESIDENTIAL') {
      return item;
    } else if (clearance === 'ROBBERY, OTHER') {
      return item;
    } else if (clearance === 'VANDALISM') {
      return item;
    } else
    return null;
  });
  return newArray;
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
    console.log('markerPlace', array)
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        layer.remove();
      }
    });

    array.forEach((item) => {
      const newLat = new Number(item);
      const newLng = new Number(item);
      const newLatLng = (newLat, newLng);
      L.marker(newLatLng).addTo(map);
      if (index === 0) {
        map.setView((newLatLng), 9);
      }
    });

  }

  function filterList(array, filterInputValue) {
    return array.filter((item) => {
      // filter prepares an array based on items from the initial array that match the truth cases set up as a test
      if (!item.clearance_code_inc_type) {
        return;
      } // return an element only when the element has an actual item name
      const lowerCaseName = item.clearance_code_inc_type.toLowerCase();
      const lowerCaseQuery = filterInputValue.toLowerCase();
      return lowerCaseName.includes(lowerCaseQuery);
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
    const pageMap = initMap();
    const arrayFromJson = await getData();
    // the async keyword means we can make API requests
    const form = document.querySelector('.main_form'); // get your main form so you can do JS with it
    const submit = document.querySelector('#get-incident'); // get a reference to your submit button
    const loadAnimation = document.querySelector('.lds-ellipsis');
    //submit.style.display = 'none'; // let your submit button disappear
  
    console.table(arrayFromJson);
  
    // in your browser console, try expanding this object to see what fields are available to work with
    // for example: arrayFromJson.data[0].name, etc
    console.log(arrayFromJson[0]);
  
    // this is called "string interpolation" and is how we build large text blocks with variables
    console.log(
      `${arrayFromJson[0].clearance_code_inc_type} ${arrayFromJson[0].street_address}`);
  
    // This IF statement ensures we can't do anything if we don't have information yet
    if (arrayFromJson.length > 0) {
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
        currentList = searchIncidents(arrayFromJson);
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
