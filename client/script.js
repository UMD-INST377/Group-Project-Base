/* eslint-disable max-len */

/*
  Hook this script to index.html
  by adding `<script src="script.js">` just before your closing `</body>` tag
*/

/*
  ## Utility Functions
    Under this comment place any utility functions you need - like an inclusive random number selector
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

// gets a random integer between two numbers
function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

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
  const range = [...Array(15).keys()]; // Special notation to create an array of 15 elements
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

// good programming practice: one idea per line
function filterList(array, filterInputValue) {
  const newArray = array.filter((item) => { // .filter(array) checks if true and adds the item to a new array
    if (!item.name) { return; }
    const lowerCaseName = item.name.toLowerCase();
    const lowerCaseQuery = filterInputValue.toLowerCase();
    return lowerCaseName.includes(lowerCaseQuery);
  });
  return newArray;
}

function initMap() {
  console.log('initMap');
  const map = L.map('map').setView([38.7849, -76.8721], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  return map;
}

function markerPlace(array, map) {
  console.log('markerPlace', array);
  // const marker = L.marker([51.5, -0.09]).addTo(map);
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      layer.remove();
    }
  });
  array.forEach((item, index) => {
    const {coordinates} = item.geocoded_column_1;
    L.marker([coordinates[1], coordinates[0]]).addTo(map);
    if (index === 0) {
      map.setView([coordinates[1], coordinates[0]], 10);
    }
  });
}

function initChart(chartTarget) {
  return new Chart(chartTarget, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

async function getData(submit) {
  const url = 'https://api.si.edu/openaccess/api/v1.0/search?q=q&api_key=v75sWiNNyg1QXFrgYo532qR0gwtYecj6kS8FtQBD'; // remote URL! you can test it in your browser
  const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
  const json = await data.json(); // the data isn't json until we access it using dot notation

  // chained filters check if item has both a location and a name
  const reply = json.filter((item) => Boolean(item.geocoded_column_1)).filter((item) => Boolean(item.name));
  return reply;
}

/*
    This function retrieves a list of artists that are related to the artist ID in the request
    Need to add a way for users to type in an artist's name and see a list of related artists
*/
async function getRelatedArtists() {
  const url = 'https://api.spotify.com/v1/artists/2wY79sveU1sp5g7SokKOiI/related-artists'; // remote URL! you can test it in your browser
  const data = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer BQBNwlyHGUNsBGnvuW4-d8yXJp8gPIip34MDzGwkHNFABpZ9YcpkvgGzEvjHVlYd53wz_WrEAZMVBRmY1v4_2psYmDBK4xFnwD34HpFAcJjoUZcdoSRiCB2Cbj8dgG-pDEIvb1wleXJ7z51lazQBNFp3cNuBho8h0FkD7Q'
    }
  }); // We're using a library that mimics a browser 'fetch' for simplicity
  const json = await data.json(); // the data isn't json until we access it using dot notation
  console.log(json);

  // chained filters check if item has both a location and a name
  //   const reply = json.filter((item) => Boolean(item.geocoded_column_1)).filter((item) => Boolean(item.name));
  return json;
}

async function mainEvent() {
  /*
      ## Main Event
        Separating your main programming from your side functions will help you organize your thoughts
        When you're not working in a heavily-commented "learning" file, this also is more legible
        If you separate your work, when one piece is complete, you can save it and trust it
    */
  //   const pageMap = initMap();
  // the async keyword means we can make API requests
  const oAuth = 'BQBNwlyHGUNsBGnvuW4-d8yXJp8gPIip34MDzGwkHNFABpZ9YcpkvgGzEvjHVlYd53wz_WrEAZMVBRmY1v4_2psYmDBK4xFnwD34HpFAcJjoUZcdoSRiCB2Cbj8dgG-pDEIvb1wleXJ7z51lazQBNFp3cNuBho8h0FkD7Q';
  const form = document.querySelector('.main_form'); // get your main form so you can do JS with it
  const submit = document.querySelector('#get-resto'); // get a reference to your submit button
  const loadAnimation = document.querySelector('.lds-ellipsis'); // get a reference to our loading animation
  const chartTarget = document.querySelector('#myChart');
  submit.style.display = 'none'; // let your submit button disappear

  initChart(chartTarget);

  /*
      Let's get some data from the API - it will take a second or two to load
      This next line goes to the request for 'GET' in the file at /server/routes/foodServiceRoutes.js
      It's at about line 27 - go have a look and see what we're retrieving and sending back.
     */

  const chartData = await getRelatedArtists();

  /*
      Below this comment, we log out a table of all the results using "dot notation"
      An alternate notation would be "bracket notation" - arrayFromJson["data"]
      Dot notation is preferred in JS unless you have a good reason to use brackets
      The 'data' key, which we set at line 38 in foodServiceRoutes.js, contains all 1,000 records we need
    */
  // console.table(arrayFromJson.data);

  // in your browser console, try expanding this object to see what fields are available to work with
  // for example: arrayFromJson.data[0].name, etc
  console.log(chartData[0]);

  // this is called "string interpolation" and is how we build large text blocks with variables
  console.log(`${chartData[0].name} ${chartData[0].category}`);

  // This IF statement ensures we can't do anything if we don't have information yet
  if (!chartData?.length) { return; } // Return if we have no data aka array has no length

  submit.style.display = 'block'; // let's turn the submit button back on by setting it to display as a block when we have data available

  // hides loading animation once data has been loaded
  loadAnimation.classList.remove('lds-ellipsis');
  loadAnimation.classList.add('lds-ellipsis_hidden');

  let currentList = []; // used by both event listeners, allows them to interact with each other

  form.addEventListener('input', (event) => { // event bubbling
    console.log('input', event.target.value); // <input> contents
    const newFilterList = filterList(currentList, event.target.value); // filters currentList
    injectHTML(newFilterList);
    // markerPlace(newFilterList, pageMap);
  });
  // And here's an eventListener! It's listening for a "submit" button specifically being clicked
  // this is a synchronous event event, because we already did our async request above, and waited for it to resolve
  form.addEventListener('submit', (submitEvent) => {
    // This is needed to stop our page from changing to a new URL even though it heard a GET request
    submitEvent.preventDefault();

    // This constant will have the value of your 15-restaurant collection when it processes
    currentList = processRestaurants(chartData);
    console.log(currentList);

    // And this function call will perform the "side effect" of injecting the HTML list for you
    injectHTML(currentList);
    // markerPlace(currentList, pageMap);

    // By separating the functions, we open the possibility of regenerating the list
    // without having to retrieve fresh data every time
    // We also have access to some form values, so we could filter the list based on name
  });
}

/*
    This last line actually runs first!
    It's calling the 'mainEvent' function at line 57
    It runs first because the listener is set to when your HTML content has loaded
  */
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
