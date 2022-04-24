/* eslint-disable prefer-template */

// Makes mmap
function makeMap() {
  const map = L.map('map').setView([36.778336, -119.4179], 3);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
  }).addTo(map);
  return map;
}

// Creates map markers
function setMapCircles(map, collection) {
  console.log('fires map markers');
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      layer.remove();
    }
  });
  collection.forEach((item) => {
    const point = [item.latitude, item.longitude];
    // Formula to visualize the scale of the earthquake
    const magScale = Math.sqrt((10 ** item.magnitude));
    const circle = L.circle(point, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: magScale * 2 // Multiplied it to make to more visible on the map
    }).addTo(map);

    let dateResult = '';
    const dateObj = new Date(Date.parse(item.date));

    dateResult = dateObj.toLocaleDateString('en-us', {month: 'short', day: 'numeric', year: 'numeric'});

    circle.bindPopup('<strong>Date: </strong>' + dateResult + '<br/>'
                      + '<strong>Magnitude: </strong>' + item.magnitude + '<br/>'
                      + '<strong>Depth: </strong>' + item.depth + ' km');
  });
}

async function mainEvent () {
  const results = await fetch('http://localhost:3000/api/earth_info'); // This accesses some data from our API

  const arrayFromJson = await results.json();
  console.log(arrayFromJson);

  const myMap = makeMap();
  setMapCircles(myMap, arrayFromJson);
  // makePopUpMarkers(myMap, arrayFromJson);
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());