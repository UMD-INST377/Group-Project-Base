import fetch from 'node-fetch';

export async function loadFoodServiceData(req, res, next) {
  try {

    //url is where we gonna get our data. its in json format
    const url = 'https://data.princegeorgescountymd.gov/api/views/INLINE/rows.json?accessType=DOWNLOAD'; // remote URL! you can test it in your browser
    const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
    const json = await data.json(); // the data isn't json until we access it using dot notation


    //agency is equaivalent to geocolumn we did in lab, i just replace it with what we want. its a api name
    const reply = json.filter((item) => Boolean(item.agency)).filter((item) => Boolean(item.name));

    console.log('Results in PGSPENDING middleware', json.length); // let's check that something's there before we return it
    req.pgSpendings = reply; // and let's attach the data to our request object here
    next();
  } catch (err) {
    // and let's handle any errors by closing the request with a message
    console.log('Data request failed', err);
    res.json({ message: 'Data request failed', error: err });
  }
}