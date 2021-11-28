async function presAdd() {
  const url = '/api/presidents';
  const data = {
    president_id: document.querySelector('#president_id_add').value,
    first_name: document.querySelector('#first_name_add').value,
    last_name: document.querySelector('#last_name_add').value,
    date_inaurg: document.querySelector('#date_inaurg_add').value,
    age_inaurg: document.querySelector('#age_inaurg_add').value,
    terms_served: document.querySelector('#terms_served_add').value,
    birth_date: document.querySelector('#birth_date_add').value,
    death_date: document.querySelector('#death_date_add').value,
    home_state: document.querySelector('#home_state_add').value,
    // president_image: document.querySelector('#president_image_add').value,
    party: document.querySelector('#party_add').value
  };
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
}

document.getElementById('add_button').addEventListener('click', (event) => {
  event.preventDefault();
  presAdd();
});

async function presEdit() {
  const inputField = document.querySelector('#president_id_edit');
  const url = `/api/presidents/${inputField.value}`;
  const data = {
    first_name: document.querySelector('#first_name_edit').value,
    last_name: document.querySelector('#last_name_edit').value,
    date_inaurg: document.querySelector('#date_inaurg_edit').value,
    age_inaurg: document.querySelector('#age_inaurg_edit').value,
    terms_served: document.querySelector('#terms_served_edit').value,
    birth_date: document.querySelector('#birth_date_edit').value,
    death_date: document.querySelector('#death_date_edit').value,
    home_state: document.querySelector('#home_state_edit').value,
    // president_image: document.querySelector('#president_image_edit').value,
    party: document.querySelector('#party_edit').value
  };
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
}

document.getElementById('edit_button').addEventListener('click', (event) => {
  event.preventDefault();
  presEdit();
});