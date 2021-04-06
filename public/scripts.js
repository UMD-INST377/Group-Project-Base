async function getData() {
  console.log('data request');
  const result = document.querySelector('#result');
  const request = await fetch('/api/museum_team7');
  const tableData = await request.json();
  // return tableData;

  tableData.data.forEach((staff) => {
    console.log(staff);
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
window.onload = getData;
// class="has-text-light"
// class="title is-child box has-background-link-dark"
// class="subtitle has-text-light has-text-weight-bold"
