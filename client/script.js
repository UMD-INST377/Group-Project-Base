function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

async function getData() {
  const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '11fb2e648emshff0f511bd987be4p197887jsne25c60c996d9',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };
  const request = await fetch(url, options);
  const json = await request.json();
  return json;
}

async function mainEvent() {
  data = await getData();
  console.log(data);
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());