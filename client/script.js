// async function getData() {
//   const url = 'https://movie-database-alternative.p.rapidapi.com/';
//   const data = await fetch(url);
//   const json = await data.json();
//   /* const reply = json.filter((item) => Boolean(item.geocoded_column_1)).filter((item) => Boolean(item.name)); */
//   return reply;
// }

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '79286f9b48msh455d85ddc2d4316p18f1ccjsnabaae7ed74b1',
    'X-RapidAPI-Host': 'genius.p.rapidapi.com'
  }
};

fetch('https://genius.p.rapidapi.com/artists/16775/songs', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));