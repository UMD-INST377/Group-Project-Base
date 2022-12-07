// scripts for genres page

const movieGenre = 'https://api.themoviedb.org/3/genre/movie/list?api_key=29c91bbcfb2a62a20125c03d7800a192&language=en-US';
const tvGenre = 'https://api.themoviedb.org/3/genre/tv/list?api_key=29c91bbcfb2a62a20125c03d7800a192&language=en-US';

function postData(array) {
    const target = document.querySelector('#base');
    array.forEach(item => {
      const image = item.poster_path;
      const title = item.title;
      const desc = item.overview;
      const card = `<div class="card col">
      <img src="https://image.tmdb.org/t/p/w400${image}" class="card-img-top" alt="movie poster">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${desc}.</p>
      </div>
    </div>`;
      target.insertAdjacentHTML('beforeend', card);
    });
  }

  async function getHorrorData() {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=29c91bbcfb2a62a20125c03d7800a192&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate';
    const data = await fetch(url);
    const json = await data.json();
    const reply = json.results.filter((item) => Boolean(item.poster_path));
    return reply;
  }

async function mainEvent() {
  const horror = await getHorrorData();
  console.log(horror);
  postData(horror);
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());