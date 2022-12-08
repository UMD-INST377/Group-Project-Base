// scripts for genres page

const movieGenre = 'https://api.themoviedb.org/3/genre/movie/list?api_key=29c91bbcfb2a62a20125c03d7800a192&language=en-US';
const tvGenre = 'https://api.themoviedb.org/3/genre/tv/list?api_key=29c91bbcfb2a62a20125c03d7800a192&language=en-US';



function postData(array) {
    const target = document.querySelector('#base');
    array.forEach(item => {
      const image = item.poster_path;
      const title = item.title;
      const desc = item.overview;
      const card = `<div class="card col" id="genres">
      <img src="https://image.tmdb.org/t/p/w400${image}" class="card-img-top" alt="movie poster">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${desc}.</p>
      </div>
    </div>`;
      target.insertAdjacentHTML('beforeend', card);
    });
  }

function injectGenreList(array) {
  const target = document.querySelector('#dropdown_menu');
  array.forEach(item => {
      const id = item.id;
      const name = item.name;
      const html = `<option value="${id}"><button class="dropdown-item" type="button">${name}</button></option>`;
      target.insertAdjacentHTML('beforeend', html);
  })
}

  function processList(array) {
    const top12 = array.sort((a, b) => b.vote_count - a.vote_count)
      .filter((v, i, self) => self.indexOf(v) === i).slice(0, 12);
    return top12;
  }

  function filterGenre(array, genre) {
    const numeric = Number(genre);
    if (numeric === 0) {
      return array;
    } else {
      return array.filter(item => item.genre_ids.includes(numeric));
    };
  }

  /* async function getHorrorData() {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=29c91bbcfb2a62a20125c03d7800a192&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate';
    const data = await fetch(url);
    const json = await data.json();
    const reply = json.results.filter((item) => Boolean(item.poster_path));
    return reply;
  } */


  async function getGenreList() {
    const data = await fetch(movieGenre);
    const json = data.json();
    console.log(json);
    // const reply = json.object.genres.filter((item) => Boolean(item.id));
    // console.log(reply);
    return json;
  }


  async function getMultiPages() {
    movieList = []
    let p = 1
    do {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=29c91bbcfb2a62a20125c03d7800a192&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=${p}&with_watch_monetization_types=flatrate`;
      const data = await fetch(url);
      const json = await data.json();
      const filtered = json.results.filter((item) => Boolean(item.poster_path));
      // console.log(filtered);
      movieList = movieList.concat(filtered);
      p++;
    }
    while (p < 11);
    // console.log(movieList);
    return movieList;
   } 

async function mainEvent() {
  // const horror = await getHorrorData();
  genreList = await getGenreList();
  console.log(genreList);
  injectGenreList(genreList.genres);
  const allMovies = await getMultiPages();
  document.getElementById('dropdown_menu').addEventListener('click', () => {
    // Clears the existing HTML cards before adding new ones
    let base = document.getElementById('base');
    while (base.firstChild) {
      base.removeChild(base.firstChild);
    }
    genreID = document.getElementById('dropdown_menu').value;
    // console.log(genreID);
    let newList = filterGenre(allMovies, genreID);
    console.log(newList);
    new12 = processList(newList);
    postData(new12);
  })
  const top12 = processList(allMovies);
  // console.log(horror);
  postData(top12);
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());