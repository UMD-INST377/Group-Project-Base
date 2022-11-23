function injectHTML() {

}

function initMap() {
    const map = L.map('map').setView([38.7849, -76.8721], 11);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    return map;
  }

  function markerPlace(array, map) {
    array.forEach((item, index) => {
      const {coordinates} = item.location_1;
      L.marker([coordinates[1], coordinates[0]]).addTo(map);
      if (index === 0) {
        map.setView([coordinates[1], coordinates[0]], 10);
      }
    });
  }

  function clickedOn() {
    array.forEach((item, index) => {
      const {coordinates} = item.location_1;
      const popup = L.popup().setLatLng([coordinates[1], coordinates[0]]).setContent("You Clicked me!").openOn(map);
      L.marker([coordinates[1], coordinates[0]]).addTo(map);
      if (index === 0) {
        map.setView([coordinates[1], coordinates[0]], 10);
      }
      alert("You clicked the map at " + e.latlng);
    });
  }

async function mainEvent() {

    const page = initMap();
    
    const form = document.querySelector('.main_form'); 
    const submit = document.querySelector('#get-resto');
    submit.style.display = 'none';

    const results = await fetch('/api/speedCamerasPG');
    const arrayFromJson = await results.json(); // here is where we get the data from our request as JSON


    // Return if we have no data
    if(arrayFromJson.data?.length > 0) {

        form.addEventListener('input', (event) => {
            console.log('input', event.target.value);
            // const filteredList = filterList(currentList, event.target.value);
            // injectHTML(filteredList);
            markerPlace();
            map.on('click', onMapClick);
        });
    }
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());
