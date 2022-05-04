function sortArray(arr, key) {
  return arr.sort((a, b) => {
    const x = a[key];
    const y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
}

function restArrayMake(dataArray) {
  const listItems = dataArray.slice(0, 50);
  return listItems;
}
function createHtmlList(collection) {
  const ArtistRadio = document.getElementById('artist');
  const AlbumRadio = document.getElementById('album');
  const Song = document.getElementById('song');
  const targetList = document.querySelector('.result_list');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const { name } = item;
    const { songName } = item;
    const { album_name } = item;
    const displayArtist = name.toLowerCase();
    const displaySong = songName.toLowerCase();
    const displayAlbum = album_name.toLowerCase();
    let injectThisArtist;
    let injectThisSong;
    let injectThisAlbum;
    if (Song.checked) {
      injectThisArtist = `<td>${displayArtist}</td>`;
      injectThisSong = `<th>${displaySong}</th>`;
      injectThisAlbum = ` <td>${displayAlbum}</td>`;
    }
    if (AlbumRadio.checked) {
      injectThisArtist = `<td>${displayArtist}</td>`;
      injectThisSong = `<td>${displaySong}</td>`;
      injectThisAlbum = ` <th>${displayAlbum}</th>`;
    }
    if (ArtistRadio.checked) {
      injectThisArtist = `<th>${displayArtist}</th>`;
      injectThisSong = `<td>${displaySong}</td>`;
      injectThisAlbum = ` <td>${displayAlbum}</td>`;
    }
    targetList.innerHTML += injectThisArtist + injectThisAlbum + injectThisSong;
  });
}
async function mainEvent() {
  // the async keyword means we can make API requests
  // not needed since result is limited to 50
  const searchbar = document.querySelector('#init_search');
  const results = await fetch('/api/main'); // This accesses some data from our API
  const arrayFromJson = await results.json(); // This changes it into data we can use - an object
  if (arrayFromJson.data.length > 0) {
    console.log('start');
    searchbar.addEventListener('input', async (event) => {
      console.log(event.target.value);
      if (event.length < 1) {
        console.log('caught');
        return;
      }
      if (event.target.value.trim().length) {
        // change arrayFromJson.data to currentArray if needed
        const dataArray = arrayFromJson.data.filter((item) => {
          // Changes the way the results are ordered based on which button is pressed
          if (document.getElementById('song').checked) {
            const lowerName = item.songName.toLowerCase();
            const lowerValue = event.target.value.toLowerCase();
            return lowerName.startsWith(lowerValue);
          }
          if (document.getElementById('album').checked) {
            const lowerName = item.album_name.toLowerCase();
            const lowerValue = event.target.value.toLowerCase();
            return lowerName.startsWith(lowerValue);
          }
          if (document.getElementById('artist').checked) {
            const lowerName = item.name.toLowerCase();
            const lowerValue = event.target.value.toLowerCase();
            return lowerName.startsWith(lowerValue);
          }
        });
        console.log(dataArray);
        console.log(event.target.value);
        createHtmlList(restArrayMake(dataArray));
      } else {
        document.querySelector('.result_list').innerHTML = '';
      }
    });
  }
}
// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
