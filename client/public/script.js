const navSlide = () => {
  const burger = document.querySelector('.burger');
  const search = document.querySelector('.searchbar');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    if (search != undefined) search.classList.toggle('hide');
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s`;
      }
    });
  });
};
navSlide();
let page = 0;
async function displayMovieLogs(json) {
  if (page < 0) page = 0
  if (page > json.length/20) page = json.length/20
  const slice = json.data.slice(20 * page, 20 * (page + 1));
  const result = document.querySelector('.results');
  slice.forEach((movie) => {
    result.innerHTML += `<li class="filmblock">
    ${movie.name}
    </br>${movie.year}
    </br>${movie.score}
    </li>`;
  });
  console.log('display', slice);
}

async function logMovies() {
  const request = '/api/movies';
  const data = await fetch(request, {
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'}
  });
  const json = await data.json();
  console.log(json);
  await displayMovieLogs(json);
}
async function moviesReq() {
  const jsonReq = document.querySelector('.jsonreq');
  jsonReq.addEventListener('click', logMovies);
}
window.onload = moviesReq;
const result = document.querySelector('.results');
const submit = document.querySelector('.submit');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
next.addEventListener('click', () => {
  page++;
  result.innerHTML = '';
  logMovies();
});

prev.addEventListener('click', () => {
  page--;
  result.innerHTML = '';
  logMovies();
});
submit.addEventListener('click', () => {
  console.log('hi');
  let currenthtml = result.innerHTML;
  currenthtml += '<div class="poster"><img src ="https://xl.movieposterdb.com/12_04/2012/948470/xl_948470_406a814a.jpg"></div>';
  result.innerHTML = currenthtml;
});