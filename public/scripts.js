async function getMuseumStaff() {
  // console.log('data request');
  const result = document.querySelector('#resultStaff');
  const request = await fetch('/api/museum_staff');
  const tableData = await request.json();
  // console.table(tableData);
  // return tableData;

  tableData.data.forEach((staff) => {
    // console.log(staff);
    const appendItem = document.createElement('tr');
    // appendItem.classList.add('title', 'has-text-centered', 'is-parent', 'is-3');
    appendItem.innerHTML = `
        <td> ${staff.staff_id} </td>
        <td> ${staff.employee_first_name} </td>
        <td> ${staff.employee_last_name} </td>
        <td> ${staff.museum_id} </td>
        <td> ${staff.role_id} </td>`;
    result.append(appendItem);
  });
}

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
// window.onload = getStaffRole;
// class="has-text-light"
// class="title is-child box has-background-link-dark"
// class="subtitle has-text-light has-text-weight-bold"
