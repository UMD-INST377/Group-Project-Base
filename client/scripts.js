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

/* Artist lists */
async function searchArtists(url) {
  const reponse = await fetch(url);
  const arrayFromJson = await reponse.json(); // This changes it into data we can use - an object
  data = await arrayFromJson.data;
  
  const tableFinder = document.querySelector('.lists');
  // creating the rows

  data.forEach((info) => {
    const row = document.createElement('tr');
    const row_artist_id = document.createElement('td');
    const row_first_name = document.createElement('td');
    const row_last_name = document.createElement('td');

    row_artist_id.innerHTML = info.artist_id;
    row_first_name.innerHTML = info.first_name;
    row_last_name.innerHTML = info.last_name;

    row.appendChild(row_artist_id);
    row.appendChild(row_first_name);
    row.appendChild(row_last_name);

    tableFinder.appendChild(row);
  });
}
searchArtists('/api/artists');

/* Genre lists */
async function genreInfo(url) {
  const reponse = await fetch(url);
  const arrayFromJson = await reponse.json(); // This changes it into data we can use - an object
  data = await arrayFromJson.data;

  const tableFinder = document.querySelector('.lst');
  // creating the rows

  data.forEach((info) => {
    const row = document.createElement('tr');

    const row_genre = document.createElement('td');

    row_genre.innerHTML = info.genre_name;

    row.appendChild(row_genre);
    // row.appendChild(row_country);
    tableFinder.appendChild(row);
  });
}
genreInfo('/api/genres');

async function genreTable(url) {
  const reponse = await fetch(url);
  const arrayFromJson = await reponse.json(); // This changes it into data we can use - an object
  data = await arrayFromJson.data;

  const tableFinder = document.querySelector('.genre_table');
  // creating the rows

  data.forEach((element) => {
    const row = document.createElement('tr');
    const genre_id = document.createElement('td');
    const genreName = document.createElement('td');
    
    genre_id.innerHTML = element.genre_id;
    genreName.innerHTML = element.genre_name;
    
    row.appendChild(genre_id);
    row.appendChild(genreName);
    
    tableFinder.appendChild(row);
  });
}
genreTable('/api/genres');