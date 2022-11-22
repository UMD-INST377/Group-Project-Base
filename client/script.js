// API TMDB
const apiKey = 'api_key=b5fa8ab3e139be5c0b6e60ab752e3d09';
const base_url = 'https://api.themoviedb.org/3';
const apiURL = `${base_url}/discover/movie?sort_by=popularity.desc&${apiKey}`;

async function getMovies() {
  const MovieURL = `${base_url}/discover/movie?sort_by=popularity.desc&${apiKey}`;
  const response = await fetch(MovieURL);
  const ChartData = await response.json();

  const voteNumber = ChartData.results.map((x) => x.vote_average);
  const titleName = ChartData.results.map((x) => x.title);

  console.log(voteNumber, titleName);

  vote_average = voteNumber;
  title = titleName;
}

async function dummyChart() {
  await getMovies();

  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: title,
      datasets: [{
        label: '# of Votes',
        data: vote_average,
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

dummyChart();


//Adhish Paudel 

/* eslint-disable max-len */
/* eslint-disable no-new */

// This function will take the movies given by API, sorted by popularity, and take the top 7
function shapeData(array) {
  const top7 = array.sort((a, b) => b.popularity - a.popularity)
    .filter((v, i, self) => self.indexOf(v) === i).slice(0, 7);
  return top7;
}

// This function will initialize the chart, and use the ratings (separate from popularity) to plot data
function initChart(chart, object) {
  const labels = object.map((item) => item.title);
  const info = Object.keys(object).map((item) => object[item].vote_average);

  const data = {
    labels: labels,
    datasets: [{
      label: 'Ratings for most popular Movies airing right now!',
      data: info,
      borderWidth: 1
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  return new Chart(
    chart,
    config
  );
}

// Gets one page (20 items) of movie data sorted by popularity
async function getData() {
  const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=29c91bbcfb2a62a20125c03d7800a192&language=en-US&page=1';
  const data = await fetch(url);
  const json = await data.json();
  const reply = json.results.filter(Boolean);
  return reply;
}

async function mainEvent() {
  const ctx = document.querySelector('#myChart');
  const results = await getData();
  console.log(results)
  movieData = shapeData(results);
  console.log(movieData)
  myChart = initChart(ctx, movieData);
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());


