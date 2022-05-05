/* eslint-disable prefer-const */
/* eslint-disable camelcase */
let map;
let json_obj;

function Get(yourUrl) {
  const Httpreq = new XMLHttpRequest(); // a new request
  // eslint-disable-next-line quotes
  Httpreq.open("GET", yourUrl, false);
  Httpreq.send(null);
  return Httpreq.responseText;
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: new google.maps.LatLng(38.98599466996687, -76.94228154317243),
    mapTypeId: 'terrain'
  });
  const script = document.createElement('script');
  json_obj = JSON.parse(Get('http://localhost:3000/api/cuisine/testing'));
  // eslint-disable-next-line no-use-before-define
  cleanUpData();
}

async function cleanUpData() {
  const geocoder = new google.maps.Geocoder();

  for (let i = 0; i < json_obj[0].length; i++) {
    let address = String(json_obj[0][i].address_1);

    // eslint-disable-next-line no-await-in-loop
    await new Promise((resolve) => setTimeout(resolve, 700));

    // eslint-disable-next-line no-loop-func
    geocoder.geocode({ address: address }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);

        let marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      } else {
        // eslint-disable-next-line no-console
        console.log(
          `Geocode was not successful for the following reason: ${status}`
        );
        // eslint-disable-next-line no-console
        console.log(json_obj[0][i]);
      }
    });

    map.setCenter(
      new google.maps.LatLng(38.98599466996687, -76.94228154317243)
    );
  }
}

const eqfeed_callback = function (results) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < results.features.length; i++) {
    const coords = results.features[i].geometry.coordinates;
    const latLng = new google.maps.LatLng(coords[1], coords[0]);

    // eslint-disable-next-line no-new
    new googsle.maps.Marker({
      position: latLng,
      map: map
    });
  }
};

window.initMap = initMap;
window.eqfeed_callback = eqfeed_callback;
