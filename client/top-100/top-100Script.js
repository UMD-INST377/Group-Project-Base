document.addEventListener('DOMContentLoaded', () => {
  const top100List = document.querySelector('.top-100-movie-list');

  const apiKey = 'fd78e1d1d80dd5c9a8cc46852b23aefc';
  const apiImageLink = 'https://image.tmdb.org/t/p/w500';
  
  // This will create the cards with the images attached
  const makeMovieImageCard = (title, description, rating, num) => {
    top100List.innerHTML += `
    <div class="movie-container">
      <div class="circle"> <div id='circleNum'>${num}</div></div>
      <div class="movie-card"> 
          <div class ="movie">
              <img src='./images/avengersInfinity.jpg' alt='Avengers Infinity War Image'>
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
    // fetch the films table
    const response = await fetch('../api/top100');
    // extract the json data
    const top100movies = await response.json();
    console.log(top100movies);
  }

  imageExtractor(top100List);
});