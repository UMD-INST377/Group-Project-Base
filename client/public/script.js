/* eslint-disable camelcase */
async function populateGenres() {
  const dropdown = document.querySelector('#genres-input');
  const results = await fetch('/api/genres');
  const arrayFromJson = await results.json();
  arrayFromJson.data.forEach((item) => {
    if (item.genre !== 'Other') {
      const option = document.createElement('option');
      option.text = item.genre;
      option.value = item.genre;
      dropdown.appendChild(option);
    }
  });
}
async function populateRatings() {
  const dropdwn = document.querySelector('#ratings-input');
  const RatingResult = await fetch('/api/ratings');
  const arrayFromJson = await RatingResult.json();
  arrayFromJson.data.forEach((item) => {
    if (item.rating !== 'Other') {
      const RatingOption = document.createElement('option');
      option.text = item.rating;
      option.value = item.rating;
      dropdwn.appendChild(option);
    }
  });
}
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
  data = await arrayFromJson.data;
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
loadTable('/api/ratings');
document.addEventListener('DOMContentLoaded', async () => {
  // populate genres dropdown
  await populateGenres();
  await populateRatings();

  // select dropdowns
  M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
  M.FormSelect.init(document.querySelectorAll('select'));

  // for demo purposes; to be deleted
  function multiplyNode(node, count, deep) {
    for (let i = 0, copy; i < count - 1; i += 1) {
      copy = node.cloneNode(deep);
      node.parentNode.insertBefore(copy, node);
    }
  }
  multiplyNode(document.querySelector('.movie'), 12, true);
});