async function dataHandler() {
  const mymap = MapInit();
  const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
  const request = await fetch(endpoint);
  const arrayName = await request.json();
  const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');

  function findMatches(wordToMatch, cities) {
    return cities.filter((place) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.zip === wordToMatch;
    });
  }

  let markers = [];

  function displayMatches(event) {
    markers.forEach((marker) => {
      marker.remove();
    });
    markers = [];
    const matchArray = findMatches(event.target.value, arrayName).slice(0, 5);
    matchArray.forEach((p) => {
      if (p.hasOwnProperty('geocoded_column_1')) {
        const point = p.geocoded_column_1;
        const latlong = point.coordinates;
        let marker = latlong;

        if (latlong[0] < 0) {
          marker = latlong.reverse();
        }
        markers.push(L.marker(marker).addTo(mymap));
        if (markers.length === 1) {
          mymap.setView(marker, 12);
        }
      }
    });

    const html = matchArray
      .map((place) => {
        const regex = new RegExp(event.target.value, 'gi');
        return `
                  <ul>
                      <li><div class="name">${place.name}</div></li>
                      <div class="category">${place.category}</div>
                      <div class="address">${place.address_line_1}</div>
                      <div class="city">${place.city}</div>
                      <div class="zip">${place.zip}</div>
                  </ul>
                  <br>
                  `;
      })
      .join('');
    if (event.target.value === '') {
      suggestions.innerHTML = '';
    } else {
      suggestions.innerHTML = html;
    }
  }
  searchInput.addEventListener('keyup', (evt) => {
    displayMatches(evt);
  });
}
window.onload = dataHandler;

function MapInit() {
  const mymap = L.map('mapid').setView([38.99, -76.93], 12);
  L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
    {
      attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
          'pk.eyJ1IjoiZHN0ZXdhcjYiLCJhIjoiY2t1dmdwa2d0NjhzMTJxcWplMWJmZXh1ZyJ9.y531qk17fAFYO_Rp9b--AQ'
    }
  ).addTo(mymap);

  return mymap;
}

async function mainThread() {
    const url = '/api/foodServicePG';
    const inputBox = document.querySelector();
}