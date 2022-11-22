/*
  Fetch request to author ids in the top 50 songs.
  Receives: Access token(obtained through login),term(short_term,medium_term,long_term)
  Returns: Nested array with author id strings. Strings within nested array go up to 50.
  Note: Short term may not return anything if you haven't listened to spotify recently.
  Response Example: 
  {
    [['sadfsadfsf','erwt34t3t3t34t43t4'],['sadfsadfsf','erwt34t3t3t34t43t4']]
  }
*/

const get_authorIDArray = async (req_term, req_token) => {
  url = "https://umd-spotify-backend.herokuapp.com/get_authorlist?";
  const response = await fetch(
    url +
      new URLSearchParams({
        term: req_term,
        access_token: req_token,
      })
  );
  const data = await response.json();
  return data;
};
