let map;
let json_obj1;
let json_obj2;

function Get(yourUrl){
  var Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET",yourUrl,false);
  Httpreq.send(null);
  return Httpreq.responseText;          
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: new google.maps.LatLng(38.98599466996687, -76.94228154317243),
    mapTypeId: "terrain",
  });
  const script = document.createElement("script");
  json_obj1 = JSON.parse(Get('api/map/address'));
  json_obj2 = JSON.parse(Get('api/map/restaurant'));
  cleanUpData()
}

async function cleanUpData() {

  const geocoder = new google.maps.Geocoder();
  
  for (let i = 0; i < json_obj1[0].length; i++) {
    let address = String(json_obj1[0][i].street_address);
    let location;
    for (let j = 0; j < json_obj1[0].length;j++) {
      if(parseInt(json_obj1[0][i].location_id) == parseInt(json_obj2[0][j].location_id)){
        location = json_obj2[0][j].restaurant_name;
      }
    }
    await new Promise(resolve => setTimeout(resolve, 500));


    geocoder.geocode( {address:address}, function(results, status) 
    {
      if (status == google.maps.GeocoderStatus.OK) 
      {
        // map.setCenter(results[0].geometry.location);

        var marker = new google.maps.Marker(
        {
            map: map,
            position: results[0].geometry.location
        });

        var infowindow = new google.maps.InfoWindow();
          
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(location);
              infowindow.open(map, marker);
            }
          })(marker, location));

      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
        console.log(json_obj1[0][i]);
    }
    });
    

    map.setCenter(new google.maps.LatLng(38.98599466996687, -76.94228154317243));

  
  }
 

}

const eqfeed_callback = function (results) {

  for (let i = 0; i < results.features.length; i++) {
    const coords = results.features[i].geometry.coordinates;
    const latLng = new google.maps.LatLng(coords[1], coords[0]);

    new google.maps.Marker({
      position: latLng,
      map: map,
    });
  }
};

window.initMap = initMap;
window.eqfeed_callback = eqfeed_callback;