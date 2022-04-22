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
    opacity: '.3',
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
      method: 'DELETE',
    });
    location.reload();
  });
}

export { loadRecords };