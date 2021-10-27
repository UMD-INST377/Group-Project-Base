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

const result = document.querySelector('.results');
const submit = document.querySelector('.submit');
submit.addEventListener('click', () => {
  console.log('hi');
  let currenthtml = result.innerHTML;
  currenthtml += '<div class="poster"><img src ="https://xl.movieposterdb.com/12_04/2012/948470/xl_948470_406a814a.jpg"></div>';
  result.innerHTML = currenthtml;
});