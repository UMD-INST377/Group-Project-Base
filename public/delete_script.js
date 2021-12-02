/* Group24 */
/* Jacob Walter Lab 11 */

async function presDelete() {
  const inputField = document.querySelector('#president_id_delete');
  const url = `/api/presidents/${inputField.value}`;
  let response = await fetch(url, {
    method: 'DELETE',
  });
}

document.getElementById('delete_button').addEventListener('click', (event) => {
  event.preventDefault()
  var txt;
  var r = confirm("Would you like to delete this president?\nEither OK or Cancel.");
  if (r == true) {
    txt = "President Deleted";
    presDelete()
    confirm("President has been deleted");
  } else {
    txt = "Deletion Cancelled";
    confirm("Deletion Cancelled");
  }
});