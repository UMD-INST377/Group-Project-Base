fetch('http://localhost:3000/api/artist').then((data) => {
  console.log(data);
  return data.json();
}).then((objectData) => {
  console.log(objectData);
  let tableData = '';
  objectData.map((values) => {
    tableData+= `<tr>
    <td>${values.artist_id}</td>
    <td>${values.label_id}</td>
    <td>${values.stage_name}</td>
    <td>${values.first_name}</td>
    <td>${values.last_name}</td>
    <td>${values.gender}</td>
    <td>${values.age}</td>
  </tr>`;
  });
  document.getElementById('table_body').innerHTML = tableData;
}).catch((err) => {
  console.log(err);
});

async function searchArtist() {
  const results = await fetch('http://localhost:3000/api/artist');
  const arrayFromJson = await results.json();
  console.log(arrayFromJson.data);

  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.querySelector('#list-holder');
  x.innerHTML = ''

  for (i = 0; i < arrayFromJson.length; i++) {
    let obj = arrayFromJson[i];

    if (obj.stage_name.toLowerCase().includes(input)) {
      const elem = document.createElement('li')
      elem.innerHTML = `${obj.stage_name} - ${obj.age}`
      x.appendChild(elem)
    }
  }
}

document.addEventListener('DOMContentLoaded', async () => searchArtist());

const x = document.querySelector('.table');
x.style.display = 'none';
function showTable() {
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}