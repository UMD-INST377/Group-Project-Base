/* eslint-disable camelcase */

// function createHtmlList(collection) {
//   // console.log('created HTML creator');
//   // console.log(collection);
//   const targetList = document.querySelector('#movies-list');
//   targetList.innerHTML = '';
//   collection.forEach((item) => {
//     const {name} = item;
//     const displayName = name.toLowerCase();
//     const injectThis = `<li>${item.name}</li>`;
//     targetList.innerHTML += injectThis;
//   });
// }

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
  if (window.location.pathname === '/ratings.html') { loadTable('api/ratings'); }
});