/* eslint-disable max-len */

/* 84LR83Ksyc2P3O19GyzXILSkd
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
    el.innerText = `${item.clearance_code_inc_type} On ${item.date.slice(0, 10)}`;
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
  console.log('fired incident list');
  const range = [...Array(15).keys()];
  const newArray = range.map((item) => {
    const index = getRandomIntInclusive(0, list.length - 1);
    return list[index];
  });
  return newArray;
}

function filterList(array, filterInputValue) {
  return array.filter((item) => {
    if (!item.date || !item.clearance_code_inc_type) { return; }
    const lowerCaseName = item.clearance_code_inc_type.toLowerCase();
    const lowerCaseQuery = filterInputValue.toLowerCase();
    const str = ` ${item.date}${lowerCaseName} `;
    return str.includes(lowerCaseQuery);
  });
}

function initMap() {
  console.log('initMap');
  const map = L.map('map').setView([38.9897, -76.9378], 12);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  return map;
}

function makerPlace(array, map) {
  console.log('markerPlace', array);
  const marker = L.marker([51.5, -0.09]).addTo(map);

  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      layer.remove();
    }
  });
  array.forEach((item, index) => {
    const { coordinates } = item.geocoded_column_1;
    L.marker([coordinates[1], coordinates[0]]).addTo(map);
    if (index === 0) {
      map.setView([coordinates[1], coordinates[0]]);
    }
  });
}

function radarChart(chart, object) {
  const data = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };
}

function initChartAvg(chart, tot2017, tot2018, tot2019, tot2020, tot2021, tot2022) {
  const ctx2 = document.getElementById('myChartAvg');
  return new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: [
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022'
      ],
      datasets: [{
        label: 'Trend Of Crime',
        data: [tot2017, tot2018, tot2019, tot2020, tot2021, tot2022],
        backgroundColor: [
          'blue',
          'red',
          'grey',
          'green',
          'orange',
          'purple'
        ],
        hoverOffset: 50,
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        pointHoverBackgroundColor: 100
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Crime Totals Over 5 Years',
          padding: {
            top: 10,
            bottom: 30
          },
          color: 'white'
        }
      }
    }

  });
}

function initChart(chart, object2017, object2018, object2019, object2020, object2021, object2022) {
  const ctx = document.getElementById('myChart');

  const lab2017 = Object.keys(object2017);
  const info2017 = Object.keys(object2017).map((item) => object2017[item].length);
  console.log(object2017);

  const lab2018 = Object.keys(object2018);
  const info2018 = Object.keys(object2018).map((item) => object2018[item].length);
  console.log(object2018);

  const lab2019 = Object.keys(object2019);
  const info2019 = Object.keys(object2019).map((item) => object2019[item].length);
  console.log(object2019);

  const lab2020 = Object.keys(object2020);
  const info2020 = Object.keys(object2020).map((item) => object2020[item].length);
  console.log(object2020);

  const lab2021 = Object.keys(object2021);
  const info2021 = Object.keys(object2021).map((item) => object2021[item].length);
  console.log(object2021);

  const lab2022 = Object.keys(object2022);
  const info2022 = Object.keys(object2022).map((item) => object2022[item].length);
  console.log(object2022);

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: lab2017,
      datasets: [{
        label: 'Incidents in 2017',
        data: info2017
      }, {
        type: 'bar',
        label: 'Incidents in 2018',
        data: info2018
      }, {
        type: 'bar',
        label: 'Incidents in 2019',
        data: info2019
      }, {
        type: 'bar',
        label: 'Incidents in 2020',
        data: info2020
      }, {
        type: 'bar',
        label: 'Incidents in 2021',
        data: info2021
      }, {
        type: 'bar',
        label: 'Incidents in 2022',
        data: info2022
      }]

    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Crime Totals Over 5 Years',
          padding: {
            top: 10,
            bottom: 30
          },
          color: 'white',
          position: 'left'
        }
      }
    }
  });
}

function changeChart(chart, dataObject) {
  const lab = Object.keys(dataObject);
  const info = Object.keys(dataObject).map((item) => dataObject[item].length);
  chart.data.labels = lab;
  chart.data.datasets.forEach((set) => {
    set.data = info;
    return set;
  });
  chart.update();
}

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    // Add object to list for given key's value
    acc[key].push(obj);
    return acc;
  }, {});
}

async function getdata() {
  const limit = '&$limit=100000000';
  const url2017 = `https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?$where=date between '2017-01-01' and '2017-12-31'${limit}`;

  const data2017 = await fetch(url2017); // We're using a library that mimics a browser 'fetch' for simplicity
  const json2017 = await data2017.json(); // the data isn't json until we access it using dot notation

  const reply2017 = json2017.filter((item) => Boolean(item.clearance_code_inc_type)).filter((item) => Boolean(item.date));
  console.log(reply2017);

  const url2018 = `https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?$where=date between '2018-01-01' and '2018-12-31'${limit}`;

  const data2018 = await fetch(url2018); // We're using a library that mimics a browser 'fetch' for simplicity
  const json2018 = await data2018.json(); // the data isn't json until we access it using dot notation

  const reply2018 = json2018.filter((item) => Boolean(item.clearance_code_inc_type)).filter((item) => Boolean(item.date));

  const url2019 = `https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?$where=date between '2019-01-01' and '2019-12-31'${limit}`;

  const data2019 = await fetch(url2019); // We're using a library that mimics a browser 'fetch' for simplicity
  const json2019 = await data2019.json(); // the data isn't json until we access it using dot notation

  const reply2019 = json2019.filter((item) => Boolean(item.clearance_code_inc_type)).filter((item) => Boolean(item.date));

  const url2020 = `https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?$where=date between '2020-01-01' and '2020-12-31'${limit}`;

  const data2020 = await fetch(url2020); // We're using a library that mimics a browser 'fetch' for simplicity
  const json2020 = await data2020.json(); // the data isn't json until we access it using dot notation

  const reply2020 = json2020.filter((item) => Boolean(item.clearance_code_inc_type)).filter((item) => Boolean(item.date));

  const url2021 = `https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?$where=date between '2021-01-01' and '2021-12-31'${limit}`;

  const data2021 = await fetch(url2021); // We're using a library that mimics a browser 'fetch' for simplicity
  const json2021 = await data2021.json(); // the data isn't json until we access it using dot notation

  const reply2021 = json2021.filter((item) => Boolean(item.clearance_code_inc_type)).filter((item) => Boolean(item.date));

  const url2022 = `https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?$where=date between '2022-01-01' and '2022-12-31'${limit}`;

  const data2022 = await fetch(url2022); // We're using a library that mimics a browser 'fetch' for simplicity
  const json2022 = await data2022.json(); // the data isn't json until we access it using dot notation

  const reply2022 = json2022.filter((item) => Boolean(item.clearance_code_inc_type)).filter((item) => Boolean(item.date));

  return [reply2017, reply2018, reply2019, reply2020, reply2021, reply2022];
}

async function mainEvent() {
  /*
              ## Main Event
                Separating your main programming from your side functions will help you organize your thoughts
                When you're not working in a heavily-commented "learning" file, this also is more legible
                If you separate your work, when one piece is complete, you can save it and trust it
            */

  // the async keyword means we can make API requests
  // const pageMap = initMap();
  const form = document.querySelector('.main_form'); // get your main form so you can do JS with it
  const submit = document.querySelector('#get-resto');
  const chartTarget = document.querySelector('#myChart');
  const charAvg = document.querySelector('#myChartAvg');
  // get a reference to your submit button
  // const loadAnimation = document.querySelector('.lds-ellipsis');
  // submit.style.display = 'visible'; // let your submit button disappear

  /*
              Let's get some data from the API - it will take a second or two to load
              This next line goes to the request for 'GET' in the file at /server/routes/foodServiceRoutes.js
              It's at about line 27 - go have a look and see what we're retrieving and sending back.
             */
  const results = await getdata();

  const arrayFromJson2017 = results[0];
  const arrayFromJson2018 = results[1];
  const arrayFromJson2019 = results[2];
  const arrayFromJson2020 = results[3];
  const arrayFromJson2021 = results[4];
  const arrayFromJson2022 = results[5];

  const chartData2017 = arrayFromJson2017;
  const chartData2018 = arrayFromJson2018;
  const chartData2019 = arrayFromJson2019;
  const chartData2020 = arrayFromJson2020;
  const chartData2021 = arrayFromJson2021;
  const chartData2022 = arrayFromJson2022;
  // Average 2017-2019 vs 2020-2022
  const total2017 = arrayFromJson2017.length;
  const total2018 = arrayFromJson2018.length;
  const total2019 = arrayFromJson2019.length;
  const total2020 = arrayFromJson2020.length;
  const total2021 = arrayFromJson2021.length;
  const total2022 = arrayFromJson2022.length;

  /* const avgPreCovid = (total2017 + total2018 + total2019) / 3;
  const avgPostCovid = (total2020 + total2021 + total2022) / 3;
  console.log(avgPreCovid); */

  const shapeData2017 = groupBy(chartData2017, 'clearance_code_inc_type');
  const shapeData2018 = groupBy(chartData2018, 'clearance_code_inc_type');
  const shapeData2019 = groupBy(chartData2019, 'clearance_code_inc_type');
  const shapeData2020 = groupBy(chartData2020, 'clearance_code_inc_type');
  const shapeData2021 = groupBy(chartData2021, 'clearance_code_inc_type');
  const shapeData2022 = groupBy(chartData2022, 'clearance_code_inc_type');
  const myChart = initChart(chartTarget, shapeData2017, shapeData2018, shapeData2019, shapeData2020, shapeData2021, shapeData2022);
  const myAverage = initChartAvg(charAvg, total2017, total2018, total2019, total2020, total2021, total2022);

  //
  /*
              Below this comment, we log out a table of all the results using "dot notation"
              An alternate notation would be "bracket notation" - arrayFromJson["data"]
              Dot notation is preferred in JS unless you have a good reason to use brackets
              The 'data' key, which we set at line 38 in foodServiceRoutes.js, contains all 1,000 records we need
            */
  /* console.table(arrayFromJson2017.data);
  console.table(arrayFromJson2018.data);
  console.table(arrayFromJson2019.data);
  console.table(arrayFromJson2020.data);
  console.table(arrayFromJson2021.data);
  console.table(arrayFromJson2022.data);

  // in your browser console, try expanding this object to see what fields are available to work with
  // for example: arrayFromJson.data[0].name, etc
  console.log(arrayFromJson2017.data[0]);
  console.log(arrayFromJson2018.data[0]);
  console.log(arrayFromJson2019.data[0]);
  console.log(arrayFromJson2020.data[0]);
  console.log(arrayFromJson2021.data[0]);
  console.log(arrayFromJson2022.data[0]); */

  // this is called "string interpolation" and is how we build large text blocks with variables
  console.log(`${arrayFromJson2017[0].date.slice(0, 10)} ${arrayFromJson2017[0].clearance_code_inc_type}`);

  // This IF statement ensures we can't do anything if we don't have information yet
  if (arrayFromJson2017.data?.length > 0) { // the question mark in this means "if this is set at all"
    let currentList = [];

    // submit.style.display = 'block';
    // let's turn the submit button back on by setting it to display as a block when we have data available

    // loadAnimation.classList.remove('lds-ellipsis');
    // loadAnimation.classList.add('lds-ellipsis_hidden');

    form.addEventListener('input', (event) => {
      console.log('input', event.target.value);
      const filteredList = filterList(currentList, event.target.value);
      injectHTML(filteredList);
      const localData = groupBy(filteredList, 'clearance_code_inc_type');
      changeChart(myChart, localData);
      // makerPlace(filteredList, pageMap);
    });

    // And here's an eventListener! It's listening for a "submit" button specifically being clicked
    // this is a synchronous event event, because we already did our async request above, and waited for it to resolve
    form.addEventListener('submit', (submitEvent) => {
      // This is needed to stop our page from changing to a new URL even though it heard a GET request
      submitEvent.preventDefault();

      // This constant will have the value of your 15-restaurant collection when it processes
      currentList = processRestaurants(arrayFromJson2017.data);

      // And this function call will perform the "side effect" of injecting the HTML list for you
      injectHTML(currentList);
      const localData = groupBy(currentList, 'clearance_code_inc_type');
      changeChart(myChart, localData);
      // makerPlace(currentList, pageMap);

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
document.addEventListener('DOMContentLoaded', async () => mainEvent());
