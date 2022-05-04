tableCreate = fetch('/api/genre').then((genreData) => {
  console.log(genreData);
  return genreData.json();
}).then((object) => {
  console.log(object);
  let tableValues = '';
  object.map((values) => {
    tableValues += `<tr>
      <td>${values.genre_id}</td>
      <td>${values.genre_name}</td>
    </tr>`;
  });
  document.getElementById('tableOutline').innerHTML = tableValues;
}).catch((err) => {
  console.log(err);
});

async function searchGenre() {
  const results = await fetch('/api/genre');
  const arrayFromJson = await results.json();
  console.log(arrayFromJson.genreData);

  let input = document.getElementById('searchbar').value;
  input = input.toLowerCase();
  const x = document.querySelector('#list-holder');
  x.innerHTML = '';

  for (i = 0; i < arrayFromJson.length; i++) {
    const obj = arrayFromJson[i];

    if (obj.stage_name.toLowerCase().includes(input)) {
      const elem = document.createElement('li');
      elem.innerHTML = `${obj.stage_name} - ${obj.age}`;
      x.appendChild(elem);
    }
  }
}

document.addEventListener('DOMContentLoaded', async () => searchGenre());

const x = document.querySelector('.table');
x.style.display = 'none';
function createTable() {
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}