import fetch from 'node-fetch';

export async function loadCrimeIncidentsData(req, res, next) {
  try {
    const url = 'https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json'; // remote URL! you can test it in your browser
    const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
    const json = await data.json(); // the data isn't json until we access it using dot notation
    console.log(url)
    const reply = json.filter((item) => Boolean(item.geocoded_column_1)).filter((item) => Boolean(item.name));

    console.log('Results in CrimeIncidentsData middleware', json.length); // let's check that something's there before we return it
    req.CrimeIncidentsData = reply; // and let's _attach_ the data to our request object here
    next();
  } catch (err) {
    // and let's handle any errors by closing the request with a message
    console.log('Data request failed', err);
    res.json({ message: 'Data request failed', error: err });
  }
}