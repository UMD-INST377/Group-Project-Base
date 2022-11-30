/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
const form = document.querySelector('.main-form');
const submit = document.querySelector('#get-location');
// const data = getData();

// console.log(data);

async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json';
  const apiData = await fetch(url);
  const json = await apiData.json();
  console.log(json);
  return json;
}

const data = getData();

// const data = []

// $.getJSON(data, function (json) {
//   for (var key in json) {
//       if (json.hasOwnProperty(key)) {
//           var item = json[key];
//           data.push({
//               district: council_district,
//               latitude: latitude,
//               mobile: item.mobile,
//               email: item.email
//           });
//       }
//   }
//   });

console.log(data.keys);

function districtCount(data, district) {
  let count = 0;
  data.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      obj.forEach((litter) => {
        if (!litter.council_district) { return; }
        if (litter.council_district === district) { count++; }
      });
    });

    return count;
  });
}

const districts = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0
};

function districtLitters() {
  for (let i = 1; i <= 9; i++) {
    districts[i] = districtCount(data, i);
  }
}

districtLitters();

console.log(districts);
// function districtCount(district) {
//  var count = 0;
// for (var i = 0; i < data.length; i++) {
//      if (data[i].council_district == district) {
//          count++;
//      }
//  }
//  return count;
// }

function initMap() {
  console.log('initMap');
  const map = L.map('map').setView([38.9849, -76.9378], 13);
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
    const {coordinates} = item.Location;
    L.marker([coordinates[1], coordinates[0]]).addTo(map);
    if (index === 0) {
      map.setView([coordinates[1], coordinates[0]], 10);
    }
  });
}

const map = initMap();
