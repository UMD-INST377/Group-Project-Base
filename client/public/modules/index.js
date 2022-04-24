/* eslint-disable import/prefer-default-export */
import { populateGenres } from './populate.js';
import { displayResults } from './displayData.js';

async function loadIndex() {
  // initialize dropdowns
  await populateGenres();
  // M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
  M.FormSelect.init(document.querySelectorAll('select'));
  // document.querySelector('.dropdown-trigger').dropdown();

  // load initial movies
  const results = await fetch('/api/table/data/9');
  const data = await results.json();
  displayResults(data);
}

export { loadIndex };