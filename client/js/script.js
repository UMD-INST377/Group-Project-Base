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
  const targetList = document.querySelector('.result_list');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const { name } = item;
    const { album_name } = item;
    const displayArtist = name.toLowerCase();
    const displayAlbum = album_name.toLowerCase();
    const injectThisArtist = `<td>${displayArtist}</td>`;
    const injectThisAlbum = ` <th>${displayAlbum}</th>`;
    targetList.innerHTML += injectThisArtist + injectThisAlbum;
  });
}
async function mainEvent() {
  // the async keyword means we can make API requests
  const form = document.querySelector('#results');
  const restName = document.querySelector('#init_search');
  const ArtistRadio = document.getElementById('Artist');
  const AlbumRadio = document.getElementById('Album');

  const results = await fetch('/api/main'); // This accesses some data from our API
  const arrayFromJson = await results.json(); // This changes it into data we can use - an object
  if (arrayFromJson.data.length > 0) {
    console.log('start');
    let currentArray = [];
    restName.addEventListener('input', async (event) => {
      console.log(event.target.value);
      if (event.length < 1) {
        console.log('caught');
        return;
      }
      if (event.target.value.trim().length) {
        // change arrayFromJson.data to currentArray if needed
        const dataArray = arrayFromJson.data.filter((item) => {
          const lowerAlbumName = item.album_name.toLowerCase();
          const lowerArtistName = item.name.toLowerCase();
          const lowerValue = event.target.value.toLowerCase();
          if (ArtistRadio.checked) {
            return lowerArtistName.startsWith(lowerValue);
          }
          if (AlbumRadio.checked) {
            return lowerAlbumName.startsWith(lowerValue);
          }
          return 'no results';
        });

        console.log(dataArray);
        console.log(event.target.value);
        const sortedArray = (() => {
          if (ArtistRadio.checked) {
            return sortArray(dataArray, 'name');
          }
          if (AlbumRadio.checked) {
            return sortArray(dataArray, 'album_name');
          }
        })();

        console.log(sortedArray);
        createHtmlList(restArrayMake(sortedArray));
      } else {
        document.querySelector('.result_list').innerHTML = '';
      }
    });

    form.addEventListener('submit', async (submitEvent) => {
      // async has to be declared all the way to get an await
      submitEvent.preventDefault(); // This prevents your page from refreshing!
      console.log('form submission'); // this is substituting for a 'breakpoint'
      currentArray = arrayFromJson.data;
      createHtmlList(restArrayMake(currentArray));
    });
  }
}
// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
