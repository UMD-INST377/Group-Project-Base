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

/*load table data for museum_info*/

async function getMuseumInfo() {
  console.log("data request");
  const result = document.querySelector("#resultInfo");
  const request = await fetch("/api/museum_info");
  const tableData = await request.json();
  console.table(tableData);
  // return tableData;

  tableData.data.forEach((museum) => {
    console.log(museum);
    const appendItem = document.createElement("tr");
    // appendItem.classList.add('title', 'has-text-centered', 'is-parent', 'is-3');
    appendItem.innerHTML = `
      <td> ${museum.museum_id} </td>
      <td> ${museum.museum_name} </td>
      <td> ${museum.museum_email} </td>
      <td> ${museum.museum_url} </td>
      <td> ${museum.museum_phone_num} </td>
      <td> ${museum.museum_entry_fee} </td>
      <td> ${museum.museum_open_time} </td>
      <td> ${museum.date_museum_opened} </td>
      <td> ${museum.museum_capacity} </td>
      <td> ${museum.museum_size} </td>
      <td> ${museum.museum_parent} </td>
      <td> ${museum.museum_close_time} </td>
      <td> ${museum.museum_budget} </td>
      <td> ${museum.museum_address} </td>
      <td> ${museum.museum_city} </td>
      <td> ${museum.museum_zipcode} </td>`;
    result.append(appendItem);
  });
}
window.onload = getMuseumInfo;