function processCameras(list) {
  console.log('speed cameras list');
  const range = [...Array(15).keys()];
  const newArray = range.map((item) => {
    const index = getRandomIntInclusive(0, list.length);
    return list[index];
  });

  return newArray;
}

function initMap() {
    const map = L.map('map').setView([38.7849, -76.8721], 10);
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
      const {coordinates} = item.location_1;
      L.marker([coordinates[1], coordinates[0]]).addTo(map);
      if (index === 0) {
        map.setView([coordinates[1], coordinates[0]], 10);
      }
    });
  }

  function clickedOn(array, map) {
    array.forEach((item, index) => {
      const {coordinates} = item.location_1;
      const popup = L.popup().setLatLng([coordinates[1], coordinates[0]]).setContent("You Clicked me!").openOn(map);
      L.marker([coordinates[1], coordinates[0]]).addTo(map);
      if (index === 0) {
        map.setView([coordinates[1], coordinates[0]], 10);
        map.on('click', onMapClick);
      }
      alert("You clicked the map at " + e.latlng);
    });
  }

async function getData() {
    const url = 'https://data.princegeorgescountymd.gov/resource/mnkf-cu5c.json';
    const data = await fetch(url);
    const json = await data.json();
    const reply = json.filter((item) => Boolean(item.location_1)).filter((item) => Boolean(item.school));
    return reply;
}

async function mainEvent() {

    const page = initMap();
      
    const form = document.querySelector('.main_form'); 
    const submit = document.querySelector('#get-resto');
    const loadAnimation = document.querySelector('.lds-ellipsis');
    submit.style.display = 'none';

    const mapData = await getData();
  
    console.table(mapData.data);
    console.log(mapData.data[0]);
    console.log(`${mapData.data[0].school} ${mapData.data[0].category}`);

    // Return if we have no data
    if(mapData.data?.length > 0) {
      // let's turn the submit button back on by setting it to display as a block when we have data available
      submit.style.display = 'block'; 

      // Let's hide our load button not that we have some data to manipulate
      loadAnimation.classList.remove('lds-ellipsis');
      loadAnimation.classList.add('lds-ellipsis_hidden'); 

      let currentList = [];
      form.addEventListener('submit', async (submitEvent) => {
          submitEvent.preventDefault();
          currentList = processRestaurants(mapData.data);

          const cameras = currentList.filter((item) => Boolean(item.location_1));

          markerPlace(cameras, page);
          clickedOn(cameras, page);
        });
    }
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());
