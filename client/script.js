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
const apiURL = 'https://api.spotify.com/v1/';

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

function injectHTML(list, divTarget) {
  console.log('fired injectHTML');
  const target = document.querySelector(divTarget);
  target.innerHTML = '';
  const listEl = document.createElement('ol');
  target.appendChild(listEl);
  list.forEach((item) => {
    const el = document.createElement('li');
    const image = document.createElement('img');
    const anchor = document.createElement('a');
    image.src = item.images[2].url;
    anchor.href = item.external_urls.spotify;
    anchor.innerText = item.name;
    el.appendChild(image);
    el.appendChild(anchor);
    listEl.appendChild(el);
    // console.log(item.name);
  });
}

function injectSearchResults(list, divTarget) {
  console.log('fired injectSearchResults');
  const target = document.querySelector(divTarget);
  target.innerHTML = '';
  const listEl = document.createElement('ol');
  target.appendChild(listEl);
  list.forEach((item) => {
    const el = document.createElement('li');
    const image = document.createElement('img');
    const anchor = document.createElement('a');
    image.src = item.images[2].url;
    anchor.href = item.external_urls.spotify;
    anchor.innerText = item.name;
    el.appendChild(image);
    el.appendChild(anchor);
    listEl.appendChild(el);
    // console.log(item.name);
  });
}

function processRestaurants(list) {
  console.log('fired restaurants list');
  const range = [...Array(15).keys()]; // Special notation to create an array of 15 elements
  const newArray = range.map((item) => {
    const index = getRandomIntInclusive(0, list.length - 1);
    console.log(list[index]);
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

async function searchArtists(term, token) {
  const search = encodeURIComponent(term);
  console.log(search);
  const url = `${apiURL}search?q=${search}&type=artist&limit=5`;
  console.log(url);
  const data = await fetch(url, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  const json = await data.json();
  console.log(json.artists.items);
  return json.artists; // object containing, among other things, an array of artists
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

function generateRandomString() {
  const array = new Uint32Array(1);
  self.crypto.getRandomValues(array);

  return array[0];
}

async function getData(submit) {
  const url = 'https://api.si.edu/openaccess/api/v1.0/search?q=q&api_key=v75sWiNNyg1QXFrgYo532qR0gwtYecj6kS8FtQBD'; // remote URL! you can test it in your browser
  const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
  const json = await data.json(); // the data isn't json until we access it using dot notation

  // chained filters check if item has both a location and a name
  const reply = json.filter((item) => Boolean(item.geocoded_column_1)).filter((item) => Boolean(item.name));
  return reply;
}

// This function retrieves the access token from Spotify
// Used the "Client Credentials Flow" on Spotify API
// Problem with Buffer module. Browser doesn't recognize it, but won't let me import it
// Current workaround for Buffer problem - used an online base64 encoder and manually encoded the client ID and secret key
async function getAccessToken() {
  const clientBase64 = 'YzkyNzBhMTIzYjJjNDA4ZmE5ZDc2NmNkMDBlOTY5ZjI6OTc4YmY5YTJmMmVjNDU4NDk2NmFjYzhiN2ZlMDYxNjg=';
  const url = 'https://accounts.spotify.com/api/token';
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Basic ${clientBase64}`);
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
  myHeaders.append('Cookie', '__Host-device_id=AQBrEpG1cy0DhOXDyzabACYbb5SZKeLLWNMCoH4UJHKKW0CVBslV9tFnuaXGti78fRhIEXO512-5ZA35sx_VKqoJRO67Dd80T08; sp_tr=false');

  const urlencoded = new URLSearchParams();
  urlencoded.append('grant_type', 'client_credentials');

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };
  const reply = await fetch(url, requestOptions);
  const json = await reply.json();
  console.log(json.access_token);
  return json.access_token;
}

/*
    This function retrieves a list of artists that are related to the artist ID in the request
    Need to add a way for users to type in an artist's name and see a list of related artists
*/
async function getRelatedArtists(token, id) {
  const url = `https://api.spotify.com/v1/artists/${id}/related-artists`; // remote URL! you can test it in your browser
  const data = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }); // We're using a library that mimics a browser 'fetch' for simplicity
  const json = await data.json(); // the data isn't json until we access it using dot notation
  console.log(json);

  // getRelatedArtists returns a json containing an array, but only the array is returned
  return json.artists;
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
  const form = document.querySelector('.main_form'); // get your main form so you can do JS with it
  const submit = document.querySelector('#get-resto'); // get a reference to your submit button
  const loadAnimation = document.querySelector('.lds-ellipsis'); // get a reference to our loading animation
  const chartTarget = document.querySelector('#myChart');
  let artists = [];
  submit.style.display = 'none'; // let your submit button disappear

  initChart(chartTarget);

  /*
      Let's get some data from the API - it will take a second or two to load
      This next line goes to the request for 'GET' in the file at /server/routes/foodServiceRoutes.js
      It's at about line 27 - go have a look and see what we're retrieving and sending back.
     */
  const token = await getAccessToken();
  let chartData;

  /*
      Below this comment, we log out a table of all the results using "dot notation"
      An alternate notation would be "bracket notation" - arrayFromJson["data"]
      Dot notation is preferred in JS unless you have a good reason to use brackets
      The 'data' key, which we set at line 38 in foodServiceRoutes.js, contains all 1,000 records we need
    */

  // in your browser console, try expanding this object to see what fields are available to work with
  // for example: arrayFromJson.data[0].name, etc

  // this is called "string interpolation" and is how we build large text blocks with variables

  // This IF statement ensures we can't do anything if we don't have information yet
  // if (!chartData.length) { return; } // Return if we have no data aka array has no length

  submit.style.display = 'block'; // let's turn the submit button back on by setting it to display as a block when we have data available

  // hides loading animation once data has been loaded
  loadAnimation.classList.remove('lds-ellipsis');
  loadAnimation.classList.add('lds-ellipsis_hidden');

  form.addEventListener('input', async (event) => { // event bubbling
    console.log('input', event.target.value); // <input> contents
    const searchQuery = event.target.value;
    const searchResults = await searchArtists(searchQuery, token); // json containing an array containing artists
    artists = searchResults.items;
    console.log(artists);

    injectHTML(artists, '#results');
  });
  // And here's an eventListener! It's listening for a "submit" button specifically being clicked
  // this is a synchronous event event, because we already did our async request above, and waited for it to resolve
  form.addEventListener('submit', async (submitEvent) => {
    // This is needed to stop our page from changing to a new URL even though it heard a GET request
    submitEvent.preventDefault();
    chartData = await getRelatedArtists(token, artists[0].id);
    console.log(chartData);
    console.log(artists[0].id);
    injectHTML(chartData, '#restaurant_list');

    // This constant will have the value of your 15-restaurant collection when it processes
    // currentList = processRestaurants(chartData);
    // console.log(currentList);

    // And this function call will perform the "side effect" of injecting the HTML list for you
    // injectHTML(chartData);
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
