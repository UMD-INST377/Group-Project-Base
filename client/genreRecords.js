tableCreate = fetch('/api/genre').then((data) => {
  console.log(data);
  return data.json();
}).then((objectData) => {
  console.log(objectData);
  let tableData = '';
  objectData.map((values) => {
    tableData += `<tr>
      <td>${values.genre_id}</td>
      <td>${values.genre_name}</td>
    </tr>`;
  });
  document.getElementById('table_body').innerHTML = tableData;
}).catch((err) => {
  console.log(err);
});

async function searchGenre() {
  const results = await fetch('/api/genre');
  const arrayFromJson = await results.json();
  // console.log(arrayFromJson.data);

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
function showTable() {
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}