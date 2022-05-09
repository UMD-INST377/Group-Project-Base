// CREATES TABLE FOR ARTISTS USING JSON DATA FROM DATABASE
tableMakeArtist = fetch('/api/artist').then((data) => {
  console.log(data);
  return data.json();
}).then((objectData) => {
  console.log(objectData);
  let tableData = '';
  objectData.map((values) => {
    tableData += `<tr>
    <td>${values.artist_id}</td>
    <td>${values.label_id}</td>
    <td>${values.stage_name}</td>
    <td>${values.first_name}</td>
    <td>${values.last_name}</td>
    <td>${values.gender}</td>
    <td>${values.age}</td>
  </tr>`;
  });
  document.getElementById('table_body_artist').innerHTML = tableData;
}).catch((err) => {
  console.log(err);
});

// CREATES TABLE FOR ALBUM USING JSON DATA FROM DATABASE
tableMakeAlbum = fetch('/api/album').then((data) => {
  console.log(data);
  return data.json();
}).then((objectData) => {
  console.log(objectData);
  let tableData = '';
  objectData.map((values) => {
    tableData += `<tr>
    <td>${values.album_id}</td>
    <td>${values.release_id}</td>
    <td>${values.genre_id}</td>
    <td>${values.price_id}</td>
    <td>${values.album_name}</td>
  </tr>`;
  });
  document.getElementById('table_body_album').innerHTML = tableData;
}).catch((err) => {
  console.log(err);
});

// CREATES TABLE FOR GENRE USING JSON DATA FROM DATABASE
tableMakeGenre = fetch('/api/genre').then((data) => {
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
  document.getElementById('table_body_genre').innerHTML = tableData;
}).catch((err) => {
  console.log(err);
});

// Selectors for different tables within our application/database
const x = document.getElementById('artist');
x.style.display = 'none';

const y = document.getElementById('album');
y.style.display = 'none';

const z = document.getElementById('genre');
z.style.display = 'none';

// Function to display full details for records
function changeTable() {
  let dropdown = document.getElementById('selectBox')
  let index = dropdown.selectedIndex;
  if (index === 1) {
    x.style.display = 'block';
    y.style.display = 'none';
    z.style.display = 'none';
  }

  else if (index === 2) {
    y.style.display = 'block';
    x.style.display = 'none';
    z.style.display = 'none';
  }

  else if (index === 3) {
    z.style.display = 'block';
    x.style.display = 'none';
    y.style.display = 'none';
  } 
  else if (index !== 1 || index !== 2 || index !== 3) {
    x.style.display = 'none';
    y.style.display = 'none';
    z.style.display = 'none';
  }
}

// FUNCTION TO SEARCH IN OUR DATBASE
async function searchData() {
  const results = await fetch('/api/album');
  const arrayFromJson = await results.json();

  const resultsTwo = await fetch('/api/artist');
  const arrayFromJsonTwo = await resultsTwo.json();

  const resultsThree = await fetch('/api/genre');
  const arrayFromJsonThree = await resultsThree.json();
  console.log(arrayFromJson.data);

  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let y = document.querySelector('#list-holder');
  y.innerHTML = ''

  if (input === "") {
    y.style.display = "none";
  } else {
    y.style.display = "block"
  }

  for (i = 0; i < arrayFromJson.length; i++) {
    let objAlbum = arrayFromJson[i];

    if (objAlbum.album_name.toLowerCase().includes(input)) {
      const elem = document.createElement('tr')
      elem.innerHTML = `[ALBUM] ${objAlbum.album_name}`
      y.appendChild(elem)
    }
  }
  for (i = 0; i < arrayFromJsonTwo.length; i++) {
    let objArtist = arrayFromJsonTwo[i];

    if (objArtist.stage_name.toLowerCase().includes(input)) {
      const elem = document.createElement('tr')
      elem.innerHTML = `[ARTIST] ${objArtist.stage_name}  (${objArtist.first_name} ${objArtist.last_name})`
      y.appendChild(elem)
    }
  }
  for (i = 0; i < arrayFromJsonThree.length; i++) {
    let objGenre = arrayFromJsonThree[i];

    if (objGenre.genre_name.toLowerCase().includes(input)) {
      const elem = document.createElement('tr')
      elem.innerHTML = `[GENRE] ${objGenre.genre_name}`
      y.appendChild(elem)
    }
  }
}

document.addEventListener('DOMContentLoaded', async () => searchData());