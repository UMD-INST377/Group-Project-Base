// API TMDB
const apiKey = 'api_key=b5fa8ab3e139be5c0b6e60ab752e3d09';
const base_url = 'https://api.themoviedb.org/3';
const apiURL = `${base_url}/discover/movie?sort_by=popularity.desc&${apiKey}`;

// Async function that retrieves API data
async function getMovies() {
  const MovieURL = `${base_url}/discover/movie?sort_by=popularity.desc&${apiKey}`;
  const response = await fetch(MovieURL);
  const ChartData = await response.json();

  const voteNumber = ChartData.results.map((x) => x.vote_average);
  const titleName = ChartData.results.map((x) => x.title);
  const voteCount = ChartData.results.map((x) => x.vote_count);

  console.log(voteNumber, titleName, voteCount);

  vote_average = voteNumber;
  title = titleName;
}

async function MovieChart() {
  await getMovies();

function TopRatedChart(chart, object) {
  const data = {
    labels: title,
    datasets: [{
      label: 'Top Rated Movies',
      data: vote_average,
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

async function OtherMain() {
  const ctx = document.querySelector('#myChart');
  const movieResults = await getTopRateData();
  let current = 0;
  movieData = movieResults;
  myChart2 = TopRatedChart(ctx, movieData);
  document.getElementById('button_1').addEventListener('click', () => {
    console.log(current);
    if (current === 0) {
      current = 1;
      myChart2.destroy();
      myChart2 = TopRatedChart(ctx, movieData);
    } else {
      current = 0;
      myChart2.destroy();
      myChart2 = TopRatedChart(ctx, movieData);
    }
  });
}

MovieChart();
