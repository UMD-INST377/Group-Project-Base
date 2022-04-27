document.addEventListener('DOMContentLoaded', async () => {
  M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
  const table = document.querySelector('#table-content');
  const results = await fetch('/api/table/data');
  const items = await results.json();
  document.querySelector('.records').style.setProperty('opacity', '1');
  items.forEach((item) => {
    table.innerHTML += `
      <tr>
        <td>${item.movie_id}</td>
        <td>${item.title}</td>
        <td>${item.year}</td>
        <td>${item.genre}</td>
        <td>${item.lang}</td>
        <td>${item.rating}</td>
        <td><a title="Open in new tab" href="${item.image_url}" target="_blank">IMG</a></td>
        <td>${item.is_on_netflix}</td>
        <td>${item.is_on_hulu}</td>
        <td>${item.is_on_prime}</td>
        <td>${item.is_on_disney}</td>
        <td><a title="Edit" href="#edit" class="modal-trigger edit-trigger"><i class="material-icons" id="${item.movie_id}">edit</i></a></td>
        <td><a title="Delete" href="#delete" class="modal-trigger delete-trigger"><i class="material-icons" name="${item.title}" id="${item.movie_id}">delete</i></a></td>
      </tr>`;
  });

  if (window.location.search.split('?')[1] !== undefined) {
    window.scrollTo(0, document.body.scrollHeight);
  }

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
  editTriggers.forEach(async (item) => {
    item.addEventListener('click', async (e) => {
      const movieID = e.target.getAttribute('id');
      window.location = `/form.html?edit=${movieID}`;
    });
  });
});
