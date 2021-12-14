async function presidentGetDropdownData() {
    return (await fetch("/api/presidentdrop")).json();
  }
  
  document.addEventListener("DOMContentLoaded", async () => {
    let presidents = [];
    try {
      presidents = await presidentGetDropdownData();
    } catch (err) {
      console.log(err);
    }
    presidentLoadOptions(presidents);
  });
  
  function generateObjectsForPres(data) {
    const options = {};
    for (let i = 0; i < data.length; i++) {
      options[data[i].full_name] = data[i].president_id;
    }
    return options;
  }
  
  function getPresIdByPresName(data, president_id) {
    president_id = data[president_id];
    return president_id;
  }
  
  function presidentLoadOptions(data) {
    const options = {};
  
    for (let i = 0; i < data.length; i++) {
      options[data[i].full_name] = data[i].president_id;
      // options[data[i].president_id] = data[i].full_name;
    }
  
    let select = document.getElementById("president_id_edit");
    let options_lst = Object.keys(options);
  
    for (let i = 0; i < options_lst.length; i++) {
      let opt = options_lst[i];
      let el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
    }
  }
  async function editPresident() {
    const inputField = document.getElementById('#president_id_edit');
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
        party: document.querySelector('#party_edit').value
    };
    let response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    inputField.options[inputField.selectedIndex].appendChild();
  }
  console.log(editPresident)