function genreSearch() {
    console.log("genre button clicked");
}

function artistSearch() {
    console.log("artist button clicked");
}

function albumSearch() {
    console.log("album button clicked");
}

async function windowActions(){
    console.log('Window loaded')
    const form = document.querySelector('.userform');

    const genreButton = document.querySelector('#genrebutton');
    genreButton.addEventListener("click", genreSearch);

    const artistButton = document.querySelector('#artistbutton');
    artistButton.addEventListener("click", artistSearch);

    const albumButton = document.querySelector('#albumbutton');
    albumButton.addEventListener("click", albumSearch);
}

window.onload = windowActions;