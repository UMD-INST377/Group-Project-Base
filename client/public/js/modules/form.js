/* eslint-disable radix */
/* eslint-disable import/prefer-default-export */
import {
  populateGenres,
  populateLanguages,
  populateRatings
} from './populate.js';

async function populateEditGenres(genre) {
  const dropdown = document.querySelector('#genre-input');
  const results = await fetch('/api/genres');
  const genres = await results.json();
  genres.data.forEach((item) => {
    if (item.genre !== 'Other') {
      let option = `<option value="${item.genre_id}">${item.genre}</option>`;
      if (item.genre === genre) {
        option = `<option value="${item.genre_id}" selected>${item.genre}</option>`;
      }
      dropdown.innerHTML += option;
    }
  });
}

function validTitle(title) {
  return title !== null && title !== '' && title !== undefined;
}

function validYear(yearStr) {
  const year = parseInt(yearStr);
  return yearStr.length === 4 && year > 1900 && year < 2026;
}

async function validImage(url) {
  if (url.endsWith('.png') || url.endsWith('.jpg') || url.endsWith('.jpeg')) {
    const http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.onerror = () => {};
    try {
      http.send();
    } catch {
      return false;
    }
    return http.status === 200;
  }
  return false;
}

async function validInputs(
  title,
  year,
  lang,
  rating,
  genre,
  image,
  netflix,
  hulu,
  prime,
  disney
) {
  let result = true;
  if (!validTitle(title)) {
    result = result && false;
    document.querySelector('#title-v').style.setProperty('display', 'block');
  } else {
    document.querySelector('#title-v').style.setProperty('display', 'none');
  }

  if (!validYear(year)) {
    result = result && false;
    document.querySelector('#year-v').style.setProperty('display', 'block');
  } else {
    document.querySelector('#year-v').style.setProperty('display', 'none');
  }

  if (lang === undefined || lang < 1) {
    result = result && false;
    document.querySelector('#lang-v').style.setProperty('display', 'block');
  } else {
    document.querySelector('#lang-v').style.setProperty('display', 'none');
  }

  if (rating === undefined || rating < 1) {
    result = result && false;
    document.querySelector('#rating-v').style.setProperty('display', 'block');
  } else {
    document.querySelector('#rating-v').style.setProperty('display', 'none');
  }

  if (genre === undefined || genre < 1) {
    result = result && false;
    document.querySelector('#genre-v').style.setProperty('display', 'block');
  } else {
    document.querySelector('#genre-v').style.setProperty('display', 'none');
  }

  if (image === '' || (await validImage(image)) === false) {
    result = result && false;
    document.querySelector('#image-v').style.setProperty('display', 'block');
  } else {
    document.querySelector('#image-v').style.setProperty('display', 'none');
  }

  if (netflix === 0 && hulu === 0 && prime === 0 && disney === 0) {
    result = result && false;
    document.querySelector('#platform-v').style.setProperty('display', 'block');
  } else {
    document.querySelector('#platform-v').style.setProperty('display', 'none');
  }

  return result;
}

async function populateEditLanguages(language) {
  const dropdown = document.querySelector('#language-input');
  const results = await fetch('/api/languages');
  const languages = await results.json();
  dropdown.innerHTML
    += '<option value="" disabled selected>Choose your option</option>';
  languages.data.forEach((item) => {
    let option = `<option value="${item.language_id}">${item.language}</option>`;
    if (item.language === language) {
      option = `<option value="${item.language_id}" selected>${item.language}</option>`;
    }
    dropdown.innerHTML += option;
  });
}

async function populateEditRatings(rating) {
  const dropdown = document.querySelector('#rating-input');
  const results = await fetch('/api/ratings');
  const ratings = await results.json();
  dropdown.innerHTML
    += '<option value="" disabled selected>Choose your option</option>';
  ratings.data.forEach((item) => {
    let option = `<option value="${item.rating_id}">${item.rating}</option>`;
    // console.log(rating)
    // console.log(item.rating)
    if (item.rating === rating) {
      option = `<option value="${item.rating_id}" selected>${item.rating}</option>`;
    }
    dropdown.innerHTML += option;
  });
}
document.addEventListener('DOMContentLoaded', async () => {
  const editMovieID = window.location.search.split('=')[1];
  const form = document.querySelector('#form-wrapper');
  if (editMovieID !== undefined) {
    form.innerHTML = '';
    const results = await fetch('/api/custom', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `select movie_id, title, year, genre_id, genre, language as 'lang', 
        rating, image_id, image_url, is_on_netflix, is_on_hulu, is_on_prime, is_on_disney from movies
          left join images using(image_id)
          left join availability using(availability_id)
          left join genres using(genre_id)
          left join ratings using(rating_id)
          left join languages using(language_id)
          WHERE movie_id = ${editMovieID}`
      })
    });
    const data = await results.json();
    const movie = data[0];
    // console.log(movie);
    let netflix = '<input type="checkbox" id="netflix"/>';
    let hulu = '<input type="checkbox" id="hulu"/>';
    let prime = '<input type="checkbox" id="prime"/>';
    let disney = '<input type="checkbox" id="disney"/>';
    if (movie.is_on_netflix === 1) {
      netflix = '<input type="checkbox" id="netflix" checked="checked"/>';
    }
    if (movie.is_on_hulu === 1) {
      hulu = '<input type="checkbox" id="hulu" checked="checked"/>';
    }
    if (movie.is_on_prime === 1) {
      prime = '<input type="checkbox" id="prime" checked="checked"/>';
    }
    if (movie.is_on_disney === 1) {
      disney = '<input type="checkbox" id="disney" checked="checked"/>';
    }
    form.innerHTML = `
    <div class="row">
    <form class="col s12 l12">
      <div class="row">
        <div class="input-field col s6 l6">
          <input id="title" type="text" name="title" required="required" value="${movie.title}" />
          <label class="active">Title</label>
          <span class="validation" id="title-v">Please enter a title</span>
        </div>
        <div class="input-field col s6 l6">
          <input id="year" type="text" name="year" required="required"  value="${movie.year}"/>
          <label class="active">Release Year</label>
          <span class="validation" id="year-v">Please enter a valid 4 digit year</span>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s6 l6">
          <select id="language-input" name="language_id" required="required"></select>
          <label>Language</label>
          <span class="validation" id="lang-v">Please select a language</span>
        </div>
        <div class="input-field col s6 l6">
          <select id="rating-input" name="rating_id" required="required"></select>
          <label>Rating</label>
          <span class="validation" id="rating-v">Please select a rating</span>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6 l6">
          <select id="genre-input" name="genre_id" required="required"></select>
          <label>Genre</label>
          <span class="validation" id="genre-v">Please select a genre</span>
        </div>
        <div class="input-field col s6 l6">
          <input id="imageURL" type="text" name="image_url" required="required"  value="${movie.image_url}"/>
          <label class="active">Image URL</label>
          <span class="validation" id="image-v">Please enter a working image URL ending in .jpg, .png, or .jpeg</span>
        </div>
        <div class="input-field col s12 l12">
          <label class="active">Availability</label>
          <form action="#">
            <p>
              <label>
              ${netflix}
                <span>Netflix</span>
              </label>
            </p>
            <p>
              <label>
              ${hulu}
                <span>Hulu</span>
              </label>
            </p>
            <p>
              <label>
              ${prime}
                <span>Prime</span>
              </label>
            </p>
            <p>
              <label>
              ${disney}
                <span>Disney</span>
              </label>
            </p>
          </form>
          <span class="validation" id="platform-v">Please select at least one platform</span>
        </div>
    </form>
  </div>
  <!-- <input type="submit" id="save-button"></input> -->
  <a class="waves-effect waves-light btn-large" id="save-button">Save</a>`;
    // populate dropdowns
    await populateEditGenres(movie.genre);
    await populateEditLanguages(movie.lang);
    await populateEditRatings(movie.rating);

    // initialize dropdowns
    M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
    M.FormSelect.init(document.querySelectorAll('select'));

    const saveBtn = document.querySelector('#save-button');
    const dict = {
      title: null,
      year: null,
      language_id: null,
      rating_id: null,
      genre_id: null,
      image_url: null,
      netflix: null,
      hulu: null,
      prime: null,
      disney: null
    };

    let initialImage = movie.image_id;
    saveBtn.addEventListener('click', async (submitEvent) => {
      submitEvent.preventDefault();

      Object.keys(dict).forEach((key) => {
        try {
          dict[key] = document.querySelector(`input[name="${key}]"`).value;
        } catch {
          try {
            dict[key] = document.getElementsByName(key)[0].value;
          } catch {
            dict[key] = document.querySelector(`#${key}`).checked ? 1 : 0;
          }
        }
        // console.log(key, dict[key]);
      });
      let valid = await validInputs(
        dict.title,
        dict.year,
        dict.language_id,
        dict.rating_id,
        dict.genre_id,
        dict.image_url,
        dict.netflix,
        dict.hulu,
        dict.prime,
        dict.disney
      );

      if (valid === false) {
        document.addEventListener('mouseover', async () => {
          Object.keys(dict).forEach((key) => {
            try {
              dict[key] = document.querySelector(`input[name="${key}]"`).value;
            } catch {
              try {
                dict[key] = document.getElementsByName(key)[0].value;
              } catch {
                dict[key] = document.querySelector(`#${key}`).checked ? 1 : 0;
              }
            }
          });
          valid = await validInputs(
            dict.title,
            dict.year,
            dict.language_id,
            dict.rating_id,
            dict.genre_id,
            dict.image_url,
            dict.netflix,
            dict.hulu,
            dict.prime,
            dict.disney
          );
        });
      }

      else if (valid === true) {
        const availabilityResults = await fetch('/api/custom', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: `SELECT availability_id FROM availability WHERE 
                      is_on_netflix = ${dict.netflix} AND
                      is_on_hulu = ${dict.hulu} AND
                      is_on_prime = ${dict.prime} AND
                      is_on_disney = ${dict.disney}`
          })
        });

        const JSONavailability = await availabilityResults.json();

        if (dict.image_url !== movie.image_url) {
          await fetch('/api/images', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ image_url: dict.image_url })
          });
          const images = await fetch('/api/images');
          const JSONimages = await images.json();
          initialImage = JSONimages.data.length;
        // console.log('no match')
        }

        await fetch(`/api/movies/${editMovieID}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: dict.title,
            year: dict.year,
            language_id: dict.language_id,
            availability_id: JSONavailability[0].availability_id,
            rating_id: dict.rating_id,
            genre_id: dict.genre_id,
            image_id: initialImage
          })
        });
        window.location = '/records.html';
      }
    });
  } else {
    const saveBtn = document.querySelector('#save-button');
    // saveBtn.classList.add('disabled');
    // populate dropdowns
    await populateGenres(window.location.pathname);
    await populateLanguages();
    await populateRatings();

    // initialize modals
    M.Modal.init(document.querySelectorAll('.modal'), {
      dismissible: false,
      startingTop: '10%',
      opacity: '.3'
    });

    // initialize dropdowns
    M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
    M.FormSelect.init(document.querySelectorAll('select'));
    // saveBtn.classList.remove('disabled');
    const dict = {
      title: null,
      year: null,
      language_id: null,
      rating_id: null,
      genre_id: null,
      image_url: null,
      netflix: null,
      hulu: null,
      prime: null,
      disney: null
    };

    saveBtn.addEventListener('click', async (submitEvent) => {
      submitEvent.preventDefault();

      Object.keys(dict).forEach((key) => {
        try {
          dict[key] = document.querySelector(`input[name="${key}]"`).value;
        } catch {
          try {
            dict[key] = document.getElementsByName(key)[0].value;
          } catch {
            dict[key] = document.querySelector(`#${key}`).checked ? 1 : 0;
          }
        }
      });
      // TODO
      let valid = await validInputs(
        dict.title,
        dict.year,
        dict.language_id,
        dict.rating_id,
        dict.genre_id,
        dict.image_url,
        dict.netflix,
        dict.hulu,
        dict.prime,
        dict.disney
      );

      document.addEventListener('mouseover', async () => {
        Object.keys(dict).forEach((key) => {
          try {
            dict[key] = document.querySelector(`input[name="${key}]"`).value;
          } catch {
            try {
              dict[key] = document.getElementsByName(key)[0].value;
            } catch {
              dict[key] = document.querySelector(`#${key}`).checked ? 1 : 0;
            }
          }
        });
        valid = await validInputs(
          dict.title,
          dict.year,
          dict.language_id,
          dict.rating_id,
          dict.genre_id,
          dict.image_url,
          dict.netflix,
          dict.hulu,
          dict.prime,
          dict.disney
        );
      });

      if (valid === true) {
        const availabilityResults = await fetch('/api/custom', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: `SELECT availability_id FROM availability WHERE
                        is_on_netflix = ${dict.netflix} AND
                        is_on_hulu = ${dict.hulu} AND
                        is_on_prime = ${dict.prime} AND
                        is_on_disney = ${dict.disney}`
          })
        });

        const JSONavailability = await availabilityResults.json();

        await fetch('/api/images', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ image_url: dict.image_url })
        });

        const images = await fetch('/api/images');
        const JSONimages = await images.json();

        await fetch('/api/movies', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: dict.title,
            year: dict.year,
            language_id: dict.language_id,
            availability_id: JSONavailability[0].availability_id,
            rating_id: dict.rating_id,
            genre_id: dict.genre_id,
            image_id: JSONimages.data.length
          })
        });
        window.location = '/records.html?end';
      }
    });
  }
});
