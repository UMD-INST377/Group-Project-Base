// delete film
const film_delete = document.querySelector('#delete_submit');
const value = document.querySelector('#title_id');
const form = document.querySelector('#delete_title');

async function field_delete() {
  const request = `/api/delete_title/${parseInt(value.value)}`;
  const response = await fetch(request, {method: 'delete'});
  console.log(response);
  console.log(value.value);
  if (response.status === 200) {
    alert(`title_id${value.value} deleted`);
  } else {
    alert('Not found');
  }
}

film_delete.addEventListener('click', field_delete);
