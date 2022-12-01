//const e = require("express");

const clientId = 'd9827efb2c79463b92becb457a635a04';
const clientSecret = '6f2f0a36046f4f21980873a48c7bdab0';

// API dialogue functions

function getRandomIntInclusive(min, max) {
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);
    return Math.floor(Math.random() * (newMax - newMin + 1) + newMin); // The maximum is inclusive and the minimum is inclusive
  }

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
    if(typeof data.playlists !== "undefined"){
        return data.playlists.items;
    }
    
}

async function getTracks(token, tracksEndPoint, limit) {

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
    const listOfTracks = [];
    const token = await getToken();
    console.log(token)
    const genres = await getGenres(token)
    let prom = new Promise((resolve, reject) => {
        genres.forEach(async (genre, index, array) => {
            //console.log(`Getting tracks from: ${genre.name} has id: ${genre.id}`)
            const playlists = await getPlaylistsByGenre(token, genre.id, 3)
            if(typeof playlists !== "undefined"){
                playlists.forEach(async playlist =>{
                    //console.log(playlist.href);
                    if(playlist !== null){
                        const plEndpoint = `${playlist.href}/tracks`
                        const tracks = await getTracks(token, plEndpoint,10);
                        listOfTracks.push(...tracks.items)
                        console.log(listOfTracks.length)
                        //console.log(tracks.items)
                    }
                })
            }      
            if (index === array.length -1) resolve();
        });
    });

    
    prom.then(() => {
        console.log('All done!');
        console.log(listOfTracks.length);
    });

    const plalylistSg = "https://api.spotify.com/v1/playlists/37i9dQZF1DXcF6B6QPhFDv/tracks"
    const tracks = await getTracks(token, plalylistSg, 20);
    console.log(tracks)
    return tracks.items
}



async function songNamesArray(){
    const songs = await initSongs();
    let files = ['a', 'b', 'c', 'd', 'e', 'f'];
    
    console.log(songs)
    const array = [];
    songs.forEach(element => {
        array.push({
            name : element.track.name,
            link : element.track.external_urls.spotify
        })
    })
    return(array)
    //console.log(array)
}


// UI Handling
function getRandomTen(list) {
    console.log('fired restaurants list');
    const range = [...Array(10).keys()];
    const newArray = range.map((item) => {
      const index = getRandomIntInclusive(0, list.length);
      let picked = list[index];
      // Gets us the desired data only.
      return picked;
    });
    return newArray;
  }

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


async function init(){
    const submit = document.querySelector('#submit');
    let songArray = await songNamesArray();
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        sample = getRandomTen(songArray)
        injectHTML(sample);
        console.log(sample);
    })

}

document.addEventListener('DOMContentLoaded', async () => init());