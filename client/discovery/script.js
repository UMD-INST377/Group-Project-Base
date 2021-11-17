async function dataHandler() {
  const searchInput = document.querySelector('.search');
  const searchButton = document.querySelector('.searchButton');
  const columns = document.querySelector('.columns');

  // get the films data from its endpoint up here
  const apiRequestFilms = await fetch('/api/films');
  const filmsJson = await apiRequestFilms.json();
  console.log(filmsJson);

  // not sure what this part doesthat j
  const coll = document.querySelectorAll('.collapsible');
  let i;

  for (i = 0; i < coll.length; i += 1) {
    coll[i].addEventListener('click', function () {
      this.classList.toggle('active');
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = `${content.scrollHeight} px`;
      }
    });
  }
  function findMatches(phrase, film) {
    return filmsJson.filter((film) => {
      // only look with matching category
      const regex = new RegExp(phrase, 'gi');
      return film.film_title.match(regex);
    });
  }

  // function runs on submit button; it clears out results, and then appends new ones
  function submitSearch() {
    columns.innerHTML = '';
    const filmMatches = findMatches(searchInput.value);
    filmMatches.forEach((film) => appendMovieBox(film));
  }

  // add html elements of movies
  function appendMovieBox(film) {
    const html = `<div class="box">
                  <div class="movieBox">a</div>
                  <div>${film.film_title} : Rating (${film.imdb_rating})<div>
                </div>`;
    columns.innerHTML += html;
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
