// this function can get any data, regardless of the endpoint
async function getData(api) {
  console.log('data request');
  const request = await fetch(api);
  const results = await request.json();
  console.log(results);
  return results.data;
}

// this function can process any data, regardless of the endpoint
// it will search the database for
function processData(data) {
  console.log('processing data');
  const table = document.querySelector('#table'); // make this in html
  const search = document.querySelector('#search'); // document is html page
}

// this function will display all matches. maybe combine with processData()
// function displayMatches(event){

// }

// this function will run when the window loads
async function windowActions() {
  console.log('window loaded');

  const media = await getData('/api/media');
  const creators = await getData('/api/creators');
  const backgrounds = await getData('/api/backgrounds');
  const genres = await getData('/api/genres');
  const roles = await getData('/api/roles');
  const themes = await getData('/api/themes');
  processData(media);
}

window.onload = windowActions;

//add on-click for search button to get results