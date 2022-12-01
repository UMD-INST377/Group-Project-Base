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
    if (item.number_bags > 9) { //temp if statement so website doesnt load all amount of data
      const latitude = item.latitude;
      const longitude = item.longitude;
      const marker = L.marker([longitude, latitude]).addTo(map);
      const list = '<ul>' + 
      '<li> Organization - (' + item.organization + ')</li>' +
      '<li> Permit Number - (' + item.permit_num + ')</li>' +
      '<li> Type of Trash - (' + item.type_litter + ')</li>' +
      '<li> Numbers of Bags - (' + item.number_bags + ')</li>' +
      '<li> Latitude - (' + item.latitude + ')</li>' +
      '<li> Longitude - (' + item.longitude + ')</li>' +
      '</ul>';
      marker.bindPopup(list).openPopup();
    }
    // if (index === 0) {
    //   map.setView([latitude, longitude], 10);
    // }
  });
}

async function createArray(year) {
  const dataList = [];
  try {
    const url = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json?impl_comp_yr=';
    // let obj;
    const res = await fetch(url + year);
    const obj = await res.json();
    for (let i = 0; i < obj.length; i++) {
      dataList.push(obj[i]);
    }
    return dataList;
  } catch (err) {
    console.log('Data request failed', err);
    res.json({message: 'Data request failed', error: err});
  }
}

async function mainEvent() {
  const pageMap = initMap();

  const apiData = await(createArray(2022));

  // const results = await fetch('/api/litterService')
  // const arrayFromJson = await results.json();

  // console.log(arrayFromJson.data)
  // console.table(arrayFromJson.data)

  // console.log(arrayFromJson.data[0]);

  markerPlace(apiData, pageMap);
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());