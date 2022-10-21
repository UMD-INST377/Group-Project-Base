

const film1 = "Nightclawer";
const film2 = "Zodiac";
const firstCall = "https://imdb-api.com/en/API/Search/"+ "x/"+ film1;



    
async function getFilmTitle(name){
  let response = await fetch(name)
  return response.json();
}

getFilmTitle(firstCall)
.then(jsonData => console.log(JSON.parse(jsonData).expression));



