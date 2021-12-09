const burger = document.querySelector('.burger');
const navlinks = document.querySelector('#navlinks')

burger.addEventListener('click', () => {
  navlinks.classList.toggle('is-active');
}) 