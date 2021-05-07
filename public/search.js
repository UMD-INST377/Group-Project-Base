const songs = [];
const genres = [];
const artists = [];

function generateResults(input, type) {
    if (type === 'songs') songSearch(input);
    else if (type === 'genres') genreSearch(input);
    else if (type === 'artists') artistSearch(input);
}

function displayResults() {

}

function songSearch(input) {
    console.log('songs button clicked. searching songs');
    console.log(input);
}

function genreSearch() {
    console.log('genres button clicked. searching genres');
}

function artistSearch() {
    console.log('artists button clicked. searching artists');
}

async function windowActions(){
    console.log('Window loaded');

    //getting all songs
    const songsRequest = await fetch('/api/songsRoute');
    const songsJSON = await songsRequest.json()
                        .then(data => songs.push(...data));
    //console.log(songsObj);

    //getting all genres
    const genresRequest = await fetch('/api/genresRoute');
    const genresJSON = await genresRequest.json()
                        .then(data => genres.push(...data));
    //console.log(genres);

    //getting all artists
    const artistsRequest = await fetch('/api/artistsRoute');
    const artistsJSON = await artistsRequest.json()
                        .then(data => artists.push(...data));
    //console.log(artistsObj);
}

window.onload = windowActions;
//const input = document.getElementById('search').value;