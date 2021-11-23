async function presAdd() {
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
    body: JSON.stringify(data)
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
      body: JSON.stringify(data)
    });
  }
  
  document.getElementById('edit_form').addEventListener('click', (event) => {
    event.preventDefault();
    presAdd();
  });