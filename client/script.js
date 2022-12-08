/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
// const e = require("express");

const clientId = 'd9827efb2c79463b92becb457a635a04';
const clientSecret = '6f2f0a36046f4f21980873a48c7bdab0';
// --------------------- API dialogue functions ---------------------

function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1) + newMin); // The maximum is inclusive and the minimum is inclusive
}

async function getToken() {
  // Gets authorisation token
  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`
    },
    body: 'grant_type=client_credentials'
  });

  const data = await result.json();
  return data.access_token;
}

async function getGenres(token) {
  // Gets a list of genres
  const result = await fetch(
    'https://api.spotify.com/v1/browse/categories?locale=US&limit=45',
    {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` }
    }
  );

  const data = await result.json();
  return data.categories.items;
}

async function getPlaylistsByGenre(token, genreId, limit) {
  // Based on genre ID gets a list of playlists of that genre
  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
    {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` }
    }
  );

  const data = await result.json();
  if (typeof data.playlists !== 'undefined') {
    return data.playlists.items;
  }
}

async function getTracks(token, tracksEndPoint, limit) {
  // Based on a playlist gets a list of songs from that playlist
  const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` }
  });

  const data = result.json();
  return data;
}

// --------------------- Data handling functions ---------------------

async function initSongs(plalylistSg, genre, token) {
  // A function that gets us a the songs from a playlist

  const tracks = await getTracks(token, plalylistSg, 60);
  console.log(tracks.items);
  return tracks.items.map((obj) => ({ ...obj, gen: genre }));
}

function songsToArray(songs) {
  console.log(songs);
  const array = [];
  songs.forEach((element) => {
    array.push({
      name: element.track.name,
      link: element.track.external_urls.spotify,
      image_url: element.track.album.images[0].url,
      genre: element.gen,
      length: element.track.duration_ms
    });
  });
  return array;
  // console.log(array)
}

async function songLenArray(list) {
  const array = [];
  list.forEach((element) => {
    array.push(element.length);
  });
  return array;
  // console.log(array)
}

async function songNameArray(list) {
  const array = [];
  list.forEach((element) => {
    array.push(element.name);
  });
  return array;
  // console.log(array)
}
// -------------------UI Handling-------------------

// Inject genres into the dropdown menu
function insertGenres(text, value, element) {
  const html = `<option value="${value}">${text}</option>`;
  element.insertAdjacentHTML('beforeend', html);
}

// Get random 10 items from an aray (to be replacedby betterselection item)
function getRandomTen(list) {
  console.log('fired get 9 songs');
  const range = [...Array(9).keys()];
  const newArray = range.map(() => {
    const index = getRandomIntInclusive(0, list.length - 1);
    const picked = list[index];
    return picked;
  });
  return newArray;
}

// Inject a song to the page
function injectHTML(list) {
  console.log('fired injectHTML');
  const target = document.querySelector('#music_list');
  target.innerHTML = '';

  const listEl = document.createElement('ol');
  target.appendChild(listEl);
  list.forEach((item) => {
    const el = document.createElement('li');
    el.innerHTML = `<a href=${item.link}>${item.name}</a>`;
    listEl.appendChild(el);
  });
}

// Inject images
function injectImages(list) {
  console.log('fired injectImages');
  const target = document.querySelector('#Imagebox');
  target.innerHTML = '<h2>Songs are from these albums</h2><br>';

  list.forEach((item) => {
    const el = `<img src="${item.image_url}"></img>`;
    target.innerHTML += el;
  });
}

function initChart(songs, songlength) {
  const ctx = document.getElementById('myChart');

  // eslint-disable-next-line no-new
  const m_chart = new Chart(ctx, {
    type: 'bar',
    // eslint-disable-next-line linebreak-style
    data: {
      labels: songs,
      datasets: [
        {
          label: 'Length of the song',
          data: songlength,
          borderWidth: 4
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  return m_chart;
}

// ---------------------------Page Initialisation-------------------------------------------

// Turn the site script on
async function init() {
  // Step 1: Get token, initialise variables
  const token = await getToken();

  let myChart = new Chart();

  document.getElementById('GeneratedContents').style.display = 'none';
  document.getElementById('Chartbox').style.display = 'none';
  const selectGenre = document.querySelector('#select_genre');
  const submit = document.querySelector('#submit');
  let playlistEndpoint = '';
  let songArray = [];
  const chartTarget = document.querySelector('#myChart');

  // Step 2: Get genre selection and insert the options into HTML
  const genres = await getGenres(token);
  console.log(genres);
  genres.map((genre) => {
    insertGenres(genre.name, genre.id, selectGenre);
  });

  // Step 3: When user selects a genre get a playlist for it.
  selectGenre.addEventListener('change', async () => {
    // get the genre id and name associated with the selected genre
    const genreId = selectGenre.options[selectGenre.selectedIndex].value;
    const genreName = selectGenre.options[selectGenre.selectedIndex].innerHTML;

    // get the playlist based on a genre
    console.log(
      `Getting tracks from genre: ${genreName} which has the id: ${genreId}`
    );
    const playlist = await getPlaylistsByGenre(token, genreId, 1);

    // store the track endpoint of the playlist
    playlistEndpoint = `${playlist[0].href}/tracks`;
    console.log(playlistEndpoint);

    // Finally get the tracks and turn them into an array
    const tracks = await initSongs(playlistEndpoint, genreName, token);
    songArray = songsToArray(tracks);
    document.getElementById('GeneratedContents').style.display = 'none';
  });

  // Step 4: When user presses the submit button (broaden my horizons) we display 9 random songs out of those retrived.
  // If the user keeps pressing submit he should get new songs from the same genre.
  // If user changes genre the
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const sample = getRandomTen(songArray);
    const sample_name = songNameArray(sample);
    const sample_len = songLenArray(sample);
    console.log(sample);
    injectHTML(sample);
    injectImages(sample);
    document.getElementById('GeneratedContents').style.display = 'flex';

    document.getElementById('Chartbox').style.display = 'block';
    
    myChart.destroy();
    myChart = initChart(sample, sample_len);
  });
}

document.addEventListener('DOMContentLoaded', async () => init());
