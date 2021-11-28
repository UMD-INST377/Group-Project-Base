const burgerIcon = document.getElementById('burger');

function toggleBurgerMenu(burger) {
  const dropMenu = document.getElementById('navbarBasicExample');
  burger.classList.toggle('is-active');
  dropMenu.classList.toggle('is-active');
}

burgerIcon.addEventListener('click', () => {
  toggleBurgerMenu(burgerIcon);
});

async function dataHandler() {
  async function buttonHandler() {
    const genreBox = document.getElementById('genre-input').value;
    console.log(genreBox)
    if (genreBox === 'Select Genre') {
      const apiRequestFilms = await fetch('/api/films');
      const filmsJson = await apiRequestFilms.json();
      console.log(filmsJson)
      return filmsJson;
    }
    const apiRequestFilms = await fetch('../api/genremovies', {
      method: 'POST',
      body: JSON.stringify({genre: genreBox}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    const filmsJson = await apiRequestFilms.json();
    return filmsJson;
  }
  const searchButton = document.querySelector('.searchButton');
  const columns = document.querySelector('.columns');
  const searchInput = document.querySelector('.search');

  // get the films data from its endpoint up here

  // not sure what this part doesthat j
  const coll = document.querySelectorAll('.collapsible');
  let i;

  for (i = 0; i < coll.length; i += 1) {
    coll[i].addEventListener('click', () => {
      this.classList.toggle('active');
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = `${content.scrollHeight} px`;
      }
    });
  }
  async function findMatches(phrase) {
    filmJson = await buttonHandler();
    return filmJson.filter((film) => {
      // only look with matching category
      const regex = new RegExp(phrase, 'gi');
      return film.film_title.match(regex);
    });
  }

  // add html elements of movies
  function appendMovieBox(film) {
    const html = `<div class="box">
                    <div class="movieBox">a</div>
                    <div>${film.film_title} : Rating (${film.imdb_rating})<div>
                  </div>`;
    columns.innerHTML += html;
  }

  // function runs on submit button; it clears out results, and then appends new ones
  async function submitSearch() {
    columns.innerHTML = '';
    const filmMatches = await findMatches(searchInput.value);
    filmMatches.forEach((film) => appendMovieBox(film));
  }

  searchButton.addEventListener('click', submitSearch);
  searchInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      submitSearch();
    }
  });
}

window.onload = dataHandler;