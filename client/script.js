/* eslint-disable max-len */
/* eslint linebreak-style: ["error", "windows"] */

function getRandomIntInclusive(min, max) {
  const newmin = Math.ceil(min);
  const newmax = Math.floor(max);
  return Math.floor(Math.random() * (newmax - newmin + 1) + newmin); // The maximum is inclusive and the minimum is inclusive
}

function processData(list) {
  console.log('fired trashdata list');
  const range = [...Array(15).keys()]; // special notation to create an array of 15 elements
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
    const lowerCaseName = item.name.toLowerCase();
    const lowerCaseQuery = filterInputValue.toLowerCase();
    return lowerCaseName.includes(lowerCaseQuery);
  });
}

function initChart(targetElement, dataObject) {
  const labels = Object.keys(dataObject);
  const info = Object.keys(dataObject).map((item) => dataObject[item].length);

  const data = {
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  };
  /*
  const data = {
    labels: labels,
    datasets: [{
      label: 'Polar Chart',
      data: info,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  };
  */

  const config = {
    type: 'polarArea',
    data: data,
    options: {}
  };

  return new Chart(
    targetElement,
    config
  );
}

function changeChart(chart, dataObject) {
  const labels = Object.keys(dataObject);
  const info = Object.keys(dataObject).map((item) => dataObject[item].length);

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

function initMap() {
  const map = L.map('map').setView([38.8911, -76.8848], 10);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  return map;
}

function markerPlace(array, map) {
  console.log('markerPlace', array);
  const marker = L.marker([38.8911, -76.8848]).addTo(map);


/*for(let x =0;x<array.length;x++){
if(array[x].zipcode==20740){
  var marker = L.marker([38.8911, -76.8848]).addTo(map);

}
if(array[x].zipcode==20740){
  var marker = L.marker([38.8911, -76.8848]).addTo(map);

}
}
*/
  /*
  console.log('markerPlace', array);
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      layer.remove();
    }
  });

  array.forEach((item, index) => {
    const coordinates = item.geocoded_column;
    L.marker(latitude, longitude).addTo(map);
    if (index === 0) {
      map.setView(latitude, longitude, 10);
    }
  });
  */
}

async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json';
  const data = await fetch(url);
  const json = await data.json();
  const reply = json.filter((item) => Boolean(item.geocoded_column)).filter((item) => Boolean(item.name));
  return reply;
}

async function mainEvent() {
  const pageMap = initMap();
  const form = document.querySelector('.main_form');
  const submit = document.querySelector('#get-trash');
  // const year = document.querySelector('#year');
  // const chartTarget = document.querySelector('#myChart');

  const chartData = await getData();
  // const shapedData = shapeDataForLineChart(chartData);
  // const myChart = (chartTarget, shapedData);

  /*
  form.addEventListener('submit', async (submitEvent) => {
    submitEvent.preventDefault();
  });
  */

  if (chartData?.length > 0) {
    submit.style.display = 'block'; // let's turn the submit button back on by setting it to display as a block when we have data available
    let currentList = [];

    form.addEventListener('input', (event) => {
      console.log(event.target.value);
      const newFilterList = filterList(currentList, event.target.value);
      // injectHTML(newFilterList);
      markerPlace(newFilterList, pageMap);
    });

    // And here's an eventListener! It's listening for a "submit" button specifically being clicked
    // this is a synchronous event event, because we already did our async request above, and waited for it to resolve
    form.addEventListener('submit', (submitEvent) => {
    // This is needed to stop our page from changing to a new URL even though it heard a GET request
      submitEvent.preventDefault();

      // This constant will have the value of your 15-restaurant collection when it processes
      currentList = processData(chartData);
      // console.log(currentList);

      // And this function call will perform the "side effect" of injecting the HTML list for you
      // const localData = shapeDataForLineChart(currentList);
      // changeChart(myChart, localData);
      // injectHTML(currentList);
      markerPlace(currentList, pageMap);

    // By separating the functions, we open the possibility of regenerating the list
    // without having to retrieve fresh data every time
    // We also have access to some form values, so we could filter the list based on name
    });
  }
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());