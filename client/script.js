/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
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

function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + newMin); // The maximum is inclusive and the minimum is inclusive
}

function injectHTML(list) {
  console.log('fired injectHTML');
  const target = document.querySelector('#restaurant_list');
  target.innerHTML = '';

  const listEl = document.createElement('ol');
  target.appendChild(listEl);

  list.forEach((item) => {
    const el = document.createElement('li');
    el.innerText = item.clearance_code_inc_type;
    listEl.appendChild(el);
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
  const range = [...Array(15).keys()];
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
  return newArray = array.filter((item) => {
    if (!item.clearance_code_inc_type) { return; }
    const lowerCaseName = item.clearance_code_inc_type.toLowerCase();
    const lowerCaseQuery = filterInputValue.toLowerCase();
    return lowerCaseName.includes(lowerCaseQuery);
  });
}

function initMap() {
  // so much so familiar, but we will need this to inject markers later!
  console.log('initMap');
  const map = L.map('map').setView([38.7849, -76.8721], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  return map;
}

function markerPlace(array, map) {
  // console.log('makerPlace', array);
  // const marker = L.marker([51.5, -0.09]).addTo(map);
  // Leaflet can be a bit old-fashioned.
  // Here's some code to remove map markers.
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      layer.remove();
    }
  });
  array.forEach((item, index) => {
    // const {coordinates} = item.location;
    // console.log(item.location.latitude);
    L.marker([item.location.latitude, item.location.longitude], {alt: item.street_address}).addTo(map).bindPopup(item.street_address);
    if (index === 0) {
      map.setView([item.location.latitude, item.location.longitude], 10);
    }
  });
}

function initChart(chart, object) {
  const labels = Object.keys(object);

  const info = labels.map((item) => object[item].length);

  const data = {
    labels: labels,
    datasets: [{
      label: 'Different type of Crime',
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      data: info
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };
  return new Chart(
    chart,
    config
  );
}

function changeChart(chart, dataObject) {
  const labels = Object.keys(dataObject);
  const info = Object.keys(dataObject).map((item) => dataObject[item].length);

  console.log('Newdata', labels, info);

  chart.data.labels = labels;
  chart.data.datasets.forEach((set) => {
    set.data = info;
    return set;
  });
  chart.update();
}
function shapeDataForLineChart(array) {
  return array.reduce((collection, item) => {
    if (!collection[item.clearance_code_inc_type]) {
      collection[item.clearance_code_inc_type] = [item];
    } else {
      collection[item.clearance_code_inc_type].push(item);
    }
    return collection;
  }, {});
}
async function mainEvent() {
  /*
        ## Main Event
          Separating your main programming from your side functions will help you organize your thoughts
          When you're not working in a heavily-commented "learning" file, this also is more legible
          If you separate your work, when one piece is complete, you can save it and trust it
      */
  const pageMap = initMap();
  // the async keyword means we can make API requests
  const form = document.querySelector('.main_form'); // get your main form so you can do JS with it
  const submit = document.querySelector('#get-resto'); // get a reference to your submit button
  const loadAnimation = document.querySelector('.lds-ellipsis');
  const ctx = document.querySelector('#myChart');
  submit.style.display = 'none'; // let your submit button disappear

  /*
        Let's get some data from the API - it will take a second or two to load
        This next line goes to the request for 'GET' in the file at /server/routes/foodServiceRoutes.js
        It's at about line 27 - go have a look and see what we're retrieving and sending back.
       */
  // const results = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
  // const arrayFromJson = await results.json(); // here is where we get the data from our request as JSON

  const url = 'https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json'; // remote URL
  const results = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
  const reply = await results.json(); // the data isn't json until we access it using dot notation
  const arrayFromJson = reply.filter((item) => Boolean(item.location)).filter((item) => Boolean(item.clearance_code_inc_type));

  const shapedData = shapeDataForLineChart(arrayFromJson);
  // console.log(shapedData);
  const myChart = initChart(ctx, shapedData);
  /*
        Below this comment, we log out a table of all the results using "dot notation"
        An alternate notation would be "bracket notation" - arrayFromJson["data"]
        Dot notation is preferred in JS unless you have a good reason to use brackets
        The 'data' key, which we set at line 38 in foodServiceRoutes.js, contains all 1,000 records we need
      */
  console.table(arrayFromJson[0]);

  // in your browser console, try expanding this object to see what fields are available to work with
  // for example: arrayFromJson.data[0].name, etc
  // console.log(arrayFromJson[0]);

  // This IF statement ensures we can't do anything if we don't have information yet
  if (arrayFromJson?.length > 0) { // the question mark in this means "if this is set at all"
    submit.style.display = 'block'; // let's turn the submit button back on by setting it to display as a block when we have data available
    loadAnimation.classList.remove('lds-ellipsis');
    loadAnimation.classList.add('lds-ellipsis_hidden');

    let currentList = [];

    form.addEventListener('input', (event) => {
      console.log(event.target.value);
      const filteredList = filterList(currentList, event.target.value);
      injectHTML(filteredList);
      markerPlace(filteredList, pageMap);
      const localData = shapeDataForLineChart(filteredList);
      changeChart(myChart, localData);
    });

    // And here's an eventListener! It's listening for a "submit" button specifically being clicked
    // this is a synchronous event event, because we already did our async request above, and waited for it to resolve
    form.addEventListener('submit', (submitEvent) => {
      // This is needed to stop our page from changing to a new URL even though it heard a GET request
      submitEvent.preventDefault();

      // This constant will have the value of your 15-restaurant collection when it processes
      currentList = processRestaurants(arrayFromJson);
      console.log(currentList);

      // And this function call will perform the "side effect" of injecting the HTML list for you
      injectHTML(currentList);
      markerPlace(currentList, pageMap);
      const localData = shapeDataForLineChart(currentList);
      changeChart(myChart, localData);

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
