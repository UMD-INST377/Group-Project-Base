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
  const reply = json.filter((item) => Boolean(item.geocoded_column));
  console.log(reply);
  return reply;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  
  function injectHTML(list) {
    console.log('fired injectHTML');
    const target = document.querySelector('#restaurant_list');
    target.innerHTML = '';
  
    const listEl = document.createElement('ol');
    target.appendChild(listEl);
  
    list.forEach((item) => {
      const str = `<li>${item.name} </li>`;
      listEl.innerHTML += str;
    });
    /*
      ## JS and HTML Injection
        There are a bunch of methods to inject text or HTML into a document using JS
        Mainly, they're considered "unsafe" because they can spoof a page pretty easily
        But they're useful for starting to understand how websites work
        the usual ones are element.innerText and element.innerHTML
        Here's an article on the differences if you want to know more:
        https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innertext
  
      ## What to do in this function
        - Accept a list of restaurant objects
        - using a .forEach method, inject a list element into your index.html for every element in the list
        - Display the name of that restaurant and what category of food it is
    */
  }
  
  function processRestaurants(list) {
    console.log('fired restaurants list');
    const range = [...Array(15).keys()]; // sp. notation to create array of 15 elements
    const newArray = range.map((item) => {
      const index = getRandomIntInclusive(0, list.length);
      return list[index];
    });
    return newArray;
    /*
        ## Process Data Separately From Injecting It
          This function should accept your 1,000 records
          then select 15 random records
          and return an object containing only the restaurant's name, category, and geocoded location
          So we can inject them using the HTML injection function
  
          You can find the column names by carefully looking at your single returned record
          https://data.princegeorgescountymd.gov/Health/Food-Inspection/umjn-t2iz
  
        ## What to do in this function:
  
        - Create an array of 15 empty elements (there are a lot of fun ways to do this, and also very basic ways)
        - using a .map function on that range,
        - Make a list of 15 random restaurants from your list of 100 from your data request
        - Return only their name, category, and location
        - Return the new list of 15 restaurants so we can work on it separately in the HTML injector
      */
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
      const {coordinates} = item.geocoded_column;
    L.marker([coordinates[0], coordinates[1]]).addTo(map);
    if (index === 0) {
      map.setView([coordinates[0], coordinates[1]], 10);
      }

      marker.on('mouseover',function(ev) {
        ev.target.openPopup();
      });
      
    });
  }
  
  async function mainEvent() {

    const data = await getData();
    /*
        ## Main Event
          Separating your main programming from your side functions will help you organize your thoughts
          When you're not working in a heavily-commented "learning" file, this also is more legible
          If you separate your work, when one piece is complete, you can save it and trust it
      */
    const map = initMap();
    // the async keyword means we can make API requests
    const form = document.querySelector('.main_form'); // get your main form so you can do JS with it
    const submit = document.querySelector('#getLitter'); // get a reference to your submit button
  
    /*
        Let's get some data from the API - it will take a second or two to load
        This next line goes to the request for 'GET' in the file at /server/routes/foodServiceRoutes.js
        It's at about line 27 - go have a look and see what we're retrieving and sending back.
       */
    const results = await fetch('/getLitterAPI');
    const arrayFromJson = await results.json(); // here is where we get the data from our request as JSON
  
    /*
        Below this comment, we log out a table of all the results using "dot notation"
        An alternate notation would be "bracket notation" - arrayFromJson["data"]
        Dot notation is preferred in JS unless you have a good reason to use brackets
        The 'data' key, which we set at line 38 in foodServiceRoutes.js, contains all 1,000 records we need
      */
    console.table(arrayFromJson.data);
  
    // in your browser console, try expanding this object to see what fields are available to work with
    // for example: arrayFromJson.data[0].name, etc
    console.log(arrayFromJson.data[0]);
  
    // this is called "string interpolation" and is how we build large text blocks with variables
    console.log(
      `${arrayFromJson.data[0].name} ${arrayFromJson.data[0].category}`
    );
  
    // This IF statement ensures we can't do anything if we don't have information yet
    if (arrayFromJson.data.length > 0) {
      // the question mark in this means "if this is set at all"
      
      let currentList = [];
  
      form.addEventListener('input', (event) => {
        console.log(event.target.value);
        const newFilterList = filterList(currentList, event.target.value);
        injectHTML(newFilterList);
        markerPlace(newFilterList, map);
      });
  
      // And here's an eventListener! It's listening for a "submit" button specifically being clicked
      // this is a synchronous event event, because we already did our async request above, and waited for it to resolve
      form.addEventListener('generate', (submitEvent) => {
        // This is needed to stop our page from changing to a new URL even though it heard a GET request
        submitEvent.preventDefault();
  
        // This constant will have the value of your 15-restaurant collection when it processes
        currentList = processRestaurants(arrayFromJson.data);
  
        // And this function call will perform the "side effect" of injecting the HTML list for you
        injectHTML(currentList);
        markerPlace(currentList, map);
  
        // By separating the functions, we open the possibility of regenerating the list
        // without having to retrieve fresh data every time
        // We also have access to some form values, so we could filter the list based on name
      });
    }
  }
  
  /*
      This last line actually runs first!
      It's calling the 'mainEvent' function at line 57
      It runs first because the listener is set to when your HTML content has loaded
    */
  document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
  