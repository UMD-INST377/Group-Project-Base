async function presAdd() {
<<<<<<< HEAD
  const inputField = document.querySelector('#add_form');
  const url = `/api/presidents/${inputField.value}`;
  const data = {
    where: {
      president_id: president_id,
      first_name: first_name,
      last_name: last_name,
      date_inaurg: date_inaurg,
      age_inaurg: age_inaurg,
      terms_served: terms_served,
      birth_date: birth_date,
      death_date: death_date,
      home_state: home_state,
      //president_image: president_image,
      party: party
    }
  };
  const request = await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({add_form: inputField.value })
  });
}

document.getElementById('add_form').addEventListener('click', (event) => {
  event.preventDefault();
  presAdd();
});

async function presAdd() {
    const inputField = document.querySelector('#edit_form');
    const url = `/api/presidents/${inputField.value}`;
    const data = {
      where: {
        president_id: president_id,
        first_name: first_name,
        last_name: last_name,
        date_inaurg: date_inaurg,
        age_inaurg: age_inaurg,
        terms_served: terms_served,
        birth_date: birth_date,
        death_date: death_date,
        home_state: home_state,
        //president_image: president_image,
        party: party
      }
    };
    const request = await fetch(url, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({edit_form: inputField.value })
    });
  }
  
  document.getElementById('edit_form').addEventListener('click', (event) => {
    event.preventDefault();
    presAdd();
  });
=======
  const url = '/api/presidents';
  const data = {
    //president_id: document.querySelector('#president_id_add').value,
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
  let response = await fetch(url, {
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

async function AddFirstLady() {
  const url = '/api/firstlady';
  const data = {
    first_ladies_name: document.querySelector('#lady_name_add').value
  };
  let response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
}
document.getElementById('lady_button').addEventListener('click', (event) => {
  event.preventDefault();
  AddFirstLady();
});
async function AddVp() {
  const url = '/api/vicepresident';
  const data = {
    first_name: document.querySelector('#vp_first_name_add').value,
    last_name: document.querySelector('#vp_last_name_add').value
  };
  let response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
}
document.getElementById('vp_button').addEventListener('click', (event) => {
  event.preventDefault();
  AddVp();
});
async function AddChild() {
  const url = '/api/children';
  const data = {
    first_name: document.querySelector('#child_first_name_add').value,
    last_name: document.querySelector('#child_last_name_add').value
  };
  let response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
}
document.getElementById('child_button').addEventListener('click', (event) => {
  event.preventDefault();
  AddChild();
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
  let response = await fetch(url, {
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

async function editLady() {
  const inputField = document.querySelector('#edit_ladies_id');
  const url = `/api/firstlady/${inputField.value}`;
  const data = {
    first_ladies_name: document.querySelector('#lady_name_edit').value
  };
  let response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
}

document.getElementById('edit_lady_button').addEventListener('click', (event) => {
  event.preventDefault();
  editLady();
});

async function editVp() {
  const inputField = document.querySelector('#edit_vp_id');
  const url = `/api/vicepresident/${inputField.value}`;
  const data = {
    first_name: document.querySelector('#edit_vp_fname').value,
    last_name: document.querySelector('#edit_vp_lname').value
  };
  let response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
}

document.getElementById('edit_vp_button').addEventListener('click', (event) => {
  event.preventDefault();
  editVp();
});

async function editChild() {
  const inputField = document.querySelector('#edit_child_id');
  const url = `/api/children/${inputField.value}`;
  const data = {
    first_name: document.querySelector('#child_fname_edit').value,
    last_name: document.querySelector('#child_lname_edit').value
  };
  let response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
}

document.getElementById('edit_child_button').addEventListener('click', (event) => {
  event.preventDefault();
  editChild();
});
>>>>>>> 0f0ad2349b801e800e4c3ecc5bb5cfd3b9e31ea7
