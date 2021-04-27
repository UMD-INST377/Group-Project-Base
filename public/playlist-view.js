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
  











  function getRando(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }











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

  async function getSongsArtists() {
    const songRequest = await fetch('/api/songsArtists');
    const songData = await songRequest.json();
    return songData;
  }
  



  async function windowActions() {
    
    const songsArtists = await getSongsArtists();
    const songsArtistsData = songsArtists.data;

    //console.table(songsArtists.data);

    const random = [1,2,3,4,5,6,7,8,9,10];
    
    const selectedSongs = random.map((element) => {
      const randomNum = getRando(0, songsArtistsData.length - 1);
      return songsArtistsData[randomNum];
        });

        
    console.table(selectedSongs)

    const table = document.querySelector('.playlist-table');
    selectedSongs.forEach((item) => {
      const appendItem = document.createElement('tr');

      appendItem.innerHTML = `
              <td>${item.song_name}</td>
              <td>${item.artist_name}</td>
              <td>${item.explicit}</td>`;
          
      if (table) {
        table.append(appendItem);
      }
          
    });

  }
  
  window.onload = windowActions;
  
  /* 
      MODAL POP-UP 
  */
  'use strict';
  
  document.addEventListener('DOMContentLoaded', function () {
  
  // Modals
  
  let rootEl = document.documentElement;
  let $modals = getAll('.modal');
  let $modalButtons = getAll('.modal-button');
  let $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');
  
  if ($modalButtons.length > 0) {
      $modalButtons.forEach(function ($el) {
      $el.addEventListener('click', function () {
          let target = $el.dataset.target;
          let $target = document.getElementById(target);
          rootEl.classList.add('is-clipped');
          $target.classList.add('is-active');
      });
      });
  }
  
  if ($modalCloses.length > 0) {
      $modalCloses.forEach(function ($el) {
      $el.addEventListener('click', function () {
          closeModals();
      });
      });
  }
  
  document.addEventListener('keydown', function (event) {
      let e = event || window.event;
      if (e.keyCode === 27) {
      closeModals();
      }
  });
  
  function closeModals() {
      rootEl.classList.remove('is-clipped');
      $modals.forEach(function ($el) {
      $el.classList.remove('is-active');
      });
  }
  
  // Functions
  
  function getAll(selector) {
      return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }
  
  });
  
  /* 
      Appending Playlist Cards 
  */
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
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
  
  const pDisplay = `
  <div class="column is-one-quarter">
  <div class="card card-button" onclick="location.href='playlistsview.html'">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content has-text-centered">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">Playlist Name</p>
          <p class="subtitle is-6">Created on 4/20/2021</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  `;
  
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
  
  button.addEventListener('click' , generatePlaylist);
  
  // function to move through create playlist forms
  
  /* function ifRandom() {    
    if (document.getElementById('random').checked) {
      document.getElementById('rando').style.display = 'block';
      document.getElementById('custo').style.display = 'none';
    }
    else {   
      console.log('custom!');
    }
  }
  function nextPage() {
    const page1 = document.querySelector('#step-one');
    const page2 = document.querySelector('#step-two');
    page1.style.display = 'none';
    page2.style.display = 'block';
  } */
  /*
  function prevPage() {
    const page1 = document.querySelector('#step-one');
    const page2 = document.querySelector('#step-two');
    page1.style.display = 'block';
    page2.style.display = 'none';
  }
  function togglePage(page1, page2) {
    page1.style.display = 'none';
    page2.style.display = 'block';
  }
  
  // selecting the page that you want to change
  const stepone = document.getElementById('step-one');
  const steptwo = document.getElementById('step-two');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  
  // calling the function (look at HTML for style attribute on these forms)
  next.onclick = nextPage(stepone, steptwo);
  prev.onclick = prevPage(steptwo, stepone); */