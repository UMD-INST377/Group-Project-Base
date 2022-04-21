async function populateGenres() {
  const dropdown = document.querySelector('#genre-input');
  const results = await fetch('/api/genres');
  const genres = await results.json();
  genres.data.forEach((item) => {
    if (item.genre !== 'Other') {
      const option = document.createElement('option');
      option.text = item.genre;
      option.value = item.genre;
      dropdown.appendChild(option);
    }
  });
}

function displayMovie(container, item) {
  const movies = container;
  let availability = '';
  let rating = '';
  if (item.rating !== null) {
    rating = `<span class="rating">${item.rating}</span>  · `;
  }

  const platforms = {
    Netflix: item.is_on_netflix,
    Hulu: item.is_on_hulu,
    Prime: item.is_on_prime,
    Disney: item.is_on_disney
  };

  Object.keys(platforms).forEach((platform) => {
    if (platforms[platform] === 1) {
      availability += `<data value="${platform}">${platform}</data>`;
    }
  });

  movies.innerHTML += `<div class="movie col s6 m4 l3">
    <div class="col-content">
      <img src="${item.image_url}">
      <div class="movie-details">
        <span class="title">${item.title}</span>
        <div class="details">
          <span class="genre">${item.genre}</span>  ·  
          <span class="year">${item.year}</span>  ·  
          ${rating} 
          <span class="lang">${item.lang}</span></br>
          <span class="platform-details">${availability}</span>
        </div> 
      </div> 
    </div> 
    </div>`;
}

function displayResults(items) {
  const movies = document.querySelector('#movies');
  movies.innerHTML = '';
  items.forEach((item) => { displayMovie(movies, item); });
}

async function mainEvent() {
  // initialize dropdowns
  await populateGenres();
  M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
  M.FormSelect.init(document.querySelectorAll('select'));

  // load first 8 movies
  const results = await fetch('/api/display');
  const data = await results.json();
  displayResults(data);
}

document.addEventListener('DOMContentLoaded', async () => { mainEvent(); });