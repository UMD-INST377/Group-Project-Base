function initMap() {
  console.log('Map loaded');
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
    // console.log(item['latitude'])
    // const {coordinates} = item.geocoded_column;
    const latitude = item.latitude;
    const longitude = item.longitude;
    const marker = L.marker([longitude, latitude]).addTo(map);
    // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    const list = '<ul>' + 
    '<li> Organization - (' + item.organization + ')</li>' +
    '<li> Permit Number - (' + item.permit_num + ')</li>' +
    '<li> Type of Trash - (' + item.type_litter + ')</li>' +
    '<li> Numbers of Bags - (' + item.number_bags + ')</li>' +
    '<li> Latitude - (' + item.latitude + ')</li>' +
    '<li> Longitude - (' + item.longitude + ')</li>' +
    '</ul>';
    marker.bindPopup(list).openPopup();
    // if (index === 0) {
    //   map.setView([latitude, longitude], 10);
    // }
  });
}

async function mainEvent() {
  const pageMap = initMap();

  const results = await fetch('/api/litterService')
  const arrayFromJson = await results.json();

  console.log(arrayFromJson.data)
  // console.table(arrayFromJson.data)

  // console.log(arrayFromJson.data[0]);

  markerPlace(arrayFromJson.data, pageMap);
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());