/* eslint-disable no-console */
/* eslint-disable camelcase */
async function dataHandler() {
  // getting data from the api
  const request = await fetch('/api/mydb');
  const api_data = await request.json();
  const { data } = api_data;
  const table = document.querySelector('.table');

  console.log(data);

  data.forEach((element) => {
    console.log(element.movie_name);
    console.log(element.movie_id);
    console.log(element.movie_genre);
    const appendItem = document.createElement('tr');
    appendItem.innerHTML = `<td>${element.hall_id}</td><td>${element.hall_name}</td><td>${element.hall_address}</td>`;
    table.append(appendItem);
  });
}

async function windowActions() {
  await dataHandler();
  await macrosData();
}

window.onload = windowActions;
