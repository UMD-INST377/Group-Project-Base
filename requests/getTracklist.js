/*
  Fetch request to get top 50 songs - Name, Artist, popularity, 
  Receives: Access token(obtained through login),term(short_term,medium_term,long_term)
  Note: Short term may not return anything if you haven't listened to spotify recently.
  Response Example: 
  {
  "name": "Rich Flex",
  "popularity": 94,
  "artists": ["Drake","21 Savage"]
  }
*/

const getTracklist = async (req_term, req_token) => {
  url = "https://umd-spotify-backend.herokuapp.com/tracklist?";
  const response = await fetch(
    url +
      new URLSearchParams({
        access_token: req_token,
        term: req_term,
      })
  );
  const data = await response.json();
  return data;
};
