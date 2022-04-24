/* eslint-disable import/prefer-default-export */
import { populateGenres, populateLanguages, populateRatings } from './populate.js';

async function loadForm() {
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

  // const languageInstance = M.Modal.getInstance(document.querySelector('#language-modal'));
  // const ratingInstance = M.Modal.getInstance(document.querySelector('#rating-modal'));
  // const genreInstance = M.Modal.getInstance(document.querySelector('#genre-modal'));

  // add new record options
  // addNewRecordOptions();

  // initialize dropdowns
  M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
  M.FormSelect.init(document.querySelectorAll('select'));

  // document.querySelector('#genre-input').addEventListener('change', (event) => {
  //   if (event.target.value === 'Add new genre') {
  //     genreInstance.open();
  //   }
  // });

  // document.querySelector('#language-input').addEventListener('change', (event) => {
  //   if (event.target.value === 'Add new language') {
  //     languageInstance.open();
  //   }
  // });

  // document.querySelector('#rating-input').addEventListener('change', (event) => {
  //   if (event.target.value === 'Add new rating') {
  //     ratingInstance.open();
  //   }
  // });

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
    window.location = '/records.html';
  });
}

export { loadForm };