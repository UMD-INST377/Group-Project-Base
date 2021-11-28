const burgerIcon = document.getElementById('burger');

function toggleBurgerMenu(burger) {
  const dropMenu = document.getElementById('navbarBasicExample');
  burger.classList.toggle('is-active');
  dropMenu.classList.toggle('is-active');
}

burgerIcon.addEventListener('click', () => {
  toggleBurgerMenu(burgerIcon);
});

const coll = Array.from(document.querySelectorAll('.collapsible'));

coll.map((item) => item.addEventListener('click', (event) => {
  event.target.classList.toggle('active');
  const opening = document.getElementById(`${event.target.id}Open`);
  const closing = document.getElementById(`${event.target.id}Close`);
  const content = event.target.nextElementSibling;
  if (content.style.display === 'block') {
    content.style.display = 'none';
    closing.classList.add('is-hidden');
    opening.classList.remove('is-hidden');
  } else {
    content.style.display = 'block';
    opening.classList.add('is-hidden');
    closing.classList.remove('is-hidden');
  }
}));
