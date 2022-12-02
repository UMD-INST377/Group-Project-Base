/* this method will load data from the PG libraries API
url for API : https://data.princegeorgescountymd.gov/resource/7k64-tdwr.json*/


/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import fetch from 'node-fetch';

/*
  This function loads data from our third party API
  It has been separated out so it will not be repeated in our "controllers"
  This separation also simplifies our imports - note that 'fetch' is imported here and not elsewhere.
*/

// note "export" keyword here
export async function loadLibraryData(req, res, next) {
  try {
    const url = 'https://data.princegeorgescountymd.gov/resource/7k64-tdwr.json'; // remote URL! you can test it in your browser
    const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
    const json = await data.json(); // the data isn't json until we access it using dot notation
    const reply = json.filter((item) => Boolean(item.geocoded_column_1)).filter((item) => Boolean(item.name));
    console.log('Results in LibraryData middleware', json.length); // let's check that something's there before we return it
    req.foodServiceData = reply; // and let's _attach_ the data to our request object here
    next();
  } catch (err) {
    // and let's handle any errors by closing the request with a message
    console.log('Data request failed', err);
    res.json({ message: 'Data request failed', error: err });
  }
}

/*async function loadLibraryData(url){
  const results = await fetch('https://data.princegeorgescountymd.gov/resource/7k64-tdwr.json');
  const arrayFromJson = await results.json();
  console.log(arrayFromJson);
}*/
/*const results = await fetch('https://data.princegeorgescountymd.gov/resource/7k64-tdwr.json');
const arrayFromJson = await results.json();
console.table(arrayFromJson.data);*/


/* This function will display the map */
function initMap() {
  console.log('initMap');
  const map = L.map('map').setView([38.9869, -76.9426], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  return map;
}

/* This function filters results from API by zipcode that user inputs */