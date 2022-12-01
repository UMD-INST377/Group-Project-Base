// 79286f9b48msh455d85ddc2d4316p18f1ccjsnabaae7ed74b1
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '79286f9b48msh455d85ddc2d4316p18f1ccjsnabaae7ed74b1',
    'X-RapidAPI-Host': 'genius.p.rapidapi.com'
  }
};

async function getData() {
  const url = 'https://genius.p.rapidapi.com/artists/16775/songs';
  const data = await fetch(url, options);
  const json = await data.json();
  return json;
}
async function mainEvent() {
  console.log('Script loaded');
  const data = await getData();
  console.log('Data recived', data);
}
document.addEventListener('DOMContentLoaded', async () => mainEvent());
