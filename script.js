/* eslint-disable max-len */

// import { response } from "express";

// import { response } from 'express';

// import { response } from "express";

// import { response } from 'express';

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
}

function processPlayers(list) {
  console.log('fired Players list');
  const range = [...Array(15).keys()];
  const newArray = range.map((item) => {
    const index = getRandomIntInclusive(0, list.length);
    return list[index];
  });
  return newArray;
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

function shapeDataForAttempted(array) {
  const completeArrayOfPct = array.map((item) => item.fg3m);
  return completeArrayOfPct;
}

function shapeDataForMade(array) {
  const completeArrayOfPct = array.map((item) => item.fg3a);
  return completeArrayOfPct;
}

function initScatter(chart, dataObject) {
  const intialData = Object.values(dataObject);
  console.log(intialData);
  const labels = 'na';

  const x = intialData[1];
  const y = intialData[0];

  const scatterArray = x.map((xvalue, index) => {
    const scatterObject = {};
    scatterObject.x = xvalue;
    scatterObject.y = y[index];
    return scatterObject;
  });

  console.log(scatterArray);

  const data = {
    labels: labels,
    datasets: [{
      label: 'Made vs Attempted',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: scatterArray
    }]
  };

  const config = {
    type: 'scatter',
    data: data,
    options: {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom'
        }
      }
    }
  };

  return new Chart(
    chart,
    config
  );
}

function shapeDataForFg3mBarChart(array) {
  return array.reduce((collection, item) => {
    if (!collection[item.fg3m]) {
      collection[item.fg3m] = [item];
    } else {
      collection[item.fg3m].push(item);
    }
    return collection;
  }, {});
}

function shapeDataForBarChart(array) {
  const allThreeData = array.filter((item => item.fg3m));
  console.log(allThreeData)
  return allThreeData;
}

function initBarChart(chart, dataObject) {
  const intialData = Object.values(dataObject);
  console.log(dataObject);
  const labels = shapeLabelsForBarChart(intialData);
  console.log(labels);
  console.log(dataObject['0'][0].player.last_name);

  const info = Object.keys(dataObject);
  console.log(info);

  // const x = intialData[0];
  // console.log(intialData);
  // const y = intialData[1];

  // const barArray = x.map((xvalue, index) => {
  //   const barObject = {};
  //   barObject.x = xvalue;
  //   barObject.y = y[index];
  //   return barObject;
  // });

  const data = {
    labels: labels,
    datasets: [{
      label: 'NBA 3 pointers made in 2022 Opening Night',
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
  const intialData = Object.values(dataObject);
  console.log(dataObject);
  const labels = shapeLabelsForBarChart(intialData);
  console.log(labels);
  console.log(dataObject['0'][0].player.last_name);

  const info = Object.keys(dataObject);
  console.log(info);

  chart.data.labels = labels;
  console.log(labels);
  chart.data.datasets.forEach((dataset) => {
    dataset.data = info;
  });
  chart.update();
}

function changeScatter(chart, dataObject) {
  const intialData = Object.values(dataObject);
  console.log(intialData);
  const labels = 'na';

  const x = intialData[1];
  const y = intialData[0];

  const scatterArray = x.map((xvalue, index) => {
    const scatterObject = {};
    scatterObject.x = xvalue;
    scatterObject.y = y[index];
    return scatterObject;
  });
  chart.data.labels = labels;
  console.log(labels);
  chart.data.datasets.forEach((dataset) => {
    dataset.data = scatterArray;
  });
  chart.update();
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
  const chartTarget2 = document.querySelector('#myChart2');
  submit.style.display = 'none'; // let your submit button disappear

  /* New API data request */

  const chartData = await nbaData();
  console.log(chartData.data);
  const fg3mData = shapeDataForFg3mBarChart(chartData.data);
  const scatterData = [shapeDataForAttempted(chartData.data), shapeDataForMade(chartData.data)];
  console.log(scatterData);
  const myChart = initBarChart(chartTarget, fg3mData);
  const scatter = initScatter(chartTarget2, scatterData);

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
    const localFg3mData = shapeDataForFg3mBarChart(filteredList);
    const localScatterData = [shapeDataForMade(filteredList), shapeDataForAttempted(filteredList)];
    // const localLabels = shapeLabelsForBarChart(chartData.data);
    changeChart(myChart, localFg3mData);
    changeScatter(scatter, localScatterData);
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
    const localFg3mData = shapeDataForFg3mBarChart(currentList);
    const localScatterData = [shapeDataForMade(currentList), shapeDataForAttempted(currentList)];
    // const localLabels = shapeLabelsForBarChart(chartData.data);
    changeChart(myChart, localFg3mData);
    changeScatter(scatter, localScatterData);
  });
}

/*
        This last line actually runs first!
        It's calling the 'mainEvent' function at line 57
        It runs first because the listener is set to when your HTML content has loaded
      */
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
