// Initialize the map
const map = L.map("mapid").setView([0, 0], 2);

// Add the tile layer (the base map)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery Â© <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18
}).addTo(map);

// Set up the marker clusters layer
let markers = L.markerClusterGroup({
  spiderfyOnMaxZoom: true,
  showCoverageOnHover: false,
  zoomToBoundsOnClick: true
});

// Fetch earthquake data from USGS API
async function getEarthquakeData() {
  const localStorageKey = 'earthquakeData20200101-20200102';

  let data = JSON.parse(localStorage.getItem(localStorageKey));

  if (!data) {
    // Fetch it from the server
    console.log("fetching data");
    const response = await fetch("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-01-02");
    data = await response.json();
    data = data.features;

    localStorage.setItem(localStorageKey, JSON.stringify(data));
  }

  return data;
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

  // Add a text box filter to the earthquake data
  const filterInput = document.createElement('input');
  filterInput.setAttribute('type', 'text');
  filterInput.setAttribute('placeholder', 'Filter earthquakes by location');
  filterInput.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    markers.clearLayers();
    quakeMarkers.forEach(quake => {
      if (quake.title.toLowerCase().includes(query)) {
        const marker = L.marker(quake.latlng, {
          title: quake.title,
          icon: L.divIcon({
            className: "marker",
            html: "<span>" + quake.magnitude + "</span>"
          })
        });
        marker.bindPopup("<h3>" + quake.title + "</h3><p><strong>Magnitude:</strong> " + quake.magnitude + "</p><p><strong>Depth:</strong> " + quake.depth + " km</p>");
        markers.addLayer(marker);
      }
    });
  });

  // Add the filter input to the page
  const searchBox = document.querySelector('.search-box');
  searchBox.appendChild(filterInput);
});
const searchButton = document.querySelector('#search-btn');

searchButton.addEventListener('click', () => {
  const searchText = document.querySelector('#search-text').value;

  // Perform the API request using fetch()
  fetch(`https://api.example.com/search?q=${searchText}`)
    .then(response => response.json())
    .then(data => {
      // Process the response data and display it on the page
      const resultsContainer = document.querySelector('#search-results');
      resultsContainer.innerHTML = '';

      if (data.results.length === 0) {
        resultsContainer.innerHTML = 'No results found.';
      } else {
        data.results.forEach(result => {
          const resultDiv = document.createElement('div');
          resultDiv.classList.add('result');

          const title = document.createElement('h2');
          title.innerText = result.title;

          const description = document.createElement('p');
          description.innerText = result.description;

          resultDiv.appendChild(title);
          resultDiv.appendChild(description);
          resultsContainer.appendChild(resultDiv);
        });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // Display an error message on the page
      const resultsContainer = document.querySelector('#search-results');
      resultsContainer.innerHTML = 'An error occurred. Please try again later.';
    });



});