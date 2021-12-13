// Delete without the dropdown list
// async function presDelete() {
//   const inputField = document.querySelector('#president_id_delete');
//   const url = `/api/presidents/${inputField.value}`;
//   let response = await fetch(url, {
//     method: 'DELETE',
//   });
// }
// document.getElementById('delete_button').addEventListener('click', (event) => {
//   event.preventDefault()
//   presDelete()
// });

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
// future ref
// document.getElementById('delete_button').addEventListener('onclick', (event) => {
//   event.preventDefault()
//   var txt;
//   var r = confirm("Would you like to delete this president?\nEither OK or Cancel.");
//   if (r == true) {
//     txt = "President Deleted";
//    myFunction()
//     confirm("President has been deleted");
//   } else {
//     txt = "Deletion Cancelled";
//     confirm("Deletion Cancelled");
//   }
// });

// Future ref
// console.log(myFunction)
// document.getElementById('delete_button').addEventListener('click', (event) => {

//   event.preventDefault()
//   myFunction()
//   });
// async function resDelete() {
//   const inputField = document.querySelectorAll('#selectPresident');
//   // const url = '/api/delete_options';
//   let response = await fetch(`/api/presidents/${inputField.value}`, {
//     method: 'DELETE',
//   });
// }
// document.getElementById('delete_button').addEventListener('click', (event) => {
//   event.preventDefault()
//   resDelete()

// });

// pop-up message delete on click
// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelector("#selectPresident").onchange=function() {
//     let val = this.value;
//     console.log(val);
//     const mapData = await getDropdownData();
//     console.log(mapData)
//     //console.log(getPresidentIdByPresidentName(generateObjectsForDeleteOptions(mapData), val));

//   }
// });
