/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import fetch from 'node-fetch';

/*
  This function loads data from our third party API
  It has been separated out so it will not be repeated in our "controllers"
  This separation also simplifies our imports - note that 'fetch' is imported here and not elsewhere.
*/

// note "export" keyword here
export async function loadServiceData(req, res, next) {
  try {
    const url = 'https://data.princegeorgescountymd.gov/resource/9i62-gki4.json'; // remote URL! you can test it in your browser
    const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
    const json = await data.json(); // the data isn't json until we access it using dot notation
    const reply = json.filter((item) => Boolean(item.geocoded_column_1)).filter((item)=> Boolean(item.name));
    
    console.log('Results in Data middleware', json.length); // let's check that something's there before we return it
    req.ServiceData = reply; // and let's _attach_ the data to our request object here
    next();
  } catch (err) {
    // and let's handle any errors by closing the request with a message
    console.log('Data request failed', err);
    res.json({ message: 'Data request failed', error: err });
  }
}