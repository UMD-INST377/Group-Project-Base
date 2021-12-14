/* Group24 */
/* Jacob Walter Lab 11 */

// pop-up message delete on click
document.addEventListener("DOMContentLoaded", () => {
  (document.querySelectorAll(".message-header .delete") || []).forEach(
    ($delete) => {
      const $notification = $delete.parentNode;

      $delete.addEventListener("click", () => {
        $notification.parentNode.removeChild($notification);
      });
    }
  );
});

// pop-up message delete on click
document.addEventListener("DOMContentLoaded", () => {
  (document.querySelectorAll(".notification .delete") || []).forEach(
    ($delete) => {
      const $notification = $delete.parentNode;

      $delete.addEventListener("click", () => {
        $notification.parentNode.removeChild($notification);
      });
    }
  );
});

async function getDropdownData() {
  return (await fetch("/api/delete_options")).json();
}

document.addEventListener("DOMContentLoaded", async () => {
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
  for (let i = 0; i < data.length; i++) {
    options[data[i].full_name] = data[i].president_id;
  }
  return options;
}

function getPresidentIdByPresidentName(data, president_id) {
  president_id = data[president_id];
  return president_id;
}

function loadOptions(data) {
  const options = {};

  for (let i = 0; i < data.length; i++) {
    options[data[i].full_name] = data[i].president_id;
    // options[data[i].president_id] = data[i].full_name;
  }

  let select = document.getElementById("selectPresident");
  let options_lst = Object.keys(options);

  for (let i = 0; i < options_lst.length; i++) {
    let opt = options_lst[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
  }
}
// delete the president with dropdownlist
async function myFunction() {
  const inputField = document.getElementById("selectPresident");
  let response = await fetch(`/api/presidents/${inputField.value}`, {
    method: "DELETE",
  });
  inputField.options[inputField.selectedIndex].remove();
  
}