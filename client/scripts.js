/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
async function loadIntoTable(url) {
  const reponse = await fetch(url);
  const arrayFromJson = await reponse.json(); // This changes it into data we can use - an object
  data = await arrayFromJson.data;
  console.log(arrayFromJson);
  const tableFinder = document.querySelector('.table');
  // creating the rows

  data.forEach((element) => {
    const row = document.createElement('tr');
    const row_artist_id = document.createElement('td');
    const row_first_name = document.createElement('td');
    const row_last_name = document.createElement('td');
    const row_country = document.createElement('td');
    row_artist_id.innerHTML = element.artist_id;
    row_first_name.innerHTML = element.first_name;
    row_last_name.innerHTML = element.last_name;
    row_country.innerHTML = element.country_id;
    row.appendChild(row_artist_id);
    row.appendChild(row_first_name);
    row.appendChild(row_last_name);
    row.appendChild(row_country);
    tableFinder.appendChild(row);
  });
}
loadIntoTable('/api/artists');

async function loadGenreTable(url) {
  const reponse = await fetch(url);
  const arrayFromJson = await reponse.json(); // This changes it into data we can use - an object
  data = await arrayFromJson.data;
  const tableFinder = document.querySelector('.table');
  // creating the rows

  data.forEach((input) => {
    const line = document.createElement('tr');
    const row_genre_id = document.createElement('td');
    const row_genre_name = document.createElement('td');

    row_genre_id.innerHTML = input.genre_id;
    row_genre_name.innerHTML = input.genre_name;

    line.appendChild(row_genre_id);
    line.appendChild(row_genre_name);

    tableFinder.appendChild(line);
  });
}
loadGenreTable('/api/genres');