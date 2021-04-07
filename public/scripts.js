// async function getMuseumStaff() {
//   // console.log('data request');
//   const result = document.querySelector('#resultStaff');
//   const request = await fetch('/api/museum_staff');
//   const tableData = await request.json();
//   // console.table(tableData);
//   // return tableData;

//   tableData.data.forEach((staff) => {
//     // console.log(staff);
//     const appendItem = document.createElement('tr');
//     // appendItem.classList.add('title', 'has-text-centered', 'is-parent', 'is-3');
//     appendItem.innerHTML = `
//         <td> ${staff.staff_id} </td>
//         <td> ${staff.employee_first_name} </td>
//         <td> ${staff.employee_last_name} </td>
//         <td> ${staff.museum_id} </td>
//         <td> ${staff.role_id} </td>`;
//     result.append(appendItem);
//   });
// }

async function getData() {
  console.log('data request');
  const result = document.querySelector('#resultInfo');
  const request = await fetch('http://localhost:3000/api/museum_info');
  const tableData = await request.json();
  // return tableData;

  tableData.data.forEach((museum) => {
    console.log(museum);
    const appendItem = document.createElement('tr');
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
window.onload = getData;

// async function getStaffRole() {
//   console.log('data request');
//   const result = document.querySelector('#resultRole');
//   const request = await fetch('/api/staff_role');
//   const tableData = await request.json();
//   // console.table(tableData);
//   // return tableData;

//   tableData.data.forEach((role) => {
//     console.log(role);
//     const appendItem = document.createElement('tr');
//     // appendItem.classList.add('title', 'has-text-centered', 'is-parent', 'is-3');
//     appendItem.innerHTML = `
//         <td> ${role.role_id} </td>
//         <td> ${role.role_title} </td>`;
//     result.append(appendItem);
//   });
// }

window.onload = getMuseumStaff;

// We didn't need to destructure the result here - the results were returned directly
// window.onload = getStaffRole;
// class="has-text-light"
// class="title is-child box has-background-link-dark"
// class="subtitle has-text-light has-text-weight-bold"
