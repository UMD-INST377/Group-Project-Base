/* 
    NAVBAR BURGER FUNCTIONALITY
*/
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
});


/* 
    POPULATING CHARTS
*/
async function getUSCharts() {
    const songRequest = await fetch('/api/wholeUSchart');
    const songData = await songRequest.json();
    return songData;
}

async function getGlobalCharts() {
    const songRequest = await fetch('/api/wholeGlobalChart');
    const songData = await songRequest.json();
    return songData;
}

async function windowActions() {
    const usResults = await getUSCharts();
    const globalResults = await getGlobalCharts();
    // console.table(usCharts.data);
    console.table(globalResults.data);
    const usCharts = usResults.data;
    const globalCharts = globalResults.data;

    const usTopSong = document.querySelector('.us-top-songs');
    usCharts.forEach((item) => {
        const appendItem = document.createElement('tr');

        appendItem.innerHTML = `
            <td>${item.us_top50_rank}</td>
            <td>${item.song_name}</td>
            <td>${item.artist_name}</td>
            <td>${item.streams}</td>`;
        
        if (usTopSong) {
            usTopSong.append(appendItem);
        }
        
    });

    const globalTopSong = document.querySelector('.global-top-songs');
    globalCharts.forEach((item) => {
        const appendItem = document.createElement('tr');

        appendItem.innerHTML = `
            <td>${item.global_top50_rank}</td>
            <td>${item.song_name}</td>
            <td>${item.artist_name}</td>
            <td>${item.streams}</td>`;

        if (globalTopSong) {
           globalTopSong.append(appendItem); 
        }
        
    });
}

window.onload = windowActions;

/* Appending Playlist Cards */

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
function getPlaylists() {
    let num_playlist = getCookie("num_playlist");

    if (num_playlist.length == 0) {
        document.cookie = "num_playlist = 0";
        num_playlist = 0;
    }
    const num = parseInt(num_playlist);
    const playlists = [];
    for (let i = 0; i < num; i++) {
        const playlist = getCookie("playlist" + i.toString());
        playlists.push(playlist);
    }
    return playlists;
}

function generatePlaylist()
{
    let num_playlist = getCookie("num_playlist");
    if (num_playlist.length == 0) {
        document.cookie = "num_playlist = 0";
        num_playlist = 0;
    }
    const num = parseInt(num_playlist);
    document.cookie = "num_playlist =" + (num+1).toString();
    

    document.cookie = "playlist" + num.toString() + "= content";
    console.log(getPlaylists());
}

const pDisplay = ` <div class="column is-narrow">
<div class="box" style="width: 400px;">
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src= "https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">Playlist</p>
          <p class="subtitle is-6">Created on 4/20/21</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;

function displayPlaylists() {
    const playlists = getPlaylists();
    const preview = document.getElementById("playlist_preview");
    const container = preview.firstElementChild;
    container.innerHTML = "";
    for (let i = 0; i < playlists.length; i++) {
        container.innerHTML += pDisplay;
    }
    console.log(container);
    // document.getElementById("playlist_preview").firstElementChild.innerHTML=pDisplay;
}

displayPlaylists();

const button = document.getElementById("p-button");
console.log(button);

button.addEventListener('click' , generatePlaylist) ;



