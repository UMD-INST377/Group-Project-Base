/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import fetch from 'node-fetch';

const limit = '&$limit=5';

export async function loadCrimeRate2017(req, res, next) {
  try {
    const url = `https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?$where=date between '2017-01-01' and '2017-12-31'${limit}`;

    const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
    const json = await data.json(); // the data isn't json until we access it using dot notation

    const reply = json.filter((item) => Boolean(item.clearance_code_inc_type)).filter((item) => Boolean(item.date));
    console.log('Results in crimeRateData2017 middleware', json.length); // let's check that something's there before we return it
    req.crimeRateData2017 = reply; // and let's _attach_ the data to our request object here.
    next();
  } catch (err) {
    // and let's handle any errors by closing the request with a message
    console.log('Data request failed', err);
    res.json({ message: 'Data request failed', error: err });
  }
}

export async function loadCrimeRate2018(req, res, next) {
  try {
    const url = `https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?$where=date between '2018-01-01' and '2018-12-31'${limit}`;

    const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
    const json = await data.json(); // the data isn't json until we access it using dot notation

    const reply = json.filter((item) => Boolean(item.clearance_code_inc_type));
    console.log('Results in crimeRateData2018 middleware', json.length); // let's check that something's there before we return it
    req.crimeRateData2018 = reply; // and let's _attach_ the data to our request object here
    next();
  } catch (err) {
    // and let's handle any errors by closing the request with a message
    console.log('Data request failed', err);
    res.json({ message: 'Data request failed', error: err });
  }
}

export async function loadCrimeRate2019(req, res, next) {
  try {
    const url = `https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?$where=date between '2019-01-01' and '2019-12-31'${limit}`;

    const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
    const json = await data.json(); // the data isn't json until we access it using dot notation

    const reply = json.filter((item) => Boolean(item.clearance_code_inc_type));
    console.log('Results in crimeRateData2019 middleware', json.length); // let's check that something's there before we return it
    req.crimeRateData2019 = reply; // and let's _attach_ the data to our request object here
    next();
  } catch (err) {
    // and let's handle any errors by closing the request with a message
    console.log('Data request failed', err);
    res.json({ message: 'Data request failed', error: err });
  }
}

export async function loadCrimeRate2020(req, res, next) {
  try {
    const url = `https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?$where=date between '2020-01-01' and '2020-12-31'${limit}`;

    const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
    const json = await data.json(); // the data isn't json until we access it using dot notation

    const reply = json.filter((item) => Boolean(item.clearance_code_inc_type));
    console.log('Results in crimeRateData2020 middleware', json.length); // let's check that something's there before we return it
    req.crimeRateData2020 = reply; // and let's _attach_ the data to our request object here
    next();
  } catch (err) {
    // and let's handle any errors by closing the request with a message
    console.log('Data request failed', err);
    res.json({ message: 'Data request failed', error: err });
  }
}

export async function loadCrimeRate2021(req, res, next) {
  try {
    const url = `https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?$where=date between '2021-01-01' and '2021-12-31'${limit}`;

    const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
    const json = await data.json(); // the data isn't json until we access it using dot notation

    const reply = json.filter((item) => Boolean(item.clearance_code_inc_type));
    console.log('Results in crimeRateData2021 middleware', json.length); // let's check that something's there before we return it
    req.crimeRateData2021 = reply; // and let's _attach_ the data to our request object here
    next();
  } catch (err) {
    // and let's handle any errors by closing the request with a message
    console.log('Data request failed', err);
    res.json({ message: 'Data request failed', error: err });
  }
}

export async function loadCrimeRate2022(req, res, next) {
  try {
    const url = `https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?$where=date between '2022-01-01' and '2022-12-31'${limit}`;

    const data = await fetch(url); // We're using a library that mimics a browser 'fetch' for simplicity
    const json = await data.json(); // the data isn't json until we access it using dot notation

    const reply = json.filter((item) => Boolean(item.clearance_code_inc_type));
    console.log('Results in crimeRateData2022 middleware', json.length); // let's check that something's there before we return it
    req.crimeRateData2022 = reply; // and let's _attach_ the data to our request object here
    next();
  } catch (err) {
    // and let's handle any errors by closing the request with a message
    console.log('Data request failed', err);
    res.json({ message: 'Data request failed', error: err });
  }
}