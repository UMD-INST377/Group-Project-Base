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

  const filmSender = await fetch('../api/films', {
    method: 'post',
    body: JSON.stringify({film_title: movieInput, release_date: dateInput, genre: genreInput}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
  alert(`Thank You, ${nameInput}, for your Submission. We added your Movie to the Database.`);
}
submitInput.addEventListener('click', (event) => {
  event.preventDefault();
  formSender();
  document.getElementById('form').reset();
});
