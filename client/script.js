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

let markers = L.markerClusterGroup({
  spiderfyOnMaxZoom: true,
  showCoverageOnHover: false,
  zoomToBoundsOnClick: true
});


// Fetch earthquake data from USGS API
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
    }
  });


  // Add a marker for each earthquake to the marker clusters layer
  quakeMarkers.forEach(quake => {
    let marker = L.marker(quake.latlng, {
      title: quake.title,
      icon: L.divIcon({
        className: "marker",
        html: "<span>" + quake.magnitude + "</span>"
      })
    });
    marker.bindPopup("<h3>" + quake.title + "</h3><p><strong>Magnitude:</strong> " + quake.magnitude + "</p><p><strong>Depth:</strong> " + quake.depth + " km</p>");
    markers.addLayer(marker);
  });

  // Add the marker clusters layer to the map
  map.addLayer(markers);
});


document.addEventListener('DOMContentLoaded', async () => getEarthquakeData()); // the async keyword means we can make API requests




