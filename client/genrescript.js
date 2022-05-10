/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
async function loadGenreTable(url) {
  const reponse = await fetch(url);
  const arrayFromJson = await reponse.json(); // This changes it into data we can use - an object
  data = await arrayFromJson.data;
  // console.log(arrayFromJson);
  const tableFinder = document.querySelector('.table');
  // creating the rows

  data.forEach((element) => {
    const row = document.createElement('tr');
    const row_genre_id = document.createElement('td');
    const row_genre_name = document.createElement('td');
    row_genre_id.innerHTML = element.genre_id;
    row_genre_name.innerHTML = element.genre_name;
    row.appendChild(row_genre_id);
    row.appendChild(row_genre_name);
    tableFinder.appendChild(row);
  });
}
loadGenreTable('/api/genres');