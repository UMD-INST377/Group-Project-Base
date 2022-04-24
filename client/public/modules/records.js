/* eslint-disable import/prefer-default-export */
async function loadRecords() {
  const table = document.querySelector('#table-content');
  const results = await fetch('/api/table/data');
  const items = await results.json();

  items.forEach((item) => {
    table.innerHTML += `
      <tr>
        <td>${item.movie_id}</td>
        <td>${item.title}</td>
        <td>${item.year}</td>
        <td>${item.genre}</td>
        <td>${item.lang}</td>
        <td>${item.rating}</td>
        <td><a href="${item.image_url}" target="_blank">IMG</a></td>
        <td>${item.is_on_netflix}</td>
        <td>${item.is_on_hulu}</td>
        <td>${item.is_on_prime}</td>
        <td>${item.is_on_disney}</td>
        <td><a href="#edit-modal" class="modal-trigger edit-trigger"><i class="material-icons" id="${item.movie_id}">edit</i></a></td>
        <td><a href="#delete" class="modal-trigger delete-trigger"><i class="material-icons" name="${item.title}" id="${item.movie_id}">delete</i></a></td>
      </tr>`;
  });

  // initialize modals
  M.Modal.init(document.querySelectorAll('.modal'), {
    dismissible: false,
    startingTop: '10%',
    opacity: '.3'
  });

  // deletion handling
  const deleteTriggers = document.querySelectorAll('.delete-trigger');
  const deleteBtn = document.querySelector('#confirm-delete');

  deleteTriggers.forEach((item) => {
    item.addEventListener('click', (e) => {
      const title = e.target.getAttribute('name');
      document.querySelector('#delete-title').innerHTML = title;
      deleteBtn.name = e.target.getAttribute('id');
    });
  });

  deleteBtn.addEventListener('click', async () => {
    await fetch(`/api/movies/${deleteBtn.name}`, {
      method: 'DELETE'
    });
    location.reload();
  });

  // edit handling
  const editTriggers = document.querySelectorAll('.edit-trigger');
  const saveBtn = document.querySelector('#save-button');
  const editModal = document.querySelector('#edit');
  let movieID;
  const dict = {
    title: null,
    year: null,
    language_id: null,
    rating_id: null,
    genre_id: null,
    image_url: null,
    netflix: null,
    hulu: null,
    prime: null,
    disney: null
  };

  editTriggers.forEach((item) => {
    item.addEventListener('click', async (e) => {
      movieID = e.target.getAttribute('id');
      await populateGenres(window.location.pathname);
      await populateLanguages();
      await populateRatings();
      M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
      M.FormSelect.init(document.querySelectorAll('select'));





      editModal.innerHTML = `
      <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col l6">
            <input id="title" type="text" name="title" required="required"/>
            <label>Title</label>
          </div>
          <div class="input-field col l6">
            <input id="year" type="text" name="year" required="required"/>
            <label>Release Year</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col l6">
            <select id="language-input" name="language_id" required="required"></select>
            <label>Language</label>
          </div>
          <div class="input-field col l6">
            <select id="rating-input" name="rating_id" required="required"></select>
            <label>Rating</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col l6">
            <select id="genre-input" name="genre_id" required="required"></select>
            <label>Genre</label>
          </div>
          <div class="input-field col l6">
            <input id="imageURL" type="text" name="image_url" required="required"/>
            <label>Image URL</label>
          </div>
          <div class="input-field col">
            Availability
            <form action="#">
              <p>
                <label>
                  <input type="checkbox" id="netflix"/>
                  <span>Netflix</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" id="hulu"/>
                  <span>Hulu</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" id="prime"/>
                  <span>Prime</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" id="disney"/>
                  <span>Disney</span>
                </label>
              </p>
            </form>
          </div>
      </form>
    </div>
      <a class="waves-effect waves-light btn-large" id="save-button">Save</a>
      `;
    });
  });

  saveBtn.addEventListener('click', async (submitEvent) => {
    submitEvent.preventDefault();

    Object.keys(dict).forEach((key) => {
      try {
        dict[key] = document.querySelector(`input[name="${key}]"`).value;
      } catch {
        try {
          dict[key] = document.getElementsByName(key)[0].value;
        } catch {
          dict[key] = document.querySelector(`#${key}`).checked ? 1 : 0;
        }
      }
      // console.log(key, dict[key]);
    });

    const availabilityResults = await fetch('/api/custom', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `SELECT availability_id FROM availability WHERE 
                    is_on_netflix = ${dict.netflix} AND
                    is_on_hulu = ${dict.hulu} AND
                    is_on_prime = ${dict.prime} AND
                    is_on_disney = ${dict.disney}`
      })
    });

    const JSONavailability = await availabilityResults.json();

    await fetch('/api/images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ image_url: dict.image_url })
    });

    const images = await fetch('/api/images');
    const JSONimages = await images.json();

    await fetch('/api/movies', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: dict.title,
        year: dict.year,
        language_id: dict.language_id,
        availability_id: JSONavailability[0].availability_id,
        rating_id: dict.rating_id,
        genre_id: dict.genre_id,
        image_id: JSONimages.data.length
      })
    });
    window.location = '/records.html';
  });
}

export { loadRecords };