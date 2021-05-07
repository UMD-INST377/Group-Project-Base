const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', (event) => {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});