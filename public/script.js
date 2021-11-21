/* const updatePresident = document.querySelector('#update_button');
updatePresident.addEventListener('click', function_name_here);

const addPresident = document.querySelector('#update_button');
addPresident.addEventListener('click', function_name_here); */

const deletePresident = document.querySelector('#delete_button');
const uri = 'api'

function deleteItem(req, res) {
    fetch(`${uri}/${president_id}`, {
      method: 'DELETE'
    })
    .then(() => getItems())
    .catch(error => console.error('Unable to delete item.', error));
  }

deletePresident.addEventListener('click', deleteItem);
  

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


/* async function presDelete() {
  const inputField = document.querySelector('#delete_button');
  const url = `/api/presidents/${inputField.value}`;
  const data = {
    president_id: inputField.president_id
  };
  const request = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}

document.getElementById('delete').addEventListener('click', (event) => {
  event.preventDefault();
  presDelete();
});

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
