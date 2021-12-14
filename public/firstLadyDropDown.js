async function ladyGetDropdownData() {
    return (await fetch("/api/firstladydrop")).json();
  }
  
  document.addEventListener("DOMContentLoaded", async () => {
    let presidents = [];
    try {
      presidents = await ladyGetDropdownData();
    } catch (err) {
      console.log(err);
    }
    ladyLoadOptions(presidents);
  });
  
  function generateObjectsForLady(data) {
    const options = {};
    for (let i = 0; i < data.length; i++) {
      options[data[i].first_ladies_name] = data[i].first_ladies_id;
    }
    return options;
  }
  
  function getLadyIdByLadyName(data, first_ladies_id) {
    first_ladies_id = data[first_ladies_id];
    return first_ladies_id;
  }
  
  function ladyLoadOptions(data) {
    const options = {};
  
    for (let i = 0; i < data.length; i++) {
      options[data[i].first_ladies_name] = data[i].first_ladies_id;
      // options[data[i].first_ladies_id] = data[i].first_ladies_name;
    }
  
    let select = document.getElementById("edit_ladies_id");
    let options_lst = Object.keys(options);
  
    for (let i = 0; i < options_lst.length; i++) {
      let opt = options_lst[i];
      let el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
    }
  }
  async function eeditlady() {
    const inputField = document.getElementById('#edit_ladies_id');
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
    inputField.options[inputField.selectedIndex].appendChild();
  }