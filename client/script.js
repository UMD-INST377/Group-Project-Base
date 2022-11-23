import fetch from 'node-fetch';


function getRandomInclusing(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }



import fetch from 'node-fetch';

/*
  This function loads data from our third party API
  It has been separated out so it will not be repeated in our "controllers"
  This separation also simplifies our imports - note that 'fetch' is imported here and not elsewhere.
*/

// note "export" keyword here
export async function loadPopulationData(req, res, next) {
  try {
    const url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'; // remote URL! you can test it in your browser
    const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
    const json = await data.json(); // the data isn't json until we access it using dot notation
    console.log('Results in datausa middleware', json.length); // let's check that something's there before we return it
    req.loadPopulationData = json; // and let's _attach_ the data to our request object here
    next();
  } catch (err) {
    // and let's handle any errors by closing the request with a message
    console.log('Data request failed', err);
    res.json({ message: 'Data request failed', error: err });
  }
}
/*
function injectHTML(list) {

}

function createplaylist(array, song) {
    playlist = []; 
    array.forEach((element) => { // not sure if element is correct
        // will have to do an if statement grabbing songs what have the same genre
        // add them to a new playlist array
     });
    return playlist;
}

async function mainEvent() {
    // map here or something
     const results = await fetch()


     if(arrayFromJson.data?.length > 0) {     

        form.addEventListener('input', (event) =>{

        });



    } else {
        console.log('Sorry, that is not a valid genre');
    }


}

 document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
/*

An asynchronous data request to your API 
A processing request that uses array methods (.map, .filter, .find, .reduce) to change your data into the shape your chart, map, or other component needs for display
*/