const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0e06a17926msh338e516eca5534bp1efaadjsnb8d059881c35',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    return response;
  })
  .catch((err) => console.error(err));

d3.selectAll('p').style('color', () => `hsl(${Math.random() * 360},100%,50%)`);
/* Cuurent Date and Time */
function date_time() {
  const datetimeDisplay = document.getElementById('date-time');
  const datetimeString = new Date().toLocaleString();
  const formatString = datetimeString.replace(', ', ' - ');
  datetimeDisplay.textContent = formatString;
}
setInterval(date_time, 100);


// D3.js
// import * as d3 from 'd3';

// d3.selectAll('p').style('color', () => `hsl(${Math.random() * 360},100%,50%)`);
