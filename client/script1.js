const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// Movies

NowPlayingMovies(
  'https://api.themoviedb.org/3/movie/now_playing?api_key=b5fa8ab3e139be5c0b6e60ab752e3d09&language=en-US&page=1'
);
async function NowPlayingMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  displayMovies(data.results);
  console.log(data.results);
}

// Displays movies on homepage
function displayMovies(NowPlayingMovies) {
  main.innerHTML = '';
  NowPlayingMovies.forEach((movie) => {
    const {
      title, poster_path, vote_average, overview
    } = movie;
    const movies_Element = document.createElement('div');
    movies_Element.classList.add('movie');
    movies_Element.innerHTML = `
    <img src= "${
  `https://image.tmdb.org/t/p/w500${poster_path}`
}" alt = "${title}" />
    <div class = 'movie-info'>
    <h3>${title}</h3>
    </div>
    `;
    main.appendChild(movies_Element);
  });
}

// Search for movies
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== '') {
    NowPlayingMovies(
      `https://api.themoviedb.org/3/search/movie?api_key=b5fa8ab3e139be5c0b6e60ab752e3d09&query="${
        searchTerm}`
    );
  } else {
    window.location.reload();
  }
});
