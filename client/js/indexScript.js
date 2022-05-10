const coverArt = 
{1 : 'https://upload.wikimedia.org/wikipedia/en/e/e7/Moneybagg_Yo_-_A_Gangsta%27s_Pain.png',
 2 : './covers/holy_2.png',
 3: 'https://i.scdn.co/image/ab67616d0000b273ef017e899c0547766997d874',
 4: 'https://i1.sndcdn.com/artworks-aMU4GrPiwKtpGnu1-vdrqhQ-t500x500.jpg'};
 const frontPageLimit = 3;

function getImage(songID) {
    url = "";
    if (songID in coverArt) {
        url = coverArt[songID];
    }
    return url;
}

// Songs
function createSongList(collection) {
    console.log(collection,'Collection');
    const targetList = document.querySelector('.song_images');
    targetList.innerHTML = '';
    // collection = Object.values(collection);
    // const entries = Object.entries(collection);
    // console.log(entries);
    let i =0;
    collection.data.forEach((item) => {
        if(i>frontPageLimit) {
            return;
        }
        const injectThisItem = `<li><img class="placeholder" src="${getImage(item.song_id)}" alt="Placeholder Image">${item.song_name}</li>`;
        console.log(item.song_name);
        targetList.innerHTML += injectThisItem;
        i++;
    });
    console.log(Object.values(collection));
}

//Artitsts
function createArtistList(collection) {
    console.log(collection,'Collection');
    const targetList = document.querySelector('.artist_images');
    targetList.innerHTML = '';
    // collection = Object.values(collection);
    // const entries = Object.entries(collection);
    // console.log(entries);

    let i =0;
    collection.data.forEach((item) => {
        if(i>frontPageLimit) {
            return;
        }
        const injectThisItem = `<li><img class="placeholder" src="${getImage(i + 1)}" alt="Placeholder Image">${item.first_name + " " + item.last_name}</li>`;
        console.log(item.artist_id);
        targetList.innerHTML += injectThisItem;
        i++;
    });
    console.log(Object.values(collection));
}

// The third thing...
function createGenreList(collection) {
    console.log(collection,'Collection');
    const targetList = document.querySelector('.genre_images');
    targetList.innerHTML = '';
    // collection = Object.values(collection);
    // const entries = Object.entries(collection);
    // console.log(entries);

    let i =0;
    collection.data.forEach((item) => {
        if(i>frontPageLimit) {
            return;
        }
        const injectThisItem = `<li><img class="placeholder" src="${getImage(i + 1)}" alt="Placeholder Image">${item.genre_name}</li>`;
        console.log(item.song_name);
        targetList.innerHTML += injectThisItem;
        i++;
    });
    console.log(Object.values(collection));
}
  
async function mainEvent() {
    const songs = await fetch('api/songs'); // This accesses some data from our API
    const songsArray = await songs.json(); // This changes it into data we can use - an object
    const artists = await fetch('api/artist');
    const artistArray = await artists.json();
    const genres = await fetch('api/genre');
    const genresArray = await genres.json();
    createSongList(songsArray);
    createArtistList(artistArray);
    createGenreList(genresArray);
    console.log('API Retrieval for index.HTML Not Yet Implemented')
}

document.addEventListener('DOMContentLoaded', async () => mainEvent()); 