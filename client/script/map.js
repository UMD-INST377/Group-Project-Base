let map;
let json_obj;
let cleanJson;

function Get(yourUrl){
  var Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET",yourUrl,false);
  Httpreq.send(null);
  return Httpreq.responseText;          
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: new google.maps.LatLng(2.8, -187.3),
    mapTypeId: "terrain",
  });
  const script = document.createElement("script");
  // const obj = JSON.parse(text);
  json_obj = JSON.parse(Get('http://127.0.0.1:3000/api/cuisine/testing'));
  cleanUpData()
  // console.log(json_obj);
}



async function cleanUpData() {

  const geocoder = new google.maps.Geocoder();

  let address = "Plaza de Bolívar de Bogotá";

  console.log(await geocoder.geocode({ address: address }));
      
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