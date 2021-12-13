async function childGetDropdownData() {
    return (await fetch("/api/child")).json();
  }
  
  document.addEventListener("DOMContentLoaded", async () => {
    let presidents = [];
    try {
      presidents = await childGetDropdownData();
    } catch (err) {
      console.log(err);
    }
    ChildloadOptions(presidents);
  });
  
  function generateObjectsForChild(data) {
    const options = {};
    for (let i = 0; i < data.length; i++) {
      options[data[i].full_name] = data[i].child_id;
    }
    return options;
  }
  
  function getChildByChildName(data, child_id) {
    child_id = data[child_id];
    return child_id;
  }
  
  function ChildloadOptions(data) {
    const options = {};
  
    for (let i = 0; i < data.length; i++) {
      options[data[i].full_name] = data[i].child_id;
      // options[data[i].child_id] = data[i].full_name;
    }
  
    let select = document.getElementById("edit_child_id");
    let options_lst = Object.keys(options);
  
    for (let i = 0; i < options_lst.length; i++) {
      let opt = options_lst[i];
      let el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
    }
  }
  async function eeditChild() {
    const inputField = document.getElementById('#edit_child_id');
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
    inputField.options[inputField.selectedIndex].appendChild();
  }