/*
  Fetch request to get genres count based on artist ids
  Receives: Access token(obtained through login), artist ids(string of artist ids separated by commas)
  and an object from previous iteration(optional)
  Note: Short term may not return anything if you haven't listened to spotify recently.
  Response Example: 
  {
    "alternative r&b": 4,
    "indie jazz": 3,
    "indie r&b": 4,
    "indie soul": 3,
  }
*/
const getGenresCount = async (artist_ids, req_token) => {
  url = "https://umd-spotify-backend.herokuapp.com/genreslist?";
  const response = await fetch(
    url +
      new URLSearchParams({
        id_string: artist_ids,
        access_token: req_token,
      })
  );
  const data = await response.json();
  return data;
};