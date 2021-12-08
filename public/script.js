async function windowsAction() {
  async function getPlaylist() {
    const endPoint = await fetch('./api/playlists');
    const playlists = await endPoint.json();
    const playlistContainer = document.querySelector('#playlistContainer');

    function displayPlaylists() {
      // eslint-disable-next-line no-template-curly-in-string
      // eslint-disable-next-line arrow-body-style
      const html = playlists.map((playlist) => {
        return `<button class="playlist-button box column" type="button">${playlist.playlist_name}</button>`;
      }).join('');
      playlistContainer.innerHTML = html;
    }

    displayPlaylists();
  }
  getPlaylist();

  async function getAlbums() {
    const endPoint = await fetch('./api/albums');
    const albums = await endPoint.json();
    const albumContainer = document.querySelector('#albumContainer');

    function displayAlbums() {
      // eslint-disable-next-line no-template-curly-in-string
      // eslint-disable-next-line arrow-body-style
      const html = albums.map((album) => {
        return `<button class="playlist-button box column" type="button">${album.album_name}</button>`;
      }).join('');
      albumContainer.innerHTML = html;
    }

    displayAlbums();
  }
  getAlbums();

  async function getPopSongs() {
    const endPoint = await fetch('./api/popsongs');
    const songs = await endPoint.json();
    const songContainer = document.querySelector('#popsongsContainer');
    function displayPlaylists() {
      // eslint-disable-next-line no-template-curly-in-string
      // eslint-disable-next-line arrow-body-style
      const html = songs.map((song) => {
        return `<ul>
                  <li>
                    <span class='song_name'>
                      ${song.song_name}
                      <form action="/api/rapSongs" method="post">
                        <button class="button is-warning"  type="submit">Delete</button>
                        <input  type = "hidden" name = "song_id" value = "${song.song_id}" />
                      </form>
                    </span>
                  </li>
                </ul>`;
      }).join('');
      songContainer.innerHTML = html;
    }

    displayPlaylists();
  }
  getPopSongs();

  async function getHipHopSongs() {
    const endPoint = await fetch('./api/rapSongs');
    const songs = await endPoint.json();
    const songContainer = document.querySelector('#hiphopsongsContainer');

    function displayPlaylists() {
      // eslint-disable-next-line no-template-curly-in-string
      // eslint-disable-next-line arrow-body-style
      const html = songs.map((song) => {
        return `<ul>
        <li><span class='song_name'>${song.song_name}</span></li>
    </ul>`;
      }).join('');
      songContainer.innerHTML = html;
    }

    displayPlaylists();
  }
  getHipHopSongs();

  async function getHolidaySongs() {
    const endPoint = await fetch('./api/holidaySongs');
    const songs = await endPoint.json();
    const songContainer = document.querySelector('#holidaysongsContainer');

    function displayPlaylists() {
      // eslint-disable-next-line no-template-curly-in-string
      // eslint-disable-next-line arrow-body-style
      const html = songs.map((song) => {
        return `<ul>
        <li><span class='song_name'>${song.song_name}</span></li>
    </ul>`;
      }).join('');
      songContainer.innerHTML = html;
    }

    displayPlaylists();
  }
  getHolidaySongs();

  async function getUSTopSongs() {
    const endPoint = await fetch('./api/usChart');
    const songs = await endPoint.json();
    const songContainer = document.querySelector('#ustopsongsContainer');

    function displayPlaylists() {
      // eslint-disable-next-line no-template-curly-in-string
      // eslint-disable-next-line arrow-body-style
      // `<ul><li><span class='song_name'>${song.song_name}</span></li></ul>`).join('');
      const html = songs.map((song) => {
        return `<button class="playlist-button box column" type="button">${song.song_name}</button>`;
      }).join('');
      songContainer.innerHTML = html;
    }

    displayPlaylists();
  }
  getUSTopSongs();

  async function getGlobalTopSongs() {
    const endPoint = await fetch('./api/globalCharts');
    const songs = await endPoint.json();
    const songContainer = document.querySelector('#globaltopsongsContainer');

    function displayPlaylists() {
      // eslint-disable-next-line no-template-curly-in-string
      // eslint-disable-next-line arrow-body-style
      const html = songs.map((song) => {
        return `<button class="playlist-button box column" type="button">${song.song_name}</button>`;
      }).join('');
      songContainer.innerHTML = html;
    }

    displayPlaylists();
  }
  getGlobalTopSongs();

  async function getTopPodcasts() {
    const endPoint = await fetch('./api/podcastCharts');
    const podcasts = await endPoint.json();
    const podcastContainer = document.querySelector('#topPodcastsContainer');

    function displayPodcasts() {
      // eslint-disable-next-line no-template-curly-in-string
      // eslint-disable-next-line arrow-body-style
      const html = podcasts.map((podcast) => {
        return `<button class="playlist-button box column" type="button">${podcast.podcast_name}</button>`;
      }).join('');
      podcastContainer.innerHTML = html;
    }

    displayPodcasts();
  }
  getTopPodcasts();
}

async function getartists() {
  const endPoint = await fetch('./api/Artists');
  const artists = await endPoint.json();
  const artistcontainer = document.querySelector('#artistcontainer');

  function displayartists() {
    // eslint-disable-next-line no-template-curly-in-string
    // eslint-disable-next-line arrow-body-style
    const html = artists.map((artist) => {
      return `<ul>
                <li>
                  <span class='song_name'>
                    ${song.artist_name}
                    <form action="/api/Artists" method="post">
                      <button class="button is-warning"  type="submit">Delete</button>
                      <input  type = "hidden" name = "artist_id" value = "${song.artist_id}" />
                    </form>
                  </span>
                </li>
              </ul>`;
    }).join('');
    artistcontainer.innerHTML = html;
  }

  displayartists();
}
getartists();

async function getAriana() {
  const endPoint = await fetch('./api/Artists/Ariana_grande');
  const songs = await endPoint.json();
  const songContainer = document.querySelector('#arianaContainer');

  function displayPlaylists() {
    // eslint-disable-next-line no-template-curly-in-string
    // eslint-disable-next-line arrow-body-style
    const html = songs.map((song) => {
      return `<button class="playlist-button box column" type="button">${song.song_name}</button>`;
    }).join('');
    songContainer.innerHTML = html;
  }

  displayPlaylists();
}
getAriana();

window.onload = windowsAction();