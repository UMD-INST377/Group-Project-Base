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
        label: 'Popular movies with Rating',
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
