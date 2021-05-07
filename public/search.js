const songs = [];
const genres = [];
const artists = [];

//aaaaa
function generateResults(type) {
    //getting text from search bar
    if (!(document.getElementById('search').value)) return;
    
    const input = document.getElementById('search').value;

    if (type === 'songs') displayResults(songSearch(input))
    else if (type === 'genres') displayResults(genreSearch(input))
    else if (type === 'artists') displayResults(artistSearch(input))
}

function displayResults(results) {
    console.log('displaying results');
    console.log(results);
}

async function songSearch(input) {
    console.log('Songs button clicked');
    console.log(input);

    //getting all songs
    const songsRequest = await fetch('/api/songsRoute');
    const songsJSON = await songsRequest.json();
    let songs = songsJSON;
    console.log('Song data loaded');
    //console.log(songs);

    console.log(songs["data"]["data"][0]);
}

async function genreSearch(input) {
    console.log('genres button clicked');
    console.log(input);

    //getting all genres
    const genresRequest = await fetch('/api/genresRoute');
    const genresJSON = await genresRequest.json();
    let genres = genresJSON;
    console.log(genres);
}

async function artistSearch(input) {
    console.log('artists button clicked');
    console.log(input);

    //getting all artists
    const artistsRequest = await fetch('/api/artistsRoute');
    const artistsJSON = await artistsRequest.json();
    let artists = artistsJSON;
    console.log(artists);
}

async function windowActions() {
    console.log('Window loaded');

    //setting up buttons
    const songsButton = document.getElementById('songsbutton');
    const genresButton = document.getElementById('genresbutton');
    const artistsButton = document.getElementById('artistsbutton');
    console.log('Buttons loaded');

    //waiting for buttons to be clicked
    songsButton.addEventListener('click', function(){generateResults('songs')});
    genresButton.addEventListener('click', function(){generateResults('genres')});
    artistsButton.addEventListener('click', function(){generateResults('artists')});
}

window.onload = windowActions;