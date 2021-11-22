document.addEventListener('DOMContentLoaded', () => {
  const top100List = document.querySelector('.top-100-movie-list');

  // This will create the cards with the images attached
  function displayImageCard() {
  }

  async function imageExtractor() {
    // fetch the films table
    const response = await fetch('../api/top100');
    // extract the json data
  }
  // I was unable to ge the code to link to the API will have to fix later with help 
  /* const movieList = ['Avengers: Endgame', 'The Dark Knight', 'Django Unchained', 'Spider-Man: Into the Spider-Verse']
  for (const movie of movieList){
    const movieTitle = encodeURIComponent(movieData.film_title.trim());
  } */
  
  let counter = 1;
  setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 5000);
});
