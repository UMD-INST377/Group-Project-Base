/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import fetch from 'node-fetch';

export async function loadNBAData(req, res, next) {
  try {
    const url = 'https://api-nba-v1.p.rapidapi.com/players/statistics';
    const data = await fetch(url, {
      headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
      }
    });
    const json = await data.json();

    // const reply = json/FileSystemEntry((item) => Boolean(item.placeholder)).filter((item) => Boolean(item.name));

    console.log('Results in NBAData middleware', json.length);
    req.NBAData = reply;
    next();
  } catch (err) {
    console.log('Data request failed', err);
    res.json({message: 'Data request failed', error: err});
  }
}