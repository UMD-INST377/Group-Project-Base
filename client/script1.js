const movie_URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=b5fa8ab3e139be5c0b6e60ab752e3d09&language=en-US&page=1';
const image_movie = 'https://image.tmdb.org/t/p/w500';

const form = document.getElementById('form');
const main = document.getElementById('main');

// Movies
getMovies(movie_URL);
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  displayMovies(data.results);
  console.log(data.results);
}

// Displays Movies
function displayMovies(getMovies) {
  main.innerHTML = '';
  getMovies.forEach((movie) => {
    const {
      title, poster_path, vote_average, overview
    } = movie;
    const moviesElement = document.createElement('div');
    moviesElement.classList.add('movie');
    moviesElement.innerHTML = `
    <img src= "${image_movie + poster_path}" alt = "${title}" />
    <div class = 'movie-info'>
    <h3>${title}</h3>
    </div>
    `;
    main.appendChild(moviesElement);
  });
}