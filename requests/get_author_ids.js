// Sends the authentication token and author ids
// Returns an array of ids
const get_author_ids = async (id,req_token) => {
    const response = await fetch('https://umd-spotify-backend.herokuapp.com/get_authorlist?', {
      method: 'GET',
      body: JSON.stringify({
        term: req_term,
        token: req_token
      }), 
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.json(); 
  }
  