async function popLinkingTables(user) { // Populates linking tables
  const songGen = await fetch('api/song_genres/', {
    method: 'POST'
  });
  const songArt = await fetch('api/artist_songs/', {
    method: 'POST'
  });
  const songAlb = await fetch('api/album_songs/', {
    method: 'POST'
  });
  console.log(user[0].playlist_id);
  const songPlay = await fetch('api/playlist_songs/', {
    method: 'POST',
    body: JSON.stringify({
      playlist_id: user[0].playlist_id,
      added_by: user[0].name
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const artAlb = await fetch('api/artist_albums/', {
    method: 'POST'
  });
  // add songPlay to this when you complete the above comment
  console.log(songGen, songArt, songAlb, artAlb, songPlay);
}

async function getUserAndPlaylist(array) { // Gets Username and Playlist name
  let info;
  await fetch(`api/playlists/${array[0].value}/${array[1].value}`)
    .then((response) => response.json())
    .then((result) => {
      info = result;
    });
  console.log(info);
  return info;
}

async function iAdd(songInfo, userInfo) { // Adds info into the database
  const userP = getUserAndPlaylist(userInfo)
  const user = await userP;
  console.log(user)
  if (user.length === 0) {
    // This checks to see if the username has the specified playlist, if it doesnt then it does not
    // add any value to the database.
    return;
  }
  
  songInfo[0].addEventListener('input', async (songEvent) => {
    console.log(songEvent.target.value);
    if (songEvent.length < 1) {
      console.log('caught');
      return;
    }
    // console.log(songInfo[3].checked);
    // console.log(JSON.stringify({
    //   name: songEvent.target.value,
    //   is_explicit: songInfo[3].checked ? 1 : 0,
    // }),);
    const addSong = await fetch('api/songs/', {
      method: 'POST',
      body: JSON.stringify({
        name: songEvent.target.value,
        is_explicit: songInfo[4].checked ? 1 : 0
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(addSong);
  });
  songInfo[1].addEventListener('input', async (artistEvent) => {
    console.log(artistEvent.target.value);
    if (artistEvent.length < 1) {
      console.log('caught');
      return;
    }
    const addArtist = await fetch('api/artists/', {
      method: 'POST',
      body: JSON.stringify({
        name: artistEvent.target.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(addArtist);
  });
  songInfo[2].addEventListener('input', async (albumEvent) => {
    console.log(albumEvent.target.value);
    if (albumEvent.length < 1) {
      console.log('caught');
      return;
    }
    const addAlbum = await fetch('api/albums/', {
      method: 'POST',
      body: JSON.stringify({
        name: albumEvent.target.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(addAlbum);
  });
  songInfo[3].addEventListener('input', async (genreEvent) => {
    console.log(genreEvent.target.value);
    if (genreEvent.length < 1) {
      console.log('caught');
      return;
    }
    const addGenre = await fetch('api/genres/', {
      method: 'POST',
      body: JSON.stringify({
        name: genreEvent.target.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(addGenre);
  });
  popLinkingTables(user);
}

async function iDel(songInfo, userInfo) { // TODO get this to work 
  const user = getUserAndPlaylist(userInfo)
  if (user === 0) {
    // This checks to see if the username has the specified playlist, if it doesnt then it does not
    // add any value to the database.
    return;
  }
  songInfo[0].addEventListener('input', async (songEvent) => {
    console.log(songEvent.target.value);
    if (songEvent.length < 1) {
      console.log('caught');
      return;
    }
    // console.log(songInfo[3].checked);
    // console.log(JSON.stringify({
    //   name: songEvent.target.value,
    //   is_explicit: songInfo[3].checked ? 1 : 0,
    // }),);
    const delSong = await fetch('api/songs/', {
      method: 'DELTE',
      body: JSON.stringify({
        name: songEvent.target.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(delSong);
  });
}
async function mainEvent() {
  const forms = [document.querySelector('.form1'), document.querySelector('.form2'), document.querySelector('.form3')];
  const userInfo = [document.querySelector('#playlist_owner_get'), document.querySelector('#playlist_name_get')];
  const infoAdd = [document.querySelector('#song_name_add'), document.querySelector('#artist_name_add'), document.querySelector('#album_name_add'), document.querySelector('#genre_add'), document.getElementById('explic')];
  const infoDel = [document.querySelector('#song_name_delete'), document.querySelector('#artist_name_delete'), document.querySelector('#album_name_delete'), document.querySelector('#genre_del')];
  forms[0].addEventListener('submit', async (event) => {
    newPlaylist();
  });
  forms[1].addEventListener('submit', async (event) => {
    iAdd(infoAdd, userInfo);
    console.log(event.target.value);
    event.preventDefault();
    console.log('form submission');
  });
  forms[2].addEventListener('submit', async (event) => {
    iDel(infoDel, userInfo);
    event.preventDefault();
  });
}
// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
