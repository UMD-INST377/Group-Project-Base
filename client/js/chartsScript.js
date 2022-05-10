//Charts Maxim
console.log('hi');

// Put in the songID, get out the songImage from the image dictionary
function getImage(songID) {

}

async function mainChart() {
    const genres = await fetch('api/songs'); // This accesses some data from our API
      const genreArray = await genres.json(); // This changes it into data we can use - an object
      console.log('Charts fetch');
      console.log(genreArray);
      createGenreList(genreArray);
    }
    
    
      function createGenreList(collection) {
        console.log(collection,'Collection');
        const targetList = document.querySelector('.songs_images');
        targetList.innerHTML = '';
        // collection = Object.values(collection);
        // const entries = Object.entries(collection);
        // console.log(entries);

       collection.data.forEach((item) => {
          const injectThisItem = `<li><img class="placeholder" src="placeholder.png" alt="Placeholder Image">${item.song_name}</li>`;
          console.log(item.song_name);
          targetList.innerHTML += injectThisItem;
        });
        console.log(Object.values(collection));
      }

      mainChart();