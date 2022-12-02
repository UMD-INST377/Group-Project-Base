function getRandomInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

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

function processCrimes(list) {
  console.log('fired crime list');
  const range = [...Array(15).keys()]; // Special notation to create an array of 15 elements
  const newArray = range.map((item) => {
    const index = getRandomInclusive(0, list.length);
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

function initChart(chart, object) {
  const labels = Object.keys(object);
  const info = Object.keys(object).map((item) => object[item].length);

  const data = {
    labels: labels,
    datasets: [{
      label: 'Crimes By Category',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132',
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
  console.log(dataObject);
  const labels = Object.keys(dataObject);
  const info = Object.keys(dataObject).map((item) => dataObject[item].length);

  // console.log('newData', labels, info);
  chart.data.labels = labels;
  chart.data.datasets.forEach((set) => {
    set.data = info;
    return set;
  });

  chart.update();
}

function shapeDataForLineChart(array) {
  return array.reduce((collection, item) => {
    if (!collection[item.category]) {
      collection[item.category] = [item];
    } else {
      collection[item.category].push(item);
    }
    return collection;
  }, {});
}

async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json'; // remote URL! you can test it in your browser
  const data = await fetch(url, options); // We're using a library that mimics a browser 'fetch' for simplicity
  const json = await data.json(); // the data isn't json until we access it using dot notation
  const reply = json.filter((item) => Boolean(item.geocoded_column_1)).filter((item) => Boolean(item.name));
  return reply;
}

function filterList(list, filterInputValue) {
  return list.filter((item) => {
    if (!item.name) { return; }
    const lowerCaseName = item.name.toLowerCase();
    const lowerCaseQuery = filterInputValue.toLowerCase();
    return lowerCaseName.includes(lowerCaseQuery);
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
    const {coordinates} = item.geocoded_column_1;
    L.marker([coordinates[1], coordinates[0]]).addTo(map);
    if (index === 0) {
      map.setView([coordinates[1], coordinates[0]], 10);
    }
  });
}

async function mainEvent() {
  /*
      ## Main Event
        Separating your main programming from your side functions will help you organize your thoughts
        When you're not working in a heavily-commented "learning" file, this also is more legible
        If you separate your work, when one piece is complete, you can save it and trust it
    */

  // const pageMap = initMap();

  // the async keyword means we can make API requests
  const form = document.querySelector('.main_form'); // get your main form so you can do JS with it
  const submit = document.querySelector('#get-resto'); // get a reference to your submit button
  const loadAnimation = document.querySelector('.lds-ellipsis'); // get a reference to our loading animation
  const chartTarget = document.querySelector('#myChart');
  submit.style.display = 'none'; // let your submit button disappear

  const chartData = await getData();
  const shapedData = shapeDataForLineChart(chartData);
  const myChart = initChart(chartTarget, shapedData);

  // This IF statement ensures we can't do anything if we don't have information yet
  if (!chartData?.length > 0) { return; } // Return if we have no data!

  submit.style.display = 'block'; // let's turn the submit button back on by setting it to display as a block when we have data available

  // Let's hide the load button now that we have some data to manipulate
  loadAnimation.classList.remove('lds-ellipsis');
  loadAnimation.classList.add('lds-ellipsis_hidden');

  let currentList = [];

  form.addEventListener('input', (event) => {
    console.log(event.target.value);
    const filteredList = filterList(currentList, event.target.value);
    injectHTML(filteredList);
    const localData = shapeDataForLineChart(filterList);
    changeChart(myChart, localData);
  });

  // And here's an eventListener! It's listening for a "submit" button specifically being clicked
  // this is a synchronous event event, because we already did our async request above, and waited for it to resolve
  form.addEventListener('submit', (submitEvent) => {
    submitEvent.preventDefault();

    // This constant will have the value of your 15-restaurant collection when it processes
    currentList = processCrimes(chartData);

    // And this function call will perform the "side effect" of injecting the HTML list for you
    injectHTML(currentList);
    const localData = shapeDataForLineChart(currentList);
    changeChart(myChart, localData);

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
