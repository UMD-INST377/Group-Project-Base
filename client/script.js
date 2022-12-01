//const e = require("express");

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

    const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US&limit=40`, {
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
    if(typeof data.playlists.items !== "undefined"){
        return data.playlists.items;
    }
    
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

/*function fromPlaylistToTracks(plEndpoint){
    const tracks = await getTracks(token, plEndpoint)

    return tracks
}*/

async function initSongs(){
    const token = await getToken();
    console.log(token)
    const genres = await getGenres(token)
    let listOfTracks = [];
    genres.forEach(async genre => {
        //console.log(`Getting tracks from: ${genre.name} has id: ${genre.id}`)
        const playlists = await getPlaylistsByGenre(token, genre.id, 3)
        if(typeof playlists !== "undefined"){
            playlists.forEach(async playlist =>{
                //console.log(playlist.href);
                const plEndpoint = `${playlist.href}/tracks`
                const tracks = await getTracks(token, plEndpoint);
                console.log(listOfTracks.length)
                listOfTracks.push(...tracks.items)
                console.log(tracks.items)
            })
        }      
            
    })
    //console.log(listOfTracks.length)
    //const playlists = await getPlaylistsByGenre(token, "0JQ5DAqbMKFDXXwE9BDJAr", 10);
    //console.table(playlists);
    const plalylistSg = "https://api.spotify.com/v1/playlists/37i9dQZF1DXcF6B6QPhFDv/tracks"
    const tracks = await getTracks(token, plalylistSg);
    //console.table(tracks.items)
    
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


// UI Handling
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