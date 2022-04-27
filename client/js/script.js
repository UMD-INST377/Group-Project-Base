function restArrayMake(dataArray) {
  const listItems = dataArray.slice(0, 50);
  return listItems;
}
function createHtmlList(collection) {
  const targetList = document.querySelector('.result_list');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const { name } = item;
    const { songName } = item;
    const { album_name } = item;
    const displayArtist = name.toLowerCase();
    const displaySong = songName.toLowerCase();
    const displayAlbum = album_name.toLowerCase();
    const injectThisArtist = `<td>${displayArtist}</td>`;
    const injectThisSong = `<td>${displaySong}</td>`;
    const injectThisAlbum = ` <th>${displayAlbum}</th>`;
    targetList.innerHTML += injectThisArtist + injectThisSong + injectThisAlbum;
  });
}
async function mainEvent() {
  // the async keyword means we can make API requests
  const form = document.querySelector('#results');
  // not needed since result is limited to 50
  // const submitButton = document.querySelector('#submit_button');
  const searchbar = document.querySelector('#init_search');

  const results = await fetch('/api/main'); // This accesses some data from our API
  const arrayFromJson = await results.json(); // This changes it into data we can use - an object

  if (arrayFromJson.data.length > 0) {
    // submitButton.style.display = 'block';
    console.log('start');

    let currentArray = [];
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
            console.log('Song is checked');
            const lowerName = item.songName.toLowerCase();
            const lowerValue = event.target.value.toLowerCase();
            return lowerName.startsWith(lowerValue);
          }
          if (document.getElementById('album').checked) {
            console.log('Album is checked');
            const lowerName = item.album_name.toLowerCase();
            const lowerValue = event.target.value.toLowerCase();
            return lowerName.startsWith(lowerValue);
          }
          console.log('Artist is checked');
          const lowerName = item.name.toLowerCase();
          const lowerValue = event.target.value.toLowerCase();
          return lowerName.startsWith(lowerValue);
        });
        console.log(dataArray);
        console.log(event.target.value);

        createHtmlList(restArrayMake(dataArray));
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
