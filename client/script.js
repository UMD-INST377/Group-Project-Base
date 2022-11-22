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
