async function presDelete() {
  const inputField = document.querySelector('#president_id_delete');
  const url = `/api/presidents/${inputField.value}`;
  let response = await fetch(url, {
    method: 'DELETE',
  });
}

document.getElementById('delete_button').addEventListener('click', (event) => {
  event.preventDefault()
  presDelete()
});