async function vpGetDropdownData() {
    return (await fetch("/api/vpdrop")).json();
  }
  
  document.addEventListener("DOMContentLoaded", async () => {
    let presidents = [];
    try {
      presidents = await vpGetDropdownData();
    } catch (err) {
      console.log(err);
    }
    vpLoadOptions(presidents);
  });
  
  function generateObjectsForVp(data) {
    const options = {};
    for (let i = 0; i < data.length; i++) {
      options[data[i].full_name] = data[i].vp_id;
    }
    return options;
  }
  
  function getVpIdByVpName(data, vp_id) {
    vp_id = data[vp_id];
    return vp_id;
  }
  
  function vpLoadOptions(data) {
    const options = {};
  
    for (let i = 0; i < data.length; i++) {
      options[data[i].full_name] = data[i].vp_id;
      // options[data[i].vp_id] = data[i].full_name;
    }
  
    let select = document.getElementById("edit_vp_id");
    let options_lst = Object.keys(options);
  
    for (let i = 0; i < options_lst.length; i++) {
      let opt = options_lst[i];
      let el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
    }
  }
  async function eeditvp() {
    const inputField = document.getElementById('#edit_vp_id');
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
    inputField.options[inputField.selectedIndex].appendChild();
  }