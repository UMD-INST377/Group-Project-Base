/* eslint-disable max-len */

// import { response } from "express";

// import { response } from 'express';

// import { response } from "express";

// import { response } from 'express';

/*
  Hook this script to index.html
  by adding `<script src="script.js">` just before your closing `</body>` tag
*/

/*
    Under this comment place any utility functions you need - like an inclusive random number selector
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
// This is how we are going to get a random player from our list of 41
function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
}
function injectHTML(list) {
  console.log('fired injectHTML');
  const target = document.querySelector('#player_list');
  target.innerHTML = '';

  const listEl = document.createElement('ol');
  target.appendChild(listEl);

  list.forEach((item) => {
    const el = document.createElement('li');
    el.innerText = `${item.player.first_name} ${item.player.last_name} ${item.player.position}`; // maybe change this to lastname? however name should work
    listEl.appendChild(el);
  });
  /*
        JS and HTML Injection
          There are a bunch of methods to inject text or HTML into a document using JS
          Mainly, they're considered "unsafe" because they can spoof a page pretty easily
          But they're useful for starting to understand how websites work
          the usual ones are element.innerText and element.innerHTML
          Here's an article on the differences if you want to know more:

        What to do in this function
          - Accept a list of restaurant objects
          - using a .forEach method, inject a list element into your index.html for every element in the list
          - Display the name of that restaurant and what category of food it is
      */
}

function processPlayers(list) {
  console.log('fired Players list');
  const range = [...Array(15).keys()];
  const newArray = range.map((item) => {
    const index = getRandomIntInclusive(0, list.length);
    return list[index];
  });
  return newArray;

  /*
          Process Data Separately From Injecting It
            This function should accept your 1,000 records
            then select 15 random records
            and return an object containing only the restaurant's name, category, and geocoded location
            So we can inject them using the HTML injection function

            You can find the column names by carefully looking at your single returned record
            https://data.princegeorgescountymd.gov/Health/Food-Inspection/umjn-t2iz

          What to do in this function:

          - Create an array of 15 empty elements (there are a lot of fun ways to do this, and also very basic ways)
          - using a .map function on that range,
          - Make a list of 15 random restaurants from your list of 100 from your data request
          - Return only their name, category, and location
          - Return the new list of 15 restaurants so we can work on it separately in the HTML injector
        */
}

function filterList(array, filterInputValue) {
  return array.filter((item) => {
    if (!item.player.last_name) { return; }
    const lowerCaseName = `${item.player.first_name} ${item.player.last_name} ${item.player.position}`.toLowerCase(); // name appears again maybe lastname
    const lowerCaseQuery = filterInputValue.toLowerCase();
    return lowerCaseName.includes(lowerCaseQuery);
  });
}
function shapeLabelsForBarChart(array) {
  const completeArrayOfPlayers = array.map((subArray) => subArray
    .filter((item) => item.player.last_name) // only return it if we have players
    .map((item) => item.player.last_name));// return the player information
  return completeArrayOfPlayers;
}

// array.forEach(((subArray) => {
//   subArray.forEach((item) => {
//     console.log(item.player?.last_name);
//     return item.player?.last_name;
//   });
// }));

function initChart(chart, dataObject) {
  const relabel = Object.values(dataObject);
  const labels = shapeLabelsForBarChart(relabel);
  console.log(relabel);
  console.log(labels);
  console.log(dataObject['0'][0].player.last_name);

  const info = Object.keys(dataObject).map((item) => dataObject[item].length);

  const data = {
    labels: labels,
    datasets: [{
      label: 'NBA 3 point fg percentage made in 2022 Opening Night',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: info
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      indexAxis: 'x'
    }
  };

  return new Chart(
    chart,
    config
  );
}

function changeChart(chart, dataObject) {
  const relabel = Object.values(dataObject);
  const labels = shapeLabelsForBarChart(relabel);

  const info = Object.keys(dataObject).map((item) => dataObject[item].length); // .length?

  chart.data.labels = labels;
  console.log(labels);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(info);
  });
  chart.update();
}

function shapeDataForBarChart(array) {
  return array.reduce((collection, item) => {
    if (!collection[item.reb]) {
      collection[item.reb] = [item];
    } else {
      collection[item.reb].push(item);
    }
    // console.log(collection);
    return collection;
  }, {});
}

async function nbaData() {
  const url = 'https://www.balldontlie.io/api/v1/stats?per_page=100&seasons[]=2022'; // Data goes here https://www.balldontlie.io/api/v1/stats?per_page=100&seasons[]=2022
  const data = await fetch(url);
  const json = await data.json();
  console.log(json);
  return json;
}

async function mainEvent() {
  // the async keyword means we can make API requests
  const form = document.querySelector('.main_form'); // get your main form so you can do JS with it
  const submit = document.querySelector('#get-resto'); // get a reference to your submit button
  const loadAnimation = document.querySelector('.lds-ellipsis');
  const chartTarget = document.querySelector('#myChart');
  submit.style.display = 'none'; // let your submit button disappear

  /* New API data request */

  const chartData = await nbaData();
  console.log(chartData.data);
  const shapedData = shapeDataForBarChart(chartData.data);
  // const shapedLabels = shapeLabelsForBarChart(chartData.data);
  console.log(shapedData);
  const myChart = initChart(chartTarget, shapedData);

  /*
          Below this comment, we log out a table of all the results using "dot notation"
          An alternate notation would be "bracket notation" - arrayFromJson["data"]
          Dot notation is preferred in JS unless you have a good reason to use brackets
          The 'data' key, which we set at line 38 in foodServiceRoutes.js, contains all 1,000 records we need
        */
  // console.table(arrayFromJson.data);

  // in your browser console, try expanding this object to see what fields are available to work with
  // for example: arrayFromJson.data[0].name, etc

  // this is called "string interpolation" and is how we build large text blocks with variables

  // This IF statement ensures we can't do anything if we don't have information yet
  if (!chartData.data?.length) { return; } // Return if no data
  let currentList = [];

  submit.style.display = 'block';
  loadAnimation.classList.remove('lds-ellipsis');
  loadAnimation.classList.add('lds-ellipsis_hidden');

  form.addEventListener('input', (event) => {
    console.log('input', event.target.value);
    const filteredList = filterList(currentList, event.target.value);
    injectHTML(filteredList);
    const localData = shapeDataForBarChart(filteredList);
    // const localLabels = shapeLabelsForBarChart(chartData.data);
    changeChart(myChart, localData);
    // changeChart(myChart, localLabels);
  });

  // And here's an eventListener! It's listening for a "submit" button specifically being clicked
  // this is a synchronous event event, because we already did our async request above, and waited for it to resolve
  form.addEventListener('submit', (submitEvent) => {
    // This is needed to stop our page from changing to a new URL even though it heard a GET request
    submitEvent.preventDefault();

    currentList = processPlayers(chartData.data);
    console.log(currentList);
    injectHTML(currentList);
    const localData = shapeDataForBarChart(currentList);
    changeChart(myChart, localData);
  });
}

/*
        This last line actually runs first!
        It's calling the 'mainEvent' function at line 57
        It runs first because the listener is set to when your HTML content has loaded
      */
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
