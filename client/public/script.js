<<<<<<< Updated upstream
=======
/* eslint-disable no-inner-declarations */
/* eslint-disable no-console */
/* eslint-disable camelcase */
>>>>>>> Stashed changes
/* eslint-disable brace-style */
import { loadIndex } from './modules/index.js';
import { loadRecords } from './modules/records.js';
import { loadForm } from './modules/form.js';
<<<<<<< Updated upstream

document.addEventListener('DOMContentLoaded', async () => {
=======
import { loadAvail } from './modules/availability.js';

function createHtmlList(collection) {
  // console.log('created HTML creator');
  // console.log(collection);
  const targetList = document.querySelector('#movies-list');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {name} = item;
    const displayName = name.toLowerCase();
    const injectThis = `<li>${item.name}</li>`;
    targetList.innerHTML += injectThis;
  });
}

async function loadTable(url) {
  const res = await fetch(url);
  const arrayFromJson = await res.json();
  const data = await arrayFromJson.data;
  console.log(arrayFromJson);
  const tableFinder = document.querySelector('table');
  data.forEach((element) => {
    const row = document.createElement('tr');
    const row_rating_id = document.createElement('td');
    const row_rating = document.createElement('td');
    const row_description = document.createElement('td');
    row_rating_id.innerHTML = element.rating_id;
    row_rating.innerHTML = element.rating;
    row_description.innerHTML = element.description;
    row.appendChild(row_rating_id);
    row.appendChild(row_rating);
    row.appendChild(row_description);
    tableFinder.appendChild(row);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
>>>>>>> Stashed changes
  const currentPage = window.location.pathname;
  if (currentPage === '/' || currentPage === '/index.html') { loadIndex(); }
  else if (currentPage === '/records.html') { loadRecords(); }
  else if (currentPage === '/form.html') { loadForm(); }
<<<<<<< Updated upstream
=======
  else if (currentPage === '/availability.html') { loadAvail(); }
  else if (currentPage === '/ratings.html') { loadTable('api/ratings'); }
>>>>>>> Stashed changes
});