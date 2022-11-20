// Sends the authentication token and author ids
// Returns an object with genre counts given the authors ids
const getTracklist = async (id,req_token) => {
  const response = await fetch('https://umd-spotify-backend.herokuapp.com/genreslist?', {
    method: 'GET',
    body: JSON.stringify({
      ids: id,
      access_token: req_token
    }), 
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.json(); 
  
}

