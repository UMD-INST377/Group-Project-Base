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

    const limit = 10;

    const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
        method: 'GET',
        headers: {'Authorization' : 'Bearer' + token}
    });

    const data = result.json();
    return data.items;
}

async function getTrack(token, tracksEndPoint) {

    const result = await fetch(`${tracksEndPoint}`, {
        method: 'GET',
        headers: {'Authorization' : 'Bearer' + token}
    });

    const data = result.json();
    return data;
}


async function init(){
    const token = await getToken();
    console.log("Getting playlist for Rock")
    const playlists = await getPlaylistsByGenre(token, "0JQ5DAqbMKFDXXwE9BDJAr", 1);
    console.log("Getting tracks from:" + playlists);
    const plalylistSg = playlists.tracks.href
    const tracks = await getTracks(token, plalylistSg);
    tracks.forEach(element => {
        console.log(element)    
    })
}

init();