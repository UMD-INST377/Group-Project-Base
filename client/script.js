// attempt at linking the API by Julie Depenyou
import fetch from "node-fetch"; // first need to import it 

export async function loadLibraryData (req, res, next){
    try{
        const url = 'https://data.princegeorgescountymd.gov/resource/7k64-tdwr.json';
        const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
        const json = await data.json(); // the data isn't json until we access it using dot notation
        console.log('Results in foodServiceData middleware', json.length); // let's check that something's there before we return it
        req.foodServiceData = reply; // and let's _attach_ the data to our request object here
        next();
    } catch(err){
        console.log('Data request failed', err);
        res.json({ message: 'Data request failed', error: err });
    }
}

