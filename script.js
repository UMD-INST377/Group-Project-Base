const api_url = 'https://api.tvmaze.com/shows';

/* Cuurent Date and Time */
function date_time() {
  const datetimeDisplay = document.getElementById('date-time');
  const datetimeString = new Date().toLocaleString();
  const formatString = datetimeString.replace(', ', ' - ');
  datetimeDisplay.textContent = formatString;
}
setInterval(date_time, 100);

/* get Mood image :
the user can click the emoji button to random recommend movies based on the mood
*/

/* mainEvent */
async function mainEvent() {
  // fetch TV show api !!!
  const response = await fetch(api_url);
  const data = await response.json();
  console.table(data); // check data as table format

  const form = document.querySelector('.main_form');
  form.addEventListener('start', async(submitEvent) => {
    submitEvent.preventDefault();
    console.log('form start');
  });
  const start = document.querySelector('#refresh');
  start.style.display = '';
}

// async function mainEvent() { // the async keyword means we can make API requests
//   const form = document.querySelector('.main_form'); // This class name needs to be set on your form before you can listen for an event on it
//   form.addEventListener('submit', async (submitEvent) => { // async has to be declared on every function that needs to "await" something
//     submitEvent.preventDefault(); // This prevents your page from going to http://localhost:3000/api even if your form still has an action set on it
//     console.log('form submission'); // this is substituting for a "breakpoint"

//     /*
//       ## GET requests and Javascript
//         We would like to send our GET request so we can control what we do with the results
//         But this blocks us sending a query string by default - ?resto='' won't exist

//         Let's get those form results before sending off our GET request using the Fetch API
//     */

//     // this is the preferred way to handle form data in JS in 2022
//     const formData = new FormData(submitEvent.target); // get the data from the listener target
//     const formProps = Object.fromEntries(formData); // Turn it into an object

//     // You can also access all forms in a document by using the document.forms collection
//     // But this will retrieve ALL forms, not just the one that "heard" a submit event - less good

//     /*
//       ## Retrieving information from an API
//         The Fetch API is relatively new,
//         and is much more convenient than previous data handling methods.
//         Here we make a basic GET request to the server using the Fetch method
//         to send a request to the routes defined in /server/routes/foodServiceRoutes.js

//       // this is a basic GET request
//       // It does not include any of your form values, though
//     */

//     // const results = await fetch('/api/foodServicePG');
//     const fetchQuery = new URLSearchParams(formProps);
//     const results = await fetch(`/api/foodServicePG?${fetchQuery}`);

//     /*
//    ## Get request with query parameters

//       const results = await fetch(`/api/foodServicePG?${new URLSearchParams(formProps)}`);

//       The above request uses "string interpolation" to include an encoded version of your form values
//       It works because it has a ? in the string
//       Replace line 37 with it, and try it with a / instead to see what your server console says

//       You can check what you sent to your server in your GET request
//       By opening the "network" tab in your browser developer tools and looking at the "name" column
//       This will also show you how long it takes a request to resolve
//     */

//     // This changes the response from the GET into data we can use - an "object"
//     const arrayFromJson = await results.json();
//     console.table(arrayFromJson.data); // this is called "dot notation"
//     // arrayFromJson.data - we're accessing a key called 'data' on the returned object
//     // it initially contains all 1,000 records from your request
//   });
// }

// /*
//   This adds an event listener that fires our main event only once our page elements have loaded
//   The use of the async keyword means we can "await" events before continuing in our scripts
//   In this case, we load some data when the form has submitted
// */
document.addEventListener('DOMContentLoaded', async () => mainEvent());

function getComedy() {
  return fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((jsonData) => {
      const titleList = jsonData;
      const newList = titleList.filter((title) => title.genres.includes('Comedy'));

      const show = newList[Math.floor(Math.random() * newList.length)];
      return show.image.medium;
    });
}

function getPosRating() {
  return fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((jsonData) => {
      const titleList = jsonData;
      const newList = titleList.filter((title) => title.genres.includes('Comedy'));

      ratings = newList.map((show) => [show.name, show.rating.average]);
      topFive = ratings.sort((a, b) => b[1] - a[1]).slice(0, 5);
      const data = [
        { show: topFive[0][0], rating: topFive[0][1]},
        { show: topFive[1][0], rating: topFive[1][1]},
        { show: topFive[2][0], rating: topFive[2][1]},
        { show: topFive[3][0], rating: topFive[3][1]},
        { show: topFive[4][0], rating: topFive[4][1]}
      ];
      return data;
    });
}

function createPosChart(data) {
  const width = 900;
  const height = 450;
  const margin = {
    top: 50, bottom: 50, left: 50, right: 50
  };

  const svg = d3.select('#d3-container')
    .append('svg')
    .attr('width', width - margin.left - margin.right)
    .attr('height', height - margin.top - margin.bottom)
    .attr('viewBox', [0, 0, width, height]);

  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1);

  const y = d3.scaleLinear()
    .domain([0, 10])
    .range([height - margin.bottom, margin.top]);

  svg
    .append('g')
    .attr('fill', 'royalblue')
    .selectAll('rect')
    .data(data.sort((a, b) => d3.descending(a.rating, b.rating)))
    .join('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', (d) => y(d.rating))
    .attr('title', (d) => d.rating)
    .attr('class', 'rect')
    .attr('height', (d) => y(0) - y(d.rating))
    .attr('width', x.bandwidth());

  function yAxis(g) {
    g.attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr('font-size', '20px');
  }

  function xAxis(g) {
    g.attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat((i) => data[i].show))
      .attr('font-size', '20px');
  }

  svg.append('g').call(xAxis);
  svg.append('g').call(yAxis);
  svg.node();
}

const positiveButton = document.getElementById('emoji1');
const image = document.getElementById('image');
positiveButton.addEventListener('click', () => {
  const exist = document.getElementById('d3-container');
  if (typeof (exist) !== 'undefined' && exist != null) {
    document.getElementById('d3-container').remove();
  }
  const element = document.createElement('div');
  element.setAttribute('id', 'd3-container');
  document.getElementById('container').appendChild(element);
  getComedy()
    .then((newImage) => image.src = newImage);
  getPosRating()
    .then((newRating) => createPosChart(newRating));
});

function getDrama() {
  return fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((jsonData) => {
      const titleList = jsonData;
      const newList = titleList.filter((title) => title.genres.includes('Drama'));

      const show = newList[Math.floor(Math.random() * newList.length)];
      return show.image.medium;
    });
}

function getNegRating() {
  return fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((jsonData) => {
      const titleList = jsonData;
      const newList = titleList.filter((title) => title.genres.includes('Drama'));

      ratings = newList.map((show) => [show.name, show.rating.average]);
      topFive = ratings.sort((a, b) => b[1] - a[1]).slice(0, 5);
      const data = [
        { show: topFive[0][0], rating: topFive[0][1]},
        { show: topFive[1][0], rating: topFive[1][1]},
        { show: topFive[2][0], rating: topFive[2][1]},
        { show: topFive[3][0], rating: topFive[3][1]},
        { show: topFive[4][0], rating: topFive[4][1]}
      ];
      return data;
    });
}

function createNegChart(data) {
  const width = 900;
  const height = 450;
  const margin = {
    top: 50, bottom: 50, left: 50, right: 50
  };

  const svg = d3.select('#d3-container')
    .append('svg')
    .attr('width', width - margin.left - margin.right)
    .attr('height', height - margin.top - margin.bottom)
    .attr('viewBox', [0, 0, width, height]);

  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1);

  const y = d3.scaleLinear()
    .domain([0, 10])
    .range([height - margin.bottom, margin.top]);

  svg
    .append('g')
    .attr('fill', 'royalblue')
    .selectAll('rect')
    .data(data.sort((a, b) => d3.descending(a.rating, b.rating)))
    .join('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', (d) => y(d.rating))
    .attr('title', (d) => d.rating)
    .attr('class', 'rect')
    .attr('height', (d) => y(0) - y(d.rating))
    .attr('width', x.bandwidth());

  function yAxis(g) {
    g.attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr('font-size', '20px');
  }

  function xAxis(g) {
    g.attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat((i) => data[i].show))
      .attr('font-size', '20px');
  }

  svg.append('g').call(xAxis);
  svg.append('g').call(yAxis);
  svg.node();
}

const negativeButton = document.getElementById('emoji2');
negativeButton.addEventListener('click', () => {
  const exist = document.getElementById('d3-container');
  if (typeof (exist) !== 'undefined' && exist != null) {
    document.getElementById('d3-container').remove();
  }
  const element = document.createElement('div');
  element.setAttribute('id', 'd3-container');
  document.getElementById('container').appendChild(element);
  getComedy()
    .then((newImage) => image.src = newImage);
  getNegRating()
    .then((newRating) => createNegChart(newRating));
});

function getRomance() {
  return fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((jsonData) => {
      const titleList = jsonData;
      const newList = titleList.filter((title) => title.genres.includes('Romance'));

      const show = newList[Math.floor(Math.random() * newList.length)];
      return show.image.medium;
    });
}

function getNeuRating() {
  return fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((jsonData) => {
      const titleList = jsonData;
      const newList = titleList.filter((title) => title.genres.includes('Romance'));

      ratings = newList.map((show) => [show.name, show.rating.average]);
      topFive = ratings.sort((a, b) => b[1] - a[1]).slice(0, 5);
      const data = [
        { show: topFive[0][0], rating: topFive[0][1]},
        { show: topFive[1][0], rating: topFive[1][1]},
        { show: topFive[2][0], rating: topFive[2][1]},
        { show: topFive[3][0], rating: topFive[3][1]},
        { show: topFive[4][0], rating: topFive[4][1]}
      ];
      return data;
    });
}

function createNeuChart(data) {
  const width = 900;
  const height = 450;
  const margin = {
    top: 50, bottom: 50, left: 50, right: 50
  };

  const svg = d3.select('#d3-container')
    .append('svg')
    .attr('width', width - margin.left - margin.right)
    .attr('height', height - margin.top - margin.bottom)
    .attr('viewBox', [0, 0, width, height]);

  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1);

  const y = d3.scaleLinear()
    .domain([0, 10])
    .range([height - margin.bottom, margin.top]);

  svg
    .append('g')
    .attr('fill', 'royalblue')
    .selectAll('rect')
    .data(data.sort((a, b) => d3.descending(a.rating, b.rating)))
    .join('rect')
    .attr('x', (d, i) => x(i))
    .attr('y', (d) => y(d.rating))
    .attr('title', (d) => d.rating)
    .attr('class', 'rect')
    .attr('height', (d) => y(0) - y(d.rating))
    .attr('width', x.bandwidth());

  function yAxis(g) {
    g.attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr('font-size', '20px');
  }

  function xAxis(g) {
    g.attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat((i) => data[i].show))
      .attr('font-size', '20px');
  }

  svg.append('g').call(xAxis);
  svg.append('g').call(yAxis);
  svg.node();
}

const neutralButton = document.getElementById('emoji3');
neutralButton.addEventListener('click', () => {
  const exist = document.getElementById('d3-container');
  if (typeof (exist) !== 'undefined' && exist != null) {
    document.getElementById('d3-container').remove();
  }
  const element = document.createElement('div');
  element.setAttribute('id', 'd3-container');
  document.getElementById('container').appendChild(element);
  getRomance()
    .then((newImage) => image.src = newImage);
  getNeuRating()
    .then((newRating) => createNeuChart(newRating));
});