const clientId = 'd9827efb2c79463b92becb457a635a04';
const clientSecret = '6f2f0a36046f4f21980873a48c7bdab0';

// API dialogue functions

async function getToken() {

    const result = await fetch('https://accounts.spotify.com/api/token',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    return data.access_token;
}

async function getGenres(token) {

    const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const data = await result.json();
    return data.categories.items;
}

async function getPlaylistsByGenre(token, genreId, limit) {

    const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const data = await result.json();
    return data.playlists.items;
}

async function getTracks(token, tracksEndPoint) {

    const limit = "10";

    const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const data = result.json();
    return data;
}

async function getTrack(token, tracksEndPoint) {

    const result = await fetch(`${tracksEndPoint}`, {
        method: 'GET',
        headers: {'Authorization' : 'Bearer ' + token}
    });

    const data = result.json();
    return data;
}



async function initSongs(){
    const token = await getToken();
    console.log(token)
    console.log("Getting playlist for Rock")
    const genres = getGenres(token)
    console.log(genres)
    const playlists = await getPlaylistsByGenre(token, "0JQ5DAqbMKFDXXwE9BDJAr", 1);
    console.log("Getting tracks from:");
    console.table(playlists);
    const plalylistSg = "https://api.spotify.com/v1/playlists/37i9dQZF1DXcF6B6QPhFDv/tracks"
    const tracks = await getTracks(token, plalylistSg);
    console.table(tracks.items)
    
    return tracks.items
}

async function songNamesArray(){
    const songs = await initSongs();
    const array = [];
    songs.forEach(element => {
        array.push(element.track.name)
    })
    return(array)
    //console.log(array)
}

function injectHTML(list) {
    console.log('fired injectHTML');
    const target = document.querySelector('#music_list');
    target.innerHTML = '';
  
    const listEl = document.createElement('ol');
    target.appendChild(listEl);
    list.forEach((item) => {
      const el = document.createElement('li');
      el.innerText = item;
      listEl.appendChild(el);
    });
}

// UI Handling
async function init(){
    const submit = document.querySelector('#submit');

    let songArray = await songNamesArray();
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        injectHTML(songArray);
        console.log(songArray);
    })

}

document.addEventListener('DOMContentLoaded', async () => init());