async function populateGenres(currentPage) {
  const dropdown = document.querySelector('#genre-input');
  const results = await fetch('/api/genres');
  const genres = await results.json();
  if (currentPage === '/form.html' || currentPage === '/records.html') {
    dropdown.innerHTML += '<option value="" disabled selected>Choose your option</option>';
  } else {
    dropdown.innerHTML += '<option value="" selected>All</option>';
  }
  genres.data.forEach((item) => {
    // if (item.genre !== 'Other') {
    const option = document.createElement('option');
    option.text = item.genre;
    option.value = item.genre_id;
    dropdown.appendChild(option);
    // }
  });
}

async function populateLanguages() {
  const dropdown = document.querySelector('#language-input');
  const results = await fetch('/api/languages');
  const languages = await results.json();
  dropdown.innerHTML += '<option value="" disabled selected>Choose your option</option>';
  languages.data.forEach((item) => {
    const option = document.createElement('option');
    option.text = item.language;
    option.value = item.language_id;
    dropdown.appendChild(option);
  });
}

async function populateRatings() {
  const dropdown = document.querySelector('#rating-input');
  const results = await fetch('/api/ratings');
  const ratings = await results.json();
  dropdown.innerHTML += '<option value="" disabled selected>Choose your option</option>';
  ratings.data.forEach((item) => {
    const option = document.createElement('option');
    option.text = item.rating;
    option.value = item.rating_id;
    dropdown.appendChild(option);
  });
}

export { populateGenres, populateLanguages, populateRatings };