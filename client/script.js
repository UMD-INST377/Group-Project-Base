function TopRatedChart(chart2, object) {
  const data = {
    labels: title,
    datasets: [{
      label: 'Top Rated Movies',
      data: vote_average,
      borderWidth: 1
    }]
  };

  const config = {
    type: 'line',
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
    chart2,
    config
  );
}

async function TopRatedMovies() {
  const MovieURL = 'https://api.themoviedb.org/3/movie/popular?api_key=b5fa8ab3e139be5c0b6e60ab752e3d09&language=en-US&page=1';
  const response = await fetch(MovieURL);
  const ChartData = await response.json();

  const voteNumber = ChartData.results.map((x) => x.vote_average);
  const titleName = ChartData.results.map((x) => x.title);

  vote_average = voteNumber;
  title = titleName;
}
async function OthermainEvent() {
  const ctx = document.querySelector('#myChart');
  const movieResults = await TopRatedMovies();
  let current = 0;
  movieData2 = movieResults;
  myChart2 = TopRatedChart(ctx, movieData2);
  document.getElementById('button_1').addEventListener('click', () => {
    console.log(current);
    if (current === 0) {
      current = 1;
      myChart2.destroy();
      myChart2 = TopRatedChart(ctx, movieData2);
    } else {
      current = 0;
      myChart2.destroy();
      myChart2 = TopRatedChart(ctx, movieData2);
    }
  });
}

document.addEventListener('DOMContentLoaded', async () => OthermainEvent());

// Adhish Paudel

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

function tvChart(chart, object) {
  const labels = object.map((item) => item.name);
  const info = Object.keys(object).map((item) => object[item].vote_average);

  const data = {
    labels: labels,
    datasets: [{
      label: 'Ratings for most popular TV Shows airing right now!',
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
async function getMovieData() {
  const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=29c91bbcfb2a62a20125c03d7800a192&language=en-US&page=1';
  const data = await fetch(url);
  const json = await data.json();
  const reply = json.results.filter((item) => Boolean(item.vote_average));
  return reply;
}

// Gets one page (20 items) of TV shows airing in the next 7 days, sorted by popularity
async function getTvData() {
  const url = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=29c91bbcfb2a62a20125c03d7800a192&language=en-US&page=1';
  const data = await fetch(url);
  const json = await data.json();
  const reply = json.results.filter((item) => Boolean(item.vote_average));
  return reply;
}

async function mainEvent() {
  const ctx = document.querySelector('#myChart2');
  const movieResults = await getMovieData();
  const tvResults = await getTvData();
  let current = 0;
  // console.log(movieResults)
  movieData = shapeData(movieResults);
  tvData = shapeData(tvResults);
  // console.log(tvData);
  // console.log(movieData)
  myChart = initChart(ctx, movieData);
  // myChart = tvChart(ctx, tvData);

  document.getElementById('button').addEventListener('click', () => {

    console.log(current);
    if (current === 0) {
      current = 1;
      myChart.destroy();
      myChart = tvChart(ctx, tvData);
    } else {
      current = 0;
      myChart.destroy();
      myChart = initChart(ctx, movieData);
    }
  });

} 

document.addEventListener('DOMContentLoaded', async () => mainEvent());