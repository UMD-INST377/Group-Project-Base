/* eslint-disable max-len */
/*
  Hook this script to index.html
  by adding `<script src="script.js">` just before your closing `</body>` tag
*/

/*
  ## Utility Functions
    Under this comment place any utility functions you need - like an inclusive random number selector
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
const apiURL = 'https://api.spotify.com/v1/';

function injectHTML(list, divTarget) {
  console.log('fired injectHTML');
  const target = document.querySelector(divTarget);
  target.innerHTML = '';
  const listEl = document.createElement('ol');
  target.appendChild(listEl);
  list.forEach((item) => {
    const el = document.createElement('li');
    const image = document.createElement('img');
    const anchor = document.createElement('a');
    image.src = item.images[2].url;
    anchor.href = item.external_urls.spotify;
    anchor.innerText = item.name;
    el.appendChild(image);
    el.appendChild(anchor);
    listEl.appendChild(el);
    // console.log(item.name);
  });
}

async function searchArtists(term, token) {
  const search = encodeURIComponent(term);
  console.log(search);
  const url = `${apiURL}search?q=${search}&type=artist&limit=5`;
  console.log(url);
  const data = await fetch(url, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  const json = await data.json();
  console.log(json.artists.items);
  return json.artists; // object containing, among other things, an array of artists
}

// This function retrieves the access token from Spotify
// Used the "Client Credentials Flow" on Spotify API
// Problem with Buffer module. Browser doesn't recognize it, but won't let me import it
// Current workaround for Buffer problem - used an online base64 encoder and manually encoded the client ID and secret key
async function getAccessToken() {
  const clientBase64 = 'YzkyNzBhMTIzYjJjNDA4ZmE5ZDc2NmNkMDBlOTY5ZjI6OTc4YmY5YTJmMmVjNDU4NDk2NmFjYzhiN2ZlMDYxNjg=';
  const url = 'https://accounts.spotify.com/api/token';
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Basic ${clientBase64}`);
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
  myHeaders.append('Cookie', '__Host-device_id=AQBrEpG1cy0DhOXDyzabACYbb5SZKeLLWNMCoH4UJHKKW0CVBslV9tFnuaXGti78fRhIEXO512-5ZA35sx_VKqoJRO67Dd80T08; sp_tr=false');

  const urlencoded = new URLSearchParams();
  urlencoded.append('grant_type', 'client_credentials');

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };
  const reply = await fetch(url, requestOptions);
  const json = await reply.json();
  console.log(json.access_token);
  return json.access_token;
}

/*
    This function retrieves a list of artists that are related to the artist ID in the request
    Need to add a way for users to type in an artist's name and see a list of related artists
*/
async function getRelatedArtists(token, id) {
  const url = `${apiURL}artists/${id}/related-artists`; // remote URL! you can test it in your browser
  const data = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }); // We're using a library that mimics a browser 'fetch' for simplicity
  const json = await data.json(); // the data isn't json until we access it using dot notation
  console.log(json);

  // getRelatedArtists returns a json containing an array, but only the array is returned
  return json.artists;
}

async function mainEvent() {
  /*
      ## Main Event
        Separating your main programming from your side functions will help you organize your thoughts
        When you're not working in a heavily-commented "learning" file, this also is more legible
        If you separate your work, when one piece is complete, you can save it and trust it
    */
  // the async keyword means we can make API requests
  const form = document.querySelector('.main_form'); // get your main form so you can do JS with it
  const submit = document.querySelector('#get-resto'); // get a reference to your submit button
  const loadAnimation = document.querySelector('.lds-ellipsis'); // get a reference to our loading animation
  let artists = [];
  submit.style.display = 'none'; // let your submit button disappear

  const token = await getAccessToken();
  let chartData;

  submit.style.display = 'block'; // let's turn the submit button back on by setting it to display as a block when we have data available

  // hides loading animation once data has been loaded
  loadAnimation.classList.remove('lds-ellipsis');
  loadAnimation.classList.add('lds-ellipsis_hidden');

  form.addEventListener('input', async (event) => { // event bubbling
    console.log('input', event.target.value); // <input> contents
    const searchQuery = event.target.value;
    const searchResults = await searchArtists(searchQuery, token); // json containing an array containing artists
    artists = searchResults.items;
    console.log(artists);

    injectHTML(artists, '#results');
  });
  // And here's an eventListener! It's listening for a "submit" button specifically being clicked
  // this is a synchronous event event, because we already did our async request above, and waited for it to resolve
  form.addEventListener('submit', async (submitEvent) => {
    // This is needed to stop our page from changing to a new URL even though it heard a GET request
    submitEvent.preventDefault();
    chartData = await getRelatedArtists(token, artists[0].id);
    console.log(chartData);
    console.log(artists[0].id);
    injectHTML(chartData, '#restaurant_list');
    initChart(chartTarget, chartData);
  });
}

/*
    This last line actually runs first!
    It's calling the 'mainEvent' function at line 57
    It runs first because the listener is set to when your HTML content has loaded
  */
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
