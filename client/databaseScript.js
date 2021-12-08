async function windowActions() {
  const endpoint = '/api/songs_project/';

  const categories = [];

  const request = await fetch(endpoint)
    .then((blob) => blob.json())
    .then((data) => categories.push(...data));

  function findMatches(wordToMatch, categories) {
    return categories.filter((place) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.first_name.match(regex) || place.last_name.match(regex) 
      || place.album_name.match(regex) || place.song_name.match(regex)
      || place.song_name.match(regex);
    });
  }

  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, categories);
    html = matchArray.map((place) => {
      const regex = new RegExp(event.target.value, 'gi');
      return ` 
            <li>
                Song # <span class="song_id"> ${place.song_id}</span>
                <br>Song: <span class ="song_name">${place.song_name}</span>
                <br>Artist: <span class="artist_name"> ${place.first_name} ${place.last_name}</span>
                <br>Album: <span class ="album_name"> ${place.album_name}</span>
                <br>Rating: <span class="ratings">${place.ratings}/5 stars</span>
                <br>-----
                <br>
            </li>  
            `;
    }).join('');
    if (!event.target.value) {
      document.querySelector('.suggestions').innerHTML = '';
      return false;
    }

    document.querySelector('.suggestions').innerHTML = html;
  }

  const searchInput = document.querySelector('.search');

  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', (evt) => { displayMatches(evt); });
}

window.onload = windowActions;
