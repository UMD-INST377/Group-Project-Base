/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import fetch from 'node-fetch';

/*
  This function loads data from our third party API
  It has been separated out so it will not be repeated in our "controllers"
  This separation also simplifies our imports - note that 'fetch' is imported here and not elsewhere.
*/
function callyear(year) {
  const url = {
    2022: 'https://data.princegeorgescountymd.gov/resource/jh2p-ym6a.json',
    2021: 'https://data.princegeorgescountymd.gov/resource/rh7w-bmhm.json',
    2020: 'https://data.princegeorgescountymd.gov/resource/uh6s-izyj.json',
    2019: 'https://data.princegeorgescountymd.gov/resource/p32t-azw8.json',
    2018: 'https://data.princegeorgescountymd.gov/resource/2qma-7ez9.json',
    2017: 'https://data.princegeorgescountymd.gov/resource/364y-gm2b.json',
    2016: 'https://data.princegeorgescountymd.gov/resource/csi4-9jzc.json',
    2015: 'https://data.princegeorgescountymd.gov/resource/bh8z-9wkk.json',
    2014: 'https://data.princegeorgescountymd.gov/resource/p9kn-7u2k.json',
    2013: 'https://data.princegeorgescountymd.gov/resource/aqt8-5ri2.json',
    2012: 'https://data.princegeorgescountymd.gov/resource/9i62-gki4.json'
  }
  return url[year] != undefined ? url[year] : url[2022];
}
// note "export" keyword here
export async function loadFoodServiceData(req, res, next) {
  try {
    let yr = await document.querySelector('input[name="butt"]:checked').value;
    let url = await callyear(yr); 
    let data = await fetch(url);
    let json = await data.json();
    let reply = json.filter((item) => Boolean(item.geocoded_column_1)).filter((item)=> Boolean(item.name));
    
    console.log('Results in Data middleware', json.length); // let's check that something's there before we return it
    req.ServiceData = reply; // and let's _attach_ the data to our request object here
    next();
  } catch (err) {
    // and let's handle any errors by closing the request with a message
    console.log('Data request failed', err);
    res.json({ message: 'Data request failed', error: err });
  }
}