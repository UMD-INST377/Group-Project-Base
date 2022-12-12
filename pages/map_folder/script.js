/* Data Request to API */
token = "BQA7CbsNzjJohObFs-CV8gcQdDMv_Tw8VlnryfzjfwQB6NdvJHsA3ktnB-L4ymnB9-JHfFYhkgvCH4kLWOyqFmOiwh0EM__OBeOorH3lKPTH51m3oQNMlOP1W6k1CtFYvFg3B3JbZzp-2eVY4iIGiZBRMyyyiUEcdYV35zdFJpEdtaMHano72vaPm0YXh4YBLkOAJ1NuHF8HR4TLNdE_gapQRURhagSPgwho5rYL9f6QXSU-13U_"
term = "long_term";
artist_ids = "39cDMNnxwjrKJE1dyt47jh,1aBDI4nH6OfAkNyUX08O2V";
album_id = "0TnOYISbd1XYRBk9myaseg";

// Saves the token to storage which can be used anywhere on the website
if (token !== null) {
  localStorage.setItem("access_token", token);
} else {
  token = localStorage.getItem("access_token");
}
console.log("token");
console.log(token);


function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + newMin); // The maximum is inclusive and the minimum is inclusive
}

const data_format = (track, location) => {
  let { name, release_date, total_tracks } = track;
  const newLine = `
  <div class="art_name">Album: ${name}</div>
  <div class="song_name">Release Date: ${release_date}</div>
  <div class="pop_name">Total Tracks: ${total_tracks}</div>`;
  let content = document.createElement("li");
  content.className = "song_container";
  content.innerHTML = newLine;
  location.appendChild(content);
};

function injectHTML(list) {
  console.log('fired injectHTML');
  const target = document.querySelector('#album_list');
  target.innerHTML = '';

  const listEl = document.createElement('ol');
  target.appendChild(listEl);
  list.forEach((item) => {
    const el = document.createElement('li');
    el.innerText = item.name;
    listEl.appendChild(el);
  });
}

function processAlbums(list) {
  console.log('fired Albums list');
  const range = [...Array(30).keys()];
  const newArray = range.map((item) => {
    const index = getRandomIntInclusive(0, list.length);
    return list[index];
  });
  return newArray;
}

function filterList(array, filterInputValue) {
  return array.filter((item) => {
    if (!item.name) { return; }
    const lowerCaseName = item.name.toLowerCase();
    const lowerCaseQuery = filterInputValue.toLowerCase();
    return lowerCaseName.includes(lowerCaseQuery);
  });
}

function initMap() {
    console.log('initMap');
    const map = L.map('map').setView([38.9897, -76.9378], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    return map;
  }
  
  function markerPlace(array, map) {
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        layer.remove();
      }
    });
  
   array.forEach((item, index) => {
      const {coordinates} = item.geocoded_column_1;
      L.marker([coordinates[1], coordinates[0]]).addTo(map);
      if (index === 0) {
        map.setView([coordinates[1], coordinates[0]], 12);
      }
    });
  }

async function mainEvent() {

  const pageMap = initMap();

  const form = document.querySelector('.main_form'); 
  const submit = document.querySelector('#get-info'); 
  const loadAnimation = document.querySelector('.lds-ellipsis');
  submit.style.display = 'none'; 


  const results = await fetch(
    `https://umd-spotify-backend.herokuapp.com/artist_albums?access_token=${token}&id=${album_id}`
  );
  const arrayFromJson = await results.json();
  console.log(arrayFromJson)

  console.log(arrayFromJson.items)

  if (!arrayFromJson.items?.length === 0){return;}
  submit.style.display = 'block';
  loadAnimation.classList.remove('lds-ellipsis');
  loadAnimation.classList.add('lds-ellipsis_hidden');
  
  let currentList = [];
  form.addEventListener('input', (event) => {
    console.log(event.target.value);
    const filteredList = filterList(currentList, event.target.value);
    injectHTML(filteredList);
    markerPlace(filteredList, pageMap);
  });

  form.addEventListener('submit', (submitEvent) => {
    submitEvent.preventDefault();
    currentList = processAlbums(arrayFromJson.items);
    console.log(currentList);
    injectHTML(currentList);
    markerPlace(currentList, pageMap);
  });

}

document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
