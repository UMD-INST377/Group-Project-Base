const map = L.map('map').setView([38.989, -76.938], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
}).addTo(map);
const scdcircle = L.circle([38.983, -76.9438], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 50
}).addTo(map);

const ncdcircle = L.circle([38.99235, -76.9465], {
  color: 'blue',
  fillColor: '#0000FF',
  fillOpacity: 0.5,
  radius: 50
}).addTo(map);

const circle251 = L.circle([38.9925, -76.95], {
  color: 'green',
  fillColor: '#00FF00',
  fillOpacity: 0.5,
  radius: 50
}).addTo(map);