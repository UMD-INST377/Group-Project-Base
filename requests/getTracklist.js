// Sends the authentication token and time_frame - (short_term,medium_term,long_term)
// Returns an array of songs
const getTracklist = async (req_term,req_token) => {
    const response = await fetch('https://umd-spotify-backend.herokuapp.com/tracklist?', {
      method: 'GET',
      body: JSON.stringify({
        term: req_term,
        acesss_token: req_token
      }), 
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.json(); 
    
  }
