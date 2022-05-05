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

// CREATES TABLE FOR GENRE USING JSON DATA FROM DATABASE (NEED TO FIX)
/*tableMakeGenre = fetch('/api/genre').then((data) => {
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
});*/


// FUNCTION TO SHOW/HIDE FULL TABLE CONTENTS FOR ARTISTS
const x = document.getElementById('artist');
x.style.display = 'none';

function showTableArtist() {
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

// FUNCTION TO SHOW/HIDE FULL TABLE CONTENTS FOR ALBUM
const y = document.getElementById('album');
y.style.display = 'none';

function showTableAlbum() {
  if (y.style.display === 'none') {
    y.style.display = 'block';
  } else {
    y.style.display = 'none';
  }
}

// FUNCTION TO SHOW/HIDE FULL TABLE CONTENTS FOR GENRE
const z = document.getElementById('genre');
z.style.display = 'none';

function showTableGenre() {
  if (z.style.display === 'none') {
    z.style.display = 'block';
  } else {
    z.style.display = 'none';
  }
}

// FUNCTION TO SEARCH IN OUR DATBASE
async function searchAlbum() {
  const results = await fetch('/api/album');
  const arrayFromJson = await results.json();

  const resultsTwo = await fetch('/api/artist');
  const arrayFromJsonTwo = await resultsTwo.json();

  /*const resultsThree = await fetch('/api/genre');
  const arrayFromJsonThree = await resultsThree.json();*/
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
  /*for (i = 0; i < arrayFromJsonThree.length; i++) {
    let objGenre = arrayFromJsonThree[i];

    if (objGenre.genre_name.toLowerCase().includes(input)) {
      const elem = document.createElement('tr')
      elem.innerHTML = `[GENRE] ${objGenre.genre_name}`
      y.appendChild(elem)
    }
  }*/
}

document.addEventListener('DOMContentLoaded', async () => searchAlbum());