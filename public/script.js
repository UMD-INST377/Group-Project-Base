async function windowsAction() {
  async function getPlaylist() {
    const endPoint = await fetch('http://localhost:3000/api/playlists');
    const playlists = await endPoint.json();
    const playlistContainer = document.querySelector('#playlistContainer');

    function displayPlaylists() {
      // eslint-disable-next-line no-template-curly-in-string
      // eslint-disable-next-line arrow-body-style
      const html = playlists.map((playlist) => {
        return `<button class="playlist-button" type="button">${playlist.playlist_name}</button>`;
      }).join('');
      playlistContainer.innerHTML = html;
    }

    displayPlaylists();
  }
  getPlaylist();

  async function getAlbums() {
    const endPoint = await fetch('http://localhost:3000/api/albums');
    const albums = await endPoint.json();
    const albumContainer = document.querySelector('#albumContainer');

    function displayAlbums() {
      // eslint-disable-next-line no-template-curly-in-string
      // eslint-disable-next-line arrow-body-style
      const html = albums.map((album) => {
        return `<button class="playlist-button" type="button">${album.album_name}</button>`;
      }).join('');
      albumContainer.innerHTML = html;
    }

    displayAlbums();
  }
  getAlbums();

  async function getPopSongs() {
    const endPoint = await fetch('http://localhost:3000/api/popsongs');
    const songs = await endPoint.json();
    const playlistContainer = document.querySelector('#popsongsContainer');
    console.log(songs)
    function displayPlaylists() {
      // eslint-disable-next-line no-template-curly-in-string
      // eslint-disable-next-line arrow-body-style
      const html = songs.map((song) => {
        return `<button class="playlist-button" type="button">${song.song_name}</button>`;
      }).join('');
      playlistContainer.innerHTML = html;
    }

    displayPlaylists();
  }
  getPopSongs();

  async function getHipHopSongs() {
    const endPoint = await fetch('http://localhost:3000/api/albums');
    const albums = await endPoint.json();
    const playlistContainer = document.querySelector('#albumContainer');

    function displayPlaylists() {
      // eslint-disable-next-line no-template-curly-in-string
      // eslint-disable-next-line arrow-body-style
      const html = albums.map((album) => {
        return `<button class="playlist-button" type="button">${album.album_name}</button>`;
      }).join('');
      playlistContainer.innerHTML = html;
    }

    displayPlaylists();
  }
  getHipHopSongs();

  async function getHolidaySongs() {
    const endPoint = await fetch('http://localhost:3000/api/albums');
    const albums = await endPoint.json();
    const playlistContainer = document.querySelector('#albumContainer');

    function displayPlaylists() {
      // eslint-disable-next-line no-template-curly-in-string
      // eslint-disable-next-line arrow-body-style
      const html = albums.map((album) => {
        return `<button class="playlist-button" type="button">${album.album_name}</button>`;
      }).join('');
      playlistContainer.innerHTML = html;
    }

    displayPlaylists();
  }
  getHolidaySongs();
}

window.onload = windowsAction();