const burgerIcon = document.getElementById('burger');

function toggleBurgerMenu(burger) {
  const dropMenu = document.getElementById('navbarBasicExample');
  burger.classList.toggle('is-active');
  dropMenu.classList.toggle('is-active');
}

burgerIcon.addEventListener('click', () => {
  toggleBurgerMenu(burgerIcon);
});

const submitInput = document.getElementById('submit-button');
async function formSender() {
  const nameInput = document.getElementById('name-input').value;
  const emailInput = document.getElementById('email-input').value;
  const movieInput = document.getElementById('movie-input').value;
  const directorInput = document.getElementById('director-input').value;
  const actorInput = document.getElementById('actor-input').value;
  const genreInput = document.getElementById('genre-input').value;
  const ratingInput = document.getElementById('rating-input').value;
  const dateInput = document.getElementById('date-input').value;

  await fetch('../api/directors', {
    method: 'POST',
    body: JSON.stringify({
      director_name: directorInput
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });

  await fetch('../api/actors', {
    method: 'POST',
    body: JSON.stringify({
      actor_name: actorInput
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });

  await fetch('../api/films', {
    method: 'POST',
    body: JSON.stringify({
      film_title: movieInput,
      release_date: dateInput,
      genre: genreInput,
      rating: ratingInput
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });

  await fetch('../api/actors_linking', {
    method: 'POST',
    body: JSON.stringify({
      actor_name: actorInput,
      film_title: movieInput
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
}

submitInput.addEventListener('click', (event) => {
  event.preventDefault();
  formSender();
  document.getElementById('form').reset();
});
