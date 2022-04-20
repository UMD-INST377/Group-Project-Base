/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
function DD_Function() {
  document.getElementById('myDropdown').toggleAttribute('show');
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    let l;
    for (l = 0; l < dropdowns.length; l++) {
      const dropdown_open = dropdowns[l];
      if (dropdown_open.classList.contains('show')) {
        dropdown_open.classList.remove('show');
      }
    }
  }
};
