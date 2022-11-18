function injectHTML() {

}

function initMap() {
    const map = L.map('map').setView([38.7849, -76.8721], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    return map;
  }

  function markerPlace(array, map) {
    array.forEach((item, index) => {
      const {coordinates} = item.geocoded_column_1;
      L.marker([coordinates[1], coordinates[0]]).addTo(map);
      if (index === 0) {
        map.setView([coordinates[1], coordinates[0]], 10);
      }
    });
  }

  function clickedOn() {
    const popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("You clicked me!")
    .openOn(map);

    alert(alert("You clicked the map at " + e.latlng));
  }

async function mainEvent() {
    
    const page = initMap();
    
    // proceed if we have data. if not, return 
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
