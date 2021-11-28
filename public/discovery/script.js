async function dataHandler() {
  const burgerIcon = document.getElementById('burger');

  function toggleBurgerMenu(burger) {
    const dropMenu = document.getElementById('navbarBasicExample');
    burger.classList.toggle('is-active');
    dropMenu.classList.toggle('is-active');
  }

  burgerIcon.addEventListener('click', () => {
    toggleBurgerMenu(burgerIcon);
  });

  async function buttonHandler() {
    const genreBox = document.getElementById('genre-input').value;
    if (genreBox === 'Select Genre') {
      const apiRequestFilms = await fetch('/api/films');
      const filmsJson = await apiRequestFilms.json();
      return filmsJson;
    }
    const apiRequestFilms = await fetch('../api/genremovies', {
      method: 'POST',
      body: JSON.stringify({ genre: genreBox }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    const filmsJson = await apiRequestFilms.json();
    return filmsJson;
  }
  const searchButton = document.querySelector('.searchButton');
  const columns = document.querySelector('.columnsMovies');
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

  // can't get this to work - get to the image blob part and it fails
  async function getImage(filmTitle) {
    try {
      // console.log(filmTitle);
      const movieVal = encodeURIComponent(filmTitle.trim());
      // console.log(movieVal)
      const results = await fetch(`../api/movieImages/${movieVal}`, {method: 'POST'});
      const movieResults = await results.json();
      const posterPath = movieResults[0].poster_path;
      // console.log(posterPath)
      const imageRequest = await fetch(`https://image.tmdb.org/t/p/w342/${posterPath}`);
      const img = await imageRequest.blob();
      console.log(img);
      return img;
    } catch {
      return false;
    }

    // const imgSource = URL.createObjectURL(img);
    // const imgSource = `https://image.tmdb.org/t/p/w342/${posterPath}`
    // return imgSource;
  }


  // add html elements of movies
  async function appendMovieBox(film) {
    const image = await getImage(film.film_title);
    console.log(image);
    if (image) {
      const image2 = URL.createObjectURL(image);
      const html = `<div class="box">
      <div class="movieBox">
      <img src=${image2} alt=${'alt'}>
      </div>
      <div>${film.film_title} : Rating (${film.imdb_rating})<div>
    </div>`;
    columns.innerHTML += html
    }
    else {
      const image2 = '../images/empty-show-curtains.jpg'
      const html = `<div class="box">
      <div class="movieBox">
      <img src=${image2} alt=${'alt'}>
      </div>
      <div>${film.film_title} : Rating (${film.imdb_rating})<div>
    </div>`;
    columns.innerHTML += html;
    }
    //  <img src=${src} alt=${alt}>
  }

  // function runs on submit button; it clears out results, and then appends new ones
  // find matches returns the json of filtered
  async function submitSearch() {
    columns.innerHTML = '';
    const filmMatches = await findMatches(searchInput.value);
    console.log(filmMatches);
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
