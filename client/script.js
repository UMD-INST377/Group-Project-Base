const burgerIcon = document.getElementById('burger');

function toggleBurgerMenu(burger) {
  const dropMenu = document.getElementById('navbarBasicExample');
  burger.classList.toggle('is-active');
  dropMenu.classList.toggle('is-active');
}

burgerIcon.addEventListener('click', () => {
  toggleBurgerMenu(burgerIcon);
});

document.addEventListener('DOMContentLoaded', () => {
  const movie = document.querySelector('.content');

  function movieInfo(row, imageRow, actorRow) {
    const imdb = row.imdb_rating;
    return `<div class="card-content">
              <h2 class="has-text-centered">${row.film_title}</h2>
              <h3 class="has-text-centered is-size-6">Genre: ${row.genre}</h3>
              <p class="has-text-centered is-size-6"> 
                Director: ${row.director_name}</br> 
                Rating (IMDB): ${imdb}</br>
                Release Data: ${row.release_date}</br>
                Staring: ${actorRow[0].actors}</br></br>
                ${imageRow[0].overview}</br>
              <p>
            </div>
            `;
  }

  async function imageInput(container) {
    const response = await fetch('./api/films');
    const movies = await response.json();
    const topMovies = movies.splice(2, 6);
    await Promise.all(topMovies.map(async (movieRow) => {
      const actorResponse = await fetch('./api/customMap', {
        method: 'POST',
        body: JSON.stringify({film_title: movieRow.film_title}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });
      const actors = await actorResponse.json();
      const scene = document.createElement('div');
      scene.classList.add('scene');
      const divImgField = document.createElement('div');
      divImgField.classList.add('flip-card');
      const imgField = document.createElement('img');
      const movieVal = encodeURIComponent(movieRow.film_title.trim());
      const results = await fetch(`./api/movieImages/${movieVal}`, {method: 'POST'});
      const movieResults = await results.json();
      const posterPath = movieResults[0].poster_path;
      const imageRequest = await fetch(`https://image.tmdb.org/t/p/w342/${posterPath}`);
      const img = await imageRequest.blob();
      imgField.src = URL.createObjectURL(img);
      imgField.alt = `Poster Image of ${movieRow.film_title}`;
      const divFront = document.createElement('div');
      divFront.classList.add('flip-card-face', 'flip-card-front');
      const divBack = document.createElement('div');
      divBack.classList.add('flip-card-face', 'flip-card-back');
      divBack.innerHTML = movieInfo(movieRow, movieResults, actors);
      divFront.appendChild(imgField);
      divImgField.appendChild(divFront);
      divImgField.appendChild(divBack);
      scene.appendChild(divImgField);
      container.appendChild(scene);
    }));
    return topMovies;
  }
  imageInput(movie);
});

async function chartDisplay() {
  const response = await fetch('./api/films');
  const movies = await response.json();
  const topMovies = movies.splice(153, 8);
  const movieLst = topMovies.map((item) => ({
    y: item.imdb_rating,
    label: item.film_title
  }));
  const chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    theme: 'dark1', // "light1", "light2", "dark1", "dark2"
    title: {
      text: 'Rising Films!'
    },
    axisY: {
      title: 'Rating (Out of 10)'
    },

    axisX: {
      labelAutoFit: true,
      title: 'Movie Name'
    },
    data: [{
      type: 'column',
      dataPoints: movieLst
    }]
  });
  chart.render();
}

async function pieChartDisplay() {
  const response = await fetch('./api/customMap');
  const movies = await response.json();
  const movieLst = movies.map((item) => ({
    y: item['Number of Awards'],
    label: item.film_title
  }));
  const chart = new CanvasJS.Chart('pieChartContainer', {
    animationEnabled: true,
    theme: 'dark1',
    title: {
      text: 'Number of Awards Won By Trending Movies'
    },
    data: [{
      type: 'pie',
      startAngle: 240,
      yValueFormatString: '##0""',
      indexLabel: '{label} {y}',
      dataPoints: movieLst
    }]
  });
  chart.render();
}

// Display and Hide Bar Graph
const closeBar = document.getElementById('hide-bar');
const barGraph = document.getElementById('chartContainer');
const barIcon = document.getElementById('bar-graph-icon');

closeBar.addEventListener('click', () => {
  barGraph.classList.add('is-hidden');
  closeBar.classList.add('is-hidden');
  barIcon.classList.remove('is-hidden');
});

barIcon.addEventListener('click', () => {
  barGraph.classList.remove('is-hidden');
  closeBar.classList.remove('is-hidden');
  chartDisplay();
  barIcon.classList.add('is-hidden');
});

// Display or Hide Pie Chart
const closePie = document.getElementById('hide-pie');
const pieGraph = document.getElementById('pieChartContainer');
const pieIcon = document.getElementById('pie-graph-icon');

closePie.addEventListener('click', () => {
  pieGraph.classList.add('is-hidden');
  closePie.classList.add('is-hidden');
  pieIcon.classList.remove('is-hidden');
});

pieIcon.addEventListener('click', () => {
  pieGraph.classList.remove('is-hidden');
  closePie.classList.remove('is-hidden');
  pieChartDisplay();
  pieIcon.classList.add('is-hidden');
});
