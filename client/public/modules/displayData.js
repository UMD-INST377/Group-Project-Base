function displayMovie(container, item) {
  const movies = container;
  let availability = '';
  let rating = '';
  if (item.rating !== null) {
    rating = `<span class="rating">${item.rating}</span>  · `;
  }

  const platforms = {
    Netflix: item.is_on_netflix,
    Hulu: item.is_on_hulu,
    Prime: item.is_on_prime,
    Disney: item.is_on_disney,
  };

  Object.keys(platforms).forEach((platform) => {
    if (platforms[platform] === 1) {
      availability += `<data value="${platform}">${platform}</data>`;
    }
  });
//  col s6 l4
  movies.innerHTML += `<div class="movie">
      <div class="col-content">
        <img loading="lazy" src="${item.image_url}">
        <div class="movie-details">
          <span class="title">${item.title}</span>
          <div class="details">
            <span class="genre">${item.genre}</span>  ·  
            <span class="year">${item.year}</span>  ·  
            ${rating} 
            <span class="lang">${item.lang}</span></br>
            <span class="platform-details">${availability}</span>
          </div> 
        </div> 
      </div> 
      </div>`;
}

function displayResults(items) {
  const movies = document.querySelector('#movies');
  movies.innerHTML = '';
  items.forEach((item) => {
    displayMovie(movies, item);
  });
}

export { displayMovie, displayResults };