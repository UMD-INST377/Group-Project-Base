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


document.addEventListener('DOMContentLoaded', async () => mainEvent());


// call tv api and return tv show images
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