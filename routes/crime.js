/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import fetch from 'node-fetch';

/*
  Get the whole dataset from the PG country website
*/

export async function loadFoodServiceData(req, res, next) {
  try {
    const url = 'https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json'; // remote URL
    const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
    const json = await data.json(); // the data isn't json until we access it using dot notation

    const reply = json.filter((item) => Boolean(item.location)).filter((item) => Boolean(item.name));

    console.log('Results in crime.js', json.length); // let's check that something's there before we return it
    // console.log(json);
    req.crimeData = reply; // and let's _attach_ the data to our request object here
    next();
  } catch (err) {
    // and let's handle any errors by closing the request with a message
    console.log('Data request failed', err);
    res.json({ message: 'Data request failed', error: err });
  }
}
