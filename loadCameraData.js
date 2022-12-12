export async function loadCameraData(req, res, next) {
    try {
      const url = 'https://data.princegeorgescountymd.gov/resource/mnkf-cu5c.json'; // remote URL! you can test it in your browser
      const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
      const json = await data.json(); // the data isn't json until we access it using dot notation
    } catch (err) {
        // and let's handle any errors by closing the request with a message
        console.log('Data request failed', err);
        res.json({ message: 'Data request failed', error: err });
      }
    }