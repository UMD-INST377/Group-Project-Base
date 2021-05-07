//aaaaa
function generateResults(type) {
    //putting loading indicator onto the screen
    let loadingBar = document.createElement('progress');
    loadingBar.setAttribute("class", "progress is-medium is-dark");
    loadingBar.setAttribute("max", "100");
    document.body.appendChild(loadingBar);

    //getting text from search bar
    if (!(document.getElementById('search').value)) return;
    
    const input = document.getElementById('search').value;

    if (type === 'songs') displayResults(songSearch(input))
    else if (type === 'genres') displayResults(genreSearch(input))
    else if (type === 'artists') displayResults(artistSearch(input));
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

    const results = [];

    //going through each song to get matches
    for (key in songs["data"]["data"]) {
        if (!(songs["data"]["data"][key]["SONG_NAME"])) continue
        else if (songs["data"]["data"][key]["SONG_NAME"].indexOf(input) !== -1)
            results.push(songs["data"]["data"][key])
        else continue;
    }
    console.log(results);
    return results;
}

async function genreSearch(input) {
    console.log('genres button clicked');
    console.log(input);

    //getting all genres
    const genresRequest = await fetch('/api/genresRoute');
    const genresJSON = await genresRequest.json();
    let genres = genresJSON;
    console.log('Genre data loaded');
    console.log(genres);

    const results = [];

    for (let i = 0; i < genres.length; i++) {
        if (!(genres[i]["GENRE_NAME"])) continue
        else if (genres[i]["GENRE_NAME"].includes(input))
            results.push(genres[i])
        else continue;
    }

    console.log(results);
    return results;
}

async function artistSearch(input) {
    console.log('artists button clicked');
    console.log(input);

    //getting all artists
    const artistsRequest = await fetch('/api/artistsRoute');
    const artistsJSON = await artistsRequest.json();
    let artists = artistsJSON;
    console.log('Artist data loaded');
    console.log(artists);

    const results = [];

    //going through each artist to get matches
    for (key in artists["data"]["data"]) {
        if (!(artists["data"]["data"][key]["ARTIST_NAME"])) continue
        else if (artists["data"]["data"][key]["ARTIST_NAME"].includes(input))
            results.push(artists["data"]["data"][key])
        else continue;
    }
    console.log(results);
    return results;
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