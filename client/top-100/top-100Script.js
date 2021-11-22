document.addEventListener('DOMContentLoaded', () => {
  const top100List = document.querySelector('.top-100-movie-list');

  const apiKey = 'fd78e1d1d80dd5c9a8cc46852b23aefc';
  const apiImageLink = 'https://image.tmdb.org/t/p/w500';

  // This will create the cards with the images attached
  const makeMovieImageCard = (title, description, rating, num, src, alt) => {
    top100List.innerHTML += `
    <div class="movie-container">
      <div class="circle"> <div id='circleNum'>${num}</div></div>
      <div class="movie-card"> 
          <div class ="movie">
              <img src=${src} alt=${alt}>
              <h1 class="movie-name">${title}</h1>
          </div>
          <div class="movie-description">
              <p class="description-text"> ${description} </p>
          </div>
          <div class="movie-rating">${rating}</div>
      </div>
    </div> 
    `;
  };

  async function imageExtractor(imageCardList) {
    let num = 0;
    // fetch the films table
    const response = await fetch('../api/top100');
    // extract the json data
    const top100moviesArray = await response.json();
    console.log(top100moviesArray);
    // for each movie {film_title, imdb_rating}
    // extract the movie title and rating from top100
    await Promise.all(top100moviesArray.map(async (movieData) => {
      console.log(movieData.film_title);
      const movieTitle = encodeURIComponent(movieData.film_title.trim());
      const movieRating = movieData.imdb_rating;
      // theoretically using kamran's movieImage route
      const tmdbResponse = await fetch(`../api/movieImages/${movieTitle}`, {method: 'POST'}); // ask kamran about this
      const tmdbMovieArray = await tmdbResponse.json();
      const backDropPath = tmdbMovieArray[0].backdrop_path;
      const description = tmdbMovieArray[0].overview;

      // using the path found from the movieTitle, directly search for the image
      const imageResponse = await fetch(`${apiImageLink}${backDropPath}`);
      const image = await imageResponse.blob();
      const imageSource = URL.createObjectURL(image);
      const imageAlt = `${movieData.film_title} image.`;

      makeMovieImageCard(movieDate.film_title, description,
        movieRating, (num += 1), imageSource, imageAlt);
    }));
    return top100moviesArray;
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
