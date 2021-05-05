/* This is for the nav-bar */
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(($el) => {
      $el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const { target } = $el.dataset;
        const $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

/* Table display for staff */
async function getData() {
  console.log('data request');
  const result = document.querySelector('#result');
  const request = await fetch('/api/museum_staff');
  const tableData = await request.json();
  // return tableData;
  console.log(tableData);

  tableData.data.forEach((staff) => {
    console.log(staff);
    const appendItem = document.createElement('tr');
    // appendItem.classList.add('title', 'has-text-centered', 'is-parent', 'is-3');
    appendItem.innerHTML = `
        <td> ${staff.staff_id} </td>
        <td> ${staff.employee_first_name} </td>
        <td> ${staff.employee_last_name} </td>
        <td> ${staff.museum_id} </td>
        <td> ${staff.role_id} </td>
        <td> ${staff.role_title} </td>`;
    result.append(appendItem);
  });
}
window.onload = getData;
