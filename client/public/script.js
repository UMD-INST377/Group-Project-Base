/* eslint-disable brace-style */
import { loadIndex } from './modules/index.js';
import { loadRecords } from './modules/records.js';
import { loadForm } from './modules/form.js';

document.addEventListener('DOMContentLoaded', async () => {
  const currentPage = window.location.pathname;
  if (currentPage === '/' || currentPage === '/index.html') { loadIndex(); }
  else if (currentPage === '/records.html') { loadRecords(); }
  else if (currentPage === '/form.html') { loadForm(); }
  else if (currentPage === '/availability.html') { loadAvail(); }
  else if (currentPage === '/ratings.html') { loadTable('api/ratings'); }
});