const burgerIcon = document.getElementById('burger');

function toggleBurgerMenu(burger) {
  const dropMenu = document.getElementById('navbarBasicExample');
  burger.classList.toggle('is-active');
  dropMenu.classList.toggle('is-active');
}

burgerIcon.addEventListener('click', () => {
  toggleBurgerMenu(burgerIcon);
});

const coll = document.querySelectorAll('.collapsible');
let i;

for (i = 0; i < coll.length; i += 1) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = `${content.scrollHeight} px`;
    }
  });
}