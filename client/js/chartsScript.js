//Charts Maxim
async function mainChart() {
    const genres = await fetch('api/genre'); // This accesses some data from our API
      const genreArray = await genres.json(); // This changes it into data we can use - an object
      console.log('Charts fetch');
      console.log(genreArray);
      createGenreList(genreArray);
    }
    
    
      function createGenreList(collection) {
        console.log(collection);
        const targetList = document.querySelector('.songs_images');
        targetList.innerHTML = '';
        // collection = Object.values(collection);
        // const entries = Object.entries(collection);
        // console.log(entries);

       collection.data.forEach((item) => {
          const injectThisItem = `<li>${item.genre_name}</li>`;
          targetList.innerHTML += injectThisItem;
        });
        console.log(Object.values(collection));
      }

      mainChart();