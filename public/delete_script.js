async function presDelete() {
  const inputField = document.querySelector('#president_id_delete');
  const url = `/api/presidents/${inputField.value}`;
  let response = await fetch(url, {
    method: 'DELETE',
  });
}
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
});

async function getDropdownData() {
  return (await fetch('/api/delete_options')).json();
}

document.addEventListener('DOMContentLoaded', async () => {
  let presidents = [];
  try {
    presidents = await getDropdownData();
  } catch (err) {
    console.log(err);
  }
  loadOptions(presidents);
});

function generateObjectsForDeleteOptions(data) {
  const options = {};
  for (let i=0; i < data.length; i++) {
    options[data[i].full_name] = data[i].president_id;
  }
  return options;
}

function getPresidentIdByPresidentName(data, presidentName) {
  president_id = data[presidentName];
  return president_id;
}

function loadOptions(data) {
  const options = {};

  for (let i=0; i < data.length; i++) {
    options[data[i].full_name] = data[i].president_id;
  }

  let select = document.getElementById("selectPresident");
  let options_lst = Object.keys(options)

  for (var i = 0; i < options_lst.length; i++) {
    let opt = options_lst[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  }
}

// pop-up message delete on click
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector("#selectPresident").onchange=function() { 
    let val = this.value; 
    console.log(val);
    const mapData = await getDropdownData();
    console.log(mapData)
    //console.log(getPresidentIdByPresidentName(generateObjectsForDeleteOptions(mapData), val)); 
    
    

  }
});
