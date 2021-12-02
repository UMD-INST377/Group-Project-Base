<<<<<<< HEAD
/* const updatePresident = document.querySelector('#update_button');
updatePresident.addEventListener('click', function_name_here);

const addPresident = document.querySelector('#update_button');
addPresident.addEventListener('click', function_name_here); */

// const deletePresident = document.getElementById('#delete_button');
// const uri = 'api'

// deletePresident.addEventListener('click', (event) => {
//   event.preventDefault()
// })

// function deleteItem(req, res) {
//     fetch(`${uri}/${president_id}`, {
//       method: 'DELETE'
//     })
//     .then(() => getItems())
//     .catch(error => console.error('Unable to delete item.', error));
//   }

// deletePresident.addEventListener('click', deleteItem);
  

/* async function delPres() {
  const deleteForm = document.querySelector('#delete_button');
  const data = {
    president_id: deletePresident.elements['president_id']
  };
  const url = `/api/presidents/${deletePresident.value}`;
  fetch(url => {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
       "Content-type": "application/json; charset=UTF-8"
    },
  )
}
*/

async function presDelete() {
  const inputField = document.querySelector('#president_id_delete');
  const url = `/api/presidents/${inputField.value}`;
  // const request = await fetch(url, {
  //   method: 'delete',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  console.log(url)
  console.log(inputField)
  //});
}

=======
async function presDelete() {
  const inputField = document.querySelector('#president_id_delete');
  const url = `/api/presidents/${inputField.value}`;
  let response = await fetch(url, {
    method: 'DELETE',
  });
}
>>>>>>> 0f0ad2349b801e800e4c3ecc5bb5cfd3b9e31ea7
document.getElementById('delete_button').addEventListener('click', (event) => {
  event.preventDefault()
  presDelete()
});

<<<<<<< HEAD
// async function presDelete() {
//   const inputField = document.querySelector('#delete_button');
//   const data = {
//         president_id: inputField.president_id
//       }
//   try {
//       let response = await fetch(`/api/presidents/${inputField.value.president_id}`, {
//           method: 'DELETE',
//           headers: {
//                   'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(data)
//       });
//   } catch (err) {
//   }
// }


/* let data = {"president_id": ,
"first_name": createForm.elements['first_name'],
"last_name":  createForm.elements['last_name'],
"date_inaurg": createForm.elements['date_inaurg'],
"age_inaurg": createForm.elements['age_inaurg'],
"terms_served": createForm.elements['terms_served'],
"birth_date": createForm.elements['birth_date'],
"death_date": createForm.elements['death_date'],
"home_state": createForm.elements['home_state'],
"president_image": createForm.elements['president_image'],
"party": createForm.elements['party']
};
 */
=======
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
});
>>>>>>> 0f0ad2349b801e800e4c3ecc5bb5cfd3b9e31ea7
