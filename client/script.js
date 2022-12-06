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
    // Gets authorisation token
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
    // Gets a list of genres
    const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US&limit=40`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const data = await result.json();
    return data.categories.items;
}

async function getPlaylistsByGenre(token, genreId, limit) {
    //Based on genre ID gets a list of playlists of that genre
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
    //Based on a playlist gets a list of songs from that playlist 
    const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const data = result.json();
    return data;
}


async function initSongs(){
    // A function that gets us a lot of songs from different genres on spotify
    const token = await getToken(); //Get token
    console.log(token)

    //This is a placeholder part until I make all of the above work.
    const plalylistSg = "https://api.spotify.com/v1/playlists/37i9dQZF1DXcF6B6QPhFDv/tracks"
    const tracks = await getTracks(token, plalylistSg, 60);
    console.log(tracks)
    return tracks.items.map(obj => ({ ...obj, gen: "Rock"}))
}



async function songNamesArray(){
    const songs = await initSongs();
    let files = ['a', 'b', 'c', 'd', 'e', 'f'];
    
    console.log(songs)
    const array = [];
    songs.forEach(element => {
        array.push({
            name : element.track.name,
            link : element.track.external_urls.spotify,
            image_url : element.track.album.images[0].url,
            genre : element.gen,
            length : element.track.duration_ms
        })
    })
    return(array)
    //console.log(array)
}


// -------------------UI Handling-------------------

//Get random 10 items from an aray (to be replacedby betterselection item)
function insertGenres(text, value, element) {
    const html = `<option value="${value}">${text}</option>`;
    element.insertAdjacentHTML('beforeend', html);
}

function getRandomTen(list) {
    console.log('fired get 10 songs');
    const range = [...Array(9).keys()];
    const newArray = range.map(() => {
      const index = getRandomIntInclusive(0, list.length);
      let picked = list[index];
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

//Inject images
function injectImages(list){
    console.log('fired injectHTML');
    const target = document.querySelector('#Imagebox');
    target.innerHTML = '<h2>Songs are from these albums</h2><br>';

    list.forEach((item) => {
      let el = `<img src="${item.image_url}"></img>`;
      target.innerHTML += el;
    });
}



// ---------------------------Page Initialisation-------------------------------------------

// Turn the site script on
async function init(){
    const token = await getToken()
    document.getElementById("GeneratedContents").style.display = "none";
    const selectGenre = document.querySelector('#select_genre')
    const submit = document.querySelector('#submit');
    let playlistID = ''

    const genres = await getGenres(token)
    console.log(genres)
    genres.map(genre => {
        insertGenres(genre.name, genre.id, selectGenre)
    })


    selectGenre.addEventListener('change', async () => {         
        // get the genre id associated with the selected genre
        const genreId = selectGenre.options[selectGenre.selectedIndex].value;
        const genreName = selectGenre.options[selectGenre.selectedIndex].innerHTML;
        // get the playlist based on a genre
        console.log(`Getting tracks from genre: ${genreName} which has the id: ${genreId}`)
        const playlist = await getPlaylistsByGenre(token, genreId, 1);       
        // store the ID of the playlist
        playlistID = `${playlist[0].href}/tracks`;
        console.log(playlistID)
    });
     


    let songArray = await songNamesArray();
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        sample = getRandomTen(songArray)
        injectHTML(sample);
        injectImages(sample);
        console.log(sample);
        document.getElementById("GeneratedContents").style.display = "flex";

    })

}

document.addEventListener('DOMContentLoaded', async () => init());


/*
const listOfTracks = []; //Initialize output
let prom = new Promise((resolve, reject) => { //Wrapped the loop in a promise to make the rest of the func wait for the loop to execute


            console.log(`Getting tracks from: ${genre.name} has id: ${genre.id}`)
            const playlists = await getPlaylistsByGenre(token, genre.id, 3)

            if(typeof playlists !== "undefined"){

                playlists.map(async playlist =>{

                    //console.log(playlist.href);
                    if(playlist !== null){
                        const plEndpoint = `${playlist.href}/tracks`
                        const tracks = await getTracks(token, plEndpoint,10);
                        tracks.items.map(obj => ({ ...obj, gen: genre.name }))
                        listOfTracks.push(...tracks.items)
                        console.log(listOfTracks)
                    }
                })
            }  
        
    });

    
    prom.then(() => {
        console.log('All done!');
        console.log(listOfTracks.length);
    });
*/