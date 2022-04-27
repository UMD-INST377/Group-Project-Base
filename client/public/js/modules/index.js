/* eslint-disable import/prefer-default-export */
import { populateGenres } from './populate.js';
import { displayResults } from './display.js';

document.addEventListener('DOMContentLoaded', async () => {
  // initialize dropdown
  await populateGenres();
  M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
  M.FormSelect.init(document.querySelectorAll('select'));

  // load initial movies
  const results = await fetch('/api/table/data/9');
  const data = await results.json();
  displayResults(data);

  const dict = {
    genre_id: null,
    netflix: null,
    hulu: null,
    prime: null,
    disney: null
  };
  const search = document.querySelector('#search');

  search.addEventListener('keypress', async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      // console.log(search.value)
      const newResults = await fetch('/api/custom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `select movie_id, title, year, genre, language as 'lang', 
          rating, image_url, is_on_netflix, is_on_hulu, is_on_prime, is_on_disney from movies
            left join images using(image_id)
            left join availability using(availability_id)
            left join genres using(genre_id)
            left join ratings using(rating_id)
            left join languages using(language_id)
            WHERE title LIKE '%${search.value}%'
          order by movie_id`
        })
      });
      const newData = await newResults.json();
      displayResults(newData);
      let numResults = `${newData.length} result`;
      if (newData.length !== 1) {
        numResults += 's';
      }
      document.querySelector('#num-results').innerHTML = numResults;
    }
  });

  document.querySelector('#submit-filters').addEventListener('click', async (submitEvent) => {
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

    const exclude = [];
    const include = [];
    let platformsQuery = 'WHERE ';

    Object.keys(dict).forEach((item) => {
      if (item !== 'genre_id') {
        if (dict[item] === 1) {
          include.push(item);
        } else {
          exclude.push(item);
        }
      }
    });

    if (include.length > 0) {
      platformsQuery += '(';
      include.forEach((item) => {
        platformsQuery += `is_on_${item} = 1 `;
        if (include.slice(include.indexOf(item) + 1).length > 0) {
          platformsQuery += 'OR ';
        }
      });
      platformsQuery += ') ';
    }

    const platformError = document.querySelector('#platform-error');
    if (exclude.length === 4) {
      platformError.style.setProperty('display', 'block');
    } else {
      let genreQuery = '';
      if (dict.genre_id !== '') {
        genreQuery = `AND genre_id = ${dict.genre_id} `;
      }

      const newResults = await fetch('/api/custom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `select movie_id, title, year, genre, language as 'lang', 
          rating, image_url, is_on_netflix, is_on_hulu, is_on_prime, is_on_disney from movies
            left join images using(image_id)
            left join availability using(availability_id)
            left join genres using(genre_id)
            left join ratings using(rating_id)
            left join languages using(language_id)
            ${platformsQuery}
            ${genreQuery}
          order by movie_id`
        })
      });
      const newData = await newResults.json();
      platformError.style.setProperty('display', 'none');
      displayResults(newData);
      let numResults = `${newData.length} result`;
      if (newData.length !== 1) {
        numResults += 's';
      }
      document.querySelector('#num-results').innerHTML = numResults;
    }
  });
});