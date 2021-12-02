/* Group24 */
/* Jacob Walter Lab 11 */

async function presDelete() {
  const inputField = document.querySelector('#president_id_delete');
  const url = `/api/presidents/${inputField.value}`;
  let response = await fetch(url, {
    method: 'DELETE',
  });
}
<<<<<<< HEAD

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
=======
document.getElementById('delete_button').addEventListener('click', (event) => {
  event.preventDefault()
  presDelete()
});

// pop-up message delete on click
document.addEventListener('DOMContentLoaded', () => {
  (document.querySelectorAll('.message-header .delete') || []).forEach(($delete) => {
    const $notification = $delete.parentNode;

    $delete.addEventListener('click', () => {
      $notification.parentNode.removeChild($notification);
    });
  });
});

// pop-up message delete on click
document.addEventListener('DOMContentLoaded', () => {
  (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
    const $notification = $delete.parentNode;

    $delete.addEventListener('click', () => {
      $notification.parentNode.removeChild($notification);
    });
  });
>>>>>>> 7351bad620b69b67888514eb4c13d467487cb297
});