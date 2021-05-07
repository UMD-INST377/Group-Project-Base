/* eslint-disable quotes */
/* eslint-disable camelcase */
/* eslint-disable no-console */
async function dataHandler() {
  // getting data from the api
  const request = await fetch('/api/movies');
  const movie_data = await request.json();
  const { data } = movie_data;
  const table = document.querySelector('.table');

  console.log(data);

  data.forEach((movie) => {
    console.log(movie.movie_id);
    console.log(movie.Title);
    const appendItem = document.createElement('tr');
    appendItem.innerHTML = `<td>${movie.movie_id}</td><td>${movie.Title}</td>`;
    table.append(appendItem);
  });
}

async function getMovieNames() {
  const movieRequest = await fetch("/api/movies");
  const movieData = await movieRequest.json();
  return movieData;
}

async function windowActions() {
  await dataHandler();
  await getMovieNames();
}

window.onload = windowActions;