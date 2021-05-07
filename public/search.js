function generateResults(type) {
    //if no text in search bar, stop
    if (!(document.getElementById('search').value)) return;
    
    //display loading bar
    document.getElementById('loadingbar').className =
        document.getElementById("loadingbar").className.replace
        ( /(?:^|\s)invisible(?!\S)/g , '' );

    //getting text from search bar
    const input = document.getElementById('search').value;
    console.log('input');

    //goes to appropriate search
    if (type === 'songs') songSearch(input)
    else if (type === 'genres') genreSearch(input)
    else if (type === 'artists') artistSearch(input);
}

async function songSearch(input) {
    console.log('Songs button clicked');
    //console.log(input);

    //getting all songs
    const songsRequest = await fetch('/api/songsRoute');
    const songsJSON = await songsRequest.json();
    let songs = songsJSON;
    console.log('Song data loaded');
    //console.log(songs);

    //making a new array for our results
    const results = [];
    let regex = new RegExp(input, 'gi');

    //going through each song to get matches
    for (key in songs["data"]["data"]) {
        if (!(songs["data"]["data"][key]["SONG_NAME"])) continue
        else if (songs["data"]["data"][key]["SONG_NAME"].match(regex))
            results.push(songs["data"]["data"][key])
        else continue;
    }
    console.log(results);
    console.log('search complete');

    //display results
    console.log('starting to display results');

    const html = results.map(entry => {
        return `
            <li>
                <p>Song ID: <span class="songID">${entry.SONG_ID}</span></p>
                <p>Song Name: <span class="songname">${entry.SONG_NAME}</span></p>
                <p>Artist ID: <span class="artistid">${entry.ARTIST_ID}</span></p>
                <p>Song Popularity: <span class="songpop">${entry.SONG_POPULARITY}</span></p>
            </li>
        `;
    }).join('');
    
    document.getElementById('resultlist').innerHTML = html;
    console.log('added all entries to result list');

    //hide loading bar
    document.getElementById('loadingbar').className += " invisible";
    console.log('loading bar hidden');
}

async function genreSearch(input) {
    console.log('genres button clicked');
    //console.log(input);

    //getting all genres
    const genresRequest = await fetch('/api/genresRoute');
    const genresJSON = await genresRequest.json();
    let genres = genresJSON;
    console.log('Genre data loaded');
    //console.log(genres);

    const results = [];
    let regex = new RegExp(input, 'gi');

    //going through each genre to get matches
    for (let i = 0; i < genres.length; i++) {
        if (!(genres[i]["GENRE_NAME"])) continue
        else if (genres[i]["GENRE_NAME"].match(regex))
            results.push(genres[i])
        else continue;
    }

    console.log(results);
    console.log('search complete');

    //display results
    console.log('starting to display results');

    const html = results.map(entry => {
        return `
            <li>
                <p>Genre ID: <span class="songID">${entry.GENRE_ID}</span></p>
                <p>Genre Name: <span class="songname">${entry.GENRE_NAME}</span></p>
                <p>Genre Popularity: <span class="songpop">${entry.GENRE_POPULARITY}</span></p>
            </li>
        `;
    }).join('');
    
    document.getElementById('resultlist').innerHTML = html;
    console.log('added all entries to result list');

    //hide loading bar
    document.getElementById('loadingbar').className += " invisible";
    console.log('loading bar hidden');
}

async function artistSearch(input) {
    console.log('artists button clicked');
    //console.log(input);

    //getting all artists
    const artistsRequest = await fetch('/api/artistsRoute');
    const artistsJSON = await artistsRequest.json();
    let artists = artistsJSON;
    console.log('Artist data loaded');
    //console.log(artists);

    const results = [];
    let regex = new RegExp(input, 'gi');

    //going through each artist to get matches
    for (key in artists["data"]["data"]) {
        if (!(artists["data"]["data"][key]["ARTIST_NAME"])) continue
        else if (artists["data"]["data"][key]["ARTIST_NAME"].match(regex))
            results.push(artists["data"]["data"][key])
        else continue;
    }
    console.log(results);
    console.log('search complete');

    //display results
    console.log('starting to display results');

    const html = results.map(entry => {
        return `
            <li>
                <p>Artist ID: <span class="songID">${entry.ARTIST_ID}</span></p>
                <p>Artist Name: <span class="songname">${entry.ARTIST_NAME}</span></p>
                <p>Artist Popularity: <span class="songpop">${entry.ARTIST_POPULARITY}</span></p>
                <p>Genre ID: <span class="songpop">${entry.GENRE_ID}</span></p>
            </li>
        `;
    }).join('');
    
    document.getElementById('resultlist').innerHTML = html;
    console.log('added all entries to result list');

    //hide loading bar
    document.getElementById('loadingbar').className += " invisible";
    console.log('loading bar hidden');
}

async function windowActions() {
    console.log('Window loaded');

    //putting loading indicator onto the screen
    let loadingBar = document.createElement('progress');
    loadingBar.setAttribute("class", "progress is-medium is-dark invisible");
    loadingBar.setAttribute("id", "loadingbar");
    loadingBar.setAttribute("max", "100");
    document.getElementById("loadingdiv").appendChild(loadingBar);
    console.log('loading bar loaded');

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