async function popLinkingTables() { // Populates linking tables
  const songGen = await fetch('api/song_genres/', {
    method: 'POST'
  })
  const songArt = await fetch('api/artist_songs/', {
    method: 'POST'
  })
  const songAlb = await fetch('api/album_songs/', {
    method: 'POST'
  })
  // Uncomment this after you make the get username and playlist function
  // const songPlay = await fetch('api/playlist_songs/', { 
  //   method: 'POST'
  // })
  const artAlb = await fetch('api/artist_albums/', {
    method: 'POST'
  })
  // add songPlay to this when you complete the above comment
  console.log(songGen, songArt, songAlb, artAlb);
}

async function iAdd(array) {
  // console.log('hello from add');
  array[0].addEventListener('input', async (songEvent) => {
    console.log(songEvent.target.value);
    if (songEvent.length < 1) {
      console.log('caught');
      return;
    }
    // console.log(array[3].checked);
    // console.log(JSON.stringify({
    //   name: songEvent.target.value,
    //   is_explicit: array[3].checked ? 1 : 0,
    // }),);
    const addSong = await fetch('api/songs/', { 
      method: 'POST',
      body: JSON.stringify({
        name: songEvent.target.value,
        is_explicit: array[4].checked ? 1 : 0,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    console.log(addSong);
  });
  array[1].addEventListener('input', async (artistEvent) => {
    console.log(artistEvent.target.value);
    if (artistEvent.length < 1) {
      console.log('caught');
      return;
    }
    const addArtist = await fetch('api/artists/', {
      method: 'POST',
      body: JSON.stringify({
        name: artistEvent.target.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    console.log(addArtist);
  });
  array[2].addEventListener('input', async (albumEvent) => {
    console.log(albumEvent.target.value);
    if (albumEvent.length < 1) {
      console.log('caught');
      return;
    }
    const addAlbum = await fetch('api/albums/', {
      method: 'POST',
      body: JSON.stringify({
        name: albumEvent.target.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    console.log(addAlbum);
  });
  array[3].addEventListener('input', async (genreEvent) => {
    console.log(genreEvent.target.value);
    if (genreEvent.length < 1) {
      console.log('caught');
      return;
    }
    const addGenre = await fetch('api/genres/', {
      method: 'POST',
      body: JSON.stringify({
        name: genreEvent.target.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    console.log(addGenre);
  });
  popLinkingTables();
}

async function songDelete() {
  console.log('hello from delete');
  
  const request = `api/songs/${formbox.value}`;
  const resp = await fetch(request, { method: 'DELETE' });
  console.log(resp);
  if (resp.status === 200) {
    alert(`${formbox.value}.deleted`);
  } else {
    alert('Not_Found');
  }
}
async function mainEvent() {
  const form = document.querySelector('.box'); 
  const infoAdd = [document.querySelector('#song_name_add'), document.querySelector('#artist_name_add'), document.querySelector('#album_name_add'),document.querySelector('#genre_add'), document.getElementById('explic')]
  const subAdd = document.querySelector('#sub_add');
  subAdd.style.display = 'block';
  form.addEventListener('submit', async (event) => {
    iAdd(infoAdd);
    console.log(event.target.value)
    event.preventDefault();
    console.log('form submission');
  });
  
  add.addEventListener('input', songAdd);
  del.addEventListener('input', songDelete);
}
// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
