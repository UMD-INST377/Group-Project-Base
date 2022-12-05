/* eslint-disable max-len */
// fixing merge head
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
    if (!item.last_name) { return; }
    const lowerCaseName = `${item.player.first_name} ${item.player.last_name} ${item.player.position}`.toLowerCase(); // name appears again maybe lastname
    const lowerCaseQuery = filterInputValue.toLowerCase();
    return lowerCaseName.includes(lowerCaseQuery);
  });
}

function initChart(chart, object) {
  const labels = Object.keys(object);

  const info = Object.keys(object).map((item) => object[item].length);

  const data = {
    labels: labels,
    datasets: [{
      label: 'NBA 3 pointers made in 2022 per player',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: info
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      indexAxis: 'y'
    }
  };

  return new Chart(
    chart,
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

function shapeDataForBarChart(array) {
  return array.reduce((collection, item) => {
    if (!collection[item.fg3m]) {
      collection[item.fg3m] = [item];
    } else {
      collection[item.fg3m].push(item);
    }
    return collection;
  }, {});
}

async function nbaData() {
  const url = 'https://www.balldontlie.io/api/v1/stats?per_page=100&seasons[]=2022'; // Data goes here
  const data = await fetch(url);
  const json = await data.json();
  console.log(json);
  return json;
}

async function mainEvent() {
  const form = document.querySelector('.main_form'); // get your main form
  const submit = document.querySelector('#get-resto'); // reference tosubmit button
  const loadAnimation = document.querySelector('.lds-ellipsis');
  const chartTarget = document.querySelector('#myChart');
  submit.style.display = 'none'; // submit button disappear

  /* API data request await */

  const chartData = await nbaData();
  console.log(chartData.data);
  const shapedData = shapeDataForBarChart(chartData.data);
  const myChart = initChart(chartTarget, shapedData);

  console.log(`${chartData.data[0].player.first_name} ${chartData.data[0].player.last_name}`);

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
    const localData = shapeDataForBarChart(chartData.data);
    changeChart(myChart, localData);
    // markerPlace(filteredList, pageMap);
  });

  form.addEventListener('submit', (submitEvent) => {
    // This is needed to stop our page from changing to a new URL even though it heard a GET request
    submitEvent.preventDefault();

    // This constant will have the value of your 15-restaurant collection when it processes
    currentList = processPlayers(chartData.data);
    console.log(currentList);

    // And this function call will perform the "side effect" of injecting the HTML list for you
    injectHTML(currentList);
    const localData = shapeDataForBarChart(chartData.data);
    changeChart(myChart, localData);
    // markerPlace(currentList, pageMap);
  });
}
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
