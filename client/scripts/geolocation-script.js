//Script created by Bryan Pham 


// let defaultCoords = [38.989697, -76.937759] // College Park

// All coords were found using address with lat long from address tool
// https://www.latlong.net/convert-address-to-lat-long.html

let dinerCoords = [38.991489, -76.944511]; // Diner Coords
let southCoords = [38.983170, -76.944862]; // South Campus Coords
let northCoords = [38.988040, -76.945430]; // 251 North                  
let restaurantCoords = [dinerCoords, southCoords, northCoords];
 
const distanceSpan = document.querySelector('#distance-card-1');
const distanceSpan2 = document.querySelector('#distance-card-2');
const distanceSpan3 = document.querySelector('#distance-card-3');

// calculate distance of diner and then update distance on card
function changeCardDistances(userCoords) {
    restaurantCoords.map((restr, index) => {
        let distance = calcCrow(userCoords[0], userCoords[1], restr[0], restr[1]).toFixed(1);
        let changedSpan = document.querySelector(`#distance-card-` + (index + 1))
        changedSpan.textContent = distance + ' miles';
    })
}


// Code adapted from:  https://stackoverflow.com/questions/51843227/how-to-use-async-wait-with-html5-geolocation-api
// gets user's location 
async function getUserLocation() {

    const userPosition = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    
    return  [userPosition.coords.latitude, userPosition.coords.longitude];
}

// Code referenced from 
// https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates

// calculate distance between 2 lat long coords
function calcCrow(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = toRad(lat2-lat1);
    var dLon = toRad(lon2-lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d /1.609; // convert to miles
}

// Converts numeric degrees to radians
function toRad(Value) 
{
    return Value * Math.PI / 180;
}


getUserLocation().then(userCoords => { changeCardDistances(userCoords)})