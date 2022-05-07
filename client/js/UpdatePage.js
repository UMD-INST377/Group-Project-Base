async function addPlaylist() {

}

async function iAdd(array) {// TODO get this to work
  console.log('hello from add');
  const results = await fetch('api/main');
  const addedFromJson = await results.json()
  array[0].addEventListener('input', async (songEvent) => {
    console.log(songEvent.target.value);
    if (songEvent.length < 1) {
      console.log('caught');
      return;
    }
    const add = await fetch('api/songs/', { method: 'POST' });
    console.log(add);
  })
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
  const infoAdd = [document.querySelector('#song_name_add'), document.querySelector('#artist_name_add'), document.querySelector('#album_name_add')]
  iAdd(infoAdd)
  
  add.addEventListener('input', songAdd);
  del.addEventListener('input', songDelete);
}
// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
