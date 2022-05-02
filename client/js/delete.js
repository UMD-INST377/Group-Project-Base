
const form_delete = document.querySelector('#delete_id');
const value = document.querySelector('#actor_id');
const form = document.querySelector('#delete_actor');

async function field_delete() {
  const request = `/api/delete_actors/${parseInt(value.value)}`;
  const response = await fetch(request, {method: 'delete'});
  console.log(response);
  console.log(value.value);
  if (response.status === 200) {
    alert(`actor_id${value.value} deleted`);
  } else {
    alert('Not found');
  }
}

form_delete.addEventListener('click', field_delete);
