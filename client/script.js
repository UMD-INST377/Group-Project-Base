const form = document.querySelector('.main-form');
const submit = document.querySelector('#get-location');

function initMap() {
  console.log('initMap');
  const map = L.map('map').setView([38.9849, -76.9378], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  return map;
}

// function markerPlace(array, map) {
//   map.eachLayer((layer) => {
//     if (layer instanceof L.Marker) {
//       layer.remove();
//     }
//   });

//   array.forEach((item, index) => {
//     const {coordinates} = item.geocoded_column;
//     L.marker([coordinates[1], coordinates[0]]).addTo(map);
//     if (index === 0) {
//       map.setView([coordinates[1], coordinates[0]], 10);
//     }
//   });
// }

const map = initMap();

async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json';
  const apiData = await fetch(url);
  const json = await apiData.json();
  const reply = json.filter((item) => Boolean(item.geocoded_column))
    .filter((item) => Boolean(item.council_district));
  return reply;
}

async function main() {
  const data = await getData();
  console.log(data[0]);
}
main();

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

// function districtCount(data, district) {
//   let count = 0;
//   data.forEach((obj) => {
//     Object.entries(obj).forEach(([key, value]) => {
//       obj.forEach((litter) => {
//         if (!litter.council_district) { return; }
//         if (litter.council_district === district) { count++; }
//       });
//     });

//     return count;
//   });
// }

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

// function districtLitters() {
//   for (let i = 1; i <= 9; i++) {
//     districts[i] = districtCount(data, i);
//   }
// }

// districtLitters();

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

