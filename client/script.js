/* Script for Customize Database Form */
/* Iteration #3 */

// To create list of songs
const songsList = document.querySelector('.songs-list');

// Edit button
const submitButton = document.querySelector('.btn');

// Add song form
const addSongForm = document.querySelector('.add-song-form');

// values for different form inputs
const titleValue = document.getElementById('title-value');
const albumValue = document.getElementById('album-value');
const firstNameValue = document.getElementById('first-name-value');
const lastNameValue = document.getElementById('last-name-value');
const ratingValue = document.getElementById('rating-value');

let output = '';

const url = '/api/songs_project';

async function windowActions() {
  // Retrieve songs
  // Method: GET
  const res = await fetch(url);
  const data = await res.json();
  data.forEach((song) => {
    // For each song, create a card.
    output += `
    <div class="card mt-4 col-md-4 bg-light">
    <div class="card-body" data-id=${song.song_id}>
    <h5 class="card-title"># ${song.song_id}</h5>
    <h6 class="card-subtitle mb-2 text-italic">"<span class="card-subtitle-song">${song.song_name}</span>" by <span class="card-subtitle-first">${song.first_name}</span> <span class="card-subtitle-last">${song.last_name}</span></h6>
    <h6 class="card-subtitle-2 mb-2 text-muted"><span class="card-subtitle-album">${song.album_name}</span></h6>
    <h6 class="card-subtitle-3 mb-2 text-italic"><span class="card-subtitle-rating">${song.ratings}</span> 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" stroke="black" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg> rating
    </h6>
    <a href="#" class="card-link" id="edit-song">Edit</a>
    <a href="#" class="card-link" id="delete-song">Delete</a>
  </div>
</div>`;
  });
  songsList.innerHTML = output;
}

window.onload = windowActions;

// Enable click function to ID.
songsList.addEventListener('click', (e) => {
  e.preventDefault();
  // debugging
  // console.log(e.target.id);
  const delButtonClicked = e.target.id === 'delete-song';
  const editButtonClicked = e.target.id === 'edit-song';

  // debugging - testing that song ID is accessed by click of Delete button
  // console.log(e.target.parentElement.dataset.id);
  const songID = e.target.parentElement.dataset.id;

  // Delete - Delete an existing song
  // Method: DELETE
  if (delButtonClicked) {
    // console.log('remove post');
    fetch(`${url}/${songID}`, {
      method: 'DELETE'
    })
      .then((res) => res.text())
      .then(() => window.location.reload());
  }

  // Edit - Edit an existing song
  // Method: PUT
  if (editButtonClicked) {
    const parent = e.target.parentElement;
    const titleContent = parent.querySelector('.card-subtitle-song').textContent;
    const firstContent = parent.querySelector('.card-subtitle-first').textContent;
    const lastContent = parent.querySelector('.card-subtitle-last').textContent;
    const albumContent = parent.querySelector('.card-subtitle-album').textContent;
    const ratingContent = parent.querySelector('.card-subtitle-rating').textContent;

    // debuggging
    // console.log(titleContent)
    // console.log(firstContent)
    // console.log(lastContent)
    // console.log(albumContent)
    // console.log(ratingContent)

    titleValue.value = titleContent;
    albumValue.value = albumContent;
    firstNameValue.value = firstContent;
    lastNameValue.value = lastContent;
    ratingValue.value = ratingContent;
  }

  // Implementing FETCH for above.
  submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    // debugging
    // console.log('post updated')
    fetch(`${url}/${songID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        song_name: titleValue.value,
        album_name: albumValue.value,
        first_name: firstNameValue.value,
        last_Name: lastNameValue.value,
        ratings: ratingValue.value
      })
    })
      .then((res) => res.text())
      .then(() => location.reload());
  });
});

// Create - Insert new song
// Method: POST
addSongForm.addEventListener('submit', () => {
  // debugging
  // console.log(titleValue.value);
  // more debugging
  // console.log('Form submitted');

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      // song_id: currentId,
      song_name: titleValue.value,
      album_name: albumValue.value,
      first_name: firstNameValue.value,
      last_Name: lastNameValue.value,
      ratings: ratingValue.value
    })
  })
    .then((res) => res.json())
    .then((data) => {
      const dataArr = [];
      dataArr.push(data);
      windowActions(dataArr);
    });

  // Reset the form after submission.
  titleValue.value = '';
  albumValue.value = '';
  firstNameValue.value = '';
  lastNameValue.value = '';
  ratingValue.value = '';
});

/* References:
This YouTube tutorial was particulary useful:
Javascript Fetch API with CRUD Operations: https://www.youtube.com/watch?v=ccX3ApO4qz8.
Ended up needing to make some modification for styling in the cards,
like wrapping each string literal in its own div class, using const intead of let,
and wrapping our functions in async like we learned in lecture.
*/