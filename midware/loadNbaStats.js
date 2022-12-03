import fetch from 'node-fetch';

export async function loadNbaStats(req, res, next) {
  try {
    const url = 'https://api-nba-v1.p.rapidapi.com/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b752f1afaamsh07a55087fef36c6p1a49bcjsn7dceb30b0636',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
      }
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json));

    const reply = json.filter((item) => Boolean(item.firstname));
    console.log('Results in foodServiceData middleware', json.length); // let's check that something's there before we return it
    req.nbaStatsData = reply; // and let's _attach_ the data to our request object here
    next();
  } catch (err) {
    // and let's handle any errors by closing the request with a message
    console.log('Data request failed', err);
    res.json({ message: 'Data request failed', error: err });
  }
}

console.log(loadNbaStats[0]);