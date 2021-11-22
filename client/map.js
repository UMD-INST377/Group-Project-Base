// the map stuff can be done similar to lab 7
function mapInit() {
  const mymap = L.map('mapid').setView([38.990, -76.93], 12);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoibm9uY29tcGxleCIsImEiOiJja3VuY3VzNnU0MGwwMndtYXoyYzE5ZnJjIn0.WKnP0xfs3Wc7GvlFFu8znA'
  }).addTo(mymap);
return mymap
}

function getMatch(event, census) {
  // not that many zips so filtering is fine - return if something matches
  const matches = census[0].filter(zcta => {
    return zcta.census_zcta === event.target.value;
  });
  if(matches.length > 0) {
    return matches[0];
  } else {
    return false
  }
}

function renderTableHTML(match, tableDiv) {
  tableDiv.innerHTML =
    `<table><tr>
            <td>median age</td><td>${match.median_age}</td>
            </tr>
            <tr>
            <td># people over 65</td><td>${match.num_persons_over_65}</td>
            </tr>
            <tr>
            <td>total population</td><td>${match.total_population}</td>
            </tr>
            <tr>
            <td>homeowner_rate</td><td>${match.homeowner_rate}</td>
            </tr>
            <tr>
            <td>% homeowner without mortgage</td><td>${match.percent_homeowner_without_mortgage}</td>
           </tr>
           <tr>
           <td>% renters</td><td>${match.percent_rent}</td>
           </tr>
    </table>`
}
async function dataHandler() {
  const searchInput = document.querySelector('.search');
  const tableDiv = document.querySelector('.census-data');
  const mymap = mapInit();
  // TODO: need to make another endpoint for zipcode data and sql table to highlight zip code regions on map
  //       for now just display census data from zip code search
  // TODO: also add filtering for certain search requests
  // fetch us-states.js
  // statesData = await fetch("https://leafletjs.com/examples/choropleth/us-states.js");
  // fetch our database census data from api
  
  const census = await fetch('./api/census').then(response => response.json());

  // on inputs validate matches, if true render html
  searchInput.addEventListener('input', (evt) => {
    let match = false;
    if(evt.target.value.length === 5) {
      match = getMatch(evt, census);
    }
    console.log(match)
    if(match !== false) {
      renderTableHTML(match, tableDiv);
    }
  });
}

window.onload = dataHandler;
