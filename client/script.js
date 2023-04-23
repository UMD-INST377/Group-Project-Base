//map initialization
const map = L.map("mapid").setView([0, 0], 2);
//tile layer of map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: 
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
     maxZoom: 18
}).addTo(map);



async function getEarthquakeData() {
    const response = await fetch("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-01-02");
    const data = await response.json();
    return data.features;
  }
  
  getEarthquakeData().then(quakes => {
    // Process the earthquake data into the format needed for display on the map
    let quakeMarkers = quakes.map(quake => {
      return {
        title: quake.properties.title,
        latlng: [quake.geometry.coordinates[1], quake.geometry.coordinates[0]],
        magnitude: quake.properties.mag,
        depth: quake.geometry.coordinates[2]
      };
    });
  });


document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests