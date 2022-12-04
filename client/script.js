function initMap() {
  const map = L.map('map').setView([38.9897, -76.9378], 10);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  return map;
}

function markerPlace(array, map, organization, max, bags) {
  markerCounter = 1
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      layer.remove();
    }
  });
  array.forEach((item) => {
    if (markerCounter <= max) {
      if (item.number_bags > parseInt(bags) && item.organization === organization) {
        const {latitude} = item;
        const {longitude} = item;
        const marker = L.marker([longitude, latitude]).addTo(map);
        const list = `${'<ul>'
          + '<li> Organization - ('}${item.organization})</li>`
          + `<li> Permit Number - (${item.permit_num})</li>`
          + `<li> Type of Trash - (${item.type_litter})</li>`
          + `<li> Numbers of Bags - (${item.number_bags})</li>`
          + `<li> Latitude - (${item.latitude})</li>`
          + `<li> Longitude - (${item.longitude})</li>`
          + `<li> Creation Date - (${item.creationdate})</li>`
          + '</ul>';
        markerCounter++
        marker.bindPopup(list).openPopup();
      }
    };
  })
}

async function createArray(year) {
  const dataList = [];
  try {
    const url = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json?impl_comp_yr=';
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
  const submit = document.querySelector('#submit_info');
  const apiData = await (createArray(2022));

  // markerPlace(apiData, pageMap);
  submit.addEventListener('click', () => {
    const organization = document.querySelector('#Organization').value;
    const maxMarkers = document.querySelector('#Max').value;
    const bags = document.querySelector('#Bags').value;

    // testArray = [];
    // newArray = [];
    // let i = 0;
    // while (i < 11) {
    //   const random = Math.floor(Math.random() * apiData.length);
    //   testArray.push(random);
    //   i++;
    // }
    // testArray.forEach((item) => newArray.push(apiData[item]));

    markerPlace(apiData, pageMap, organization, maxMarkers, bags);
  });
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());