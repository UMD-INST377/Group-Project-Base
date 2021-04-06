async function getData() {
  console.log('data request');
  const result = document.querySelector('#result');
  const request = await fetch('api/museum_staff');
  const tableData = await request.json();
  console.table(tableData);
  // return tableData;

  tableData.data.forEach((data) => {
    console.log(data);
    const appendItem = document.createElement('tr');
    // appendItem.classList.add('title', 'has-text-centered', 'is-parent', 'is-3');
    appendItem.innerHTML = `
        <td> ${data.staff_id} </td>
        <td> ${data.employee_first_name} </td>
        <td> ${data.employee_last_name} </td>
        <td> ${data.museum_id} </td>
        <td> ${data.role_id} </td>`;
    result.append(appendItem);
  });
}
window.onload = getData;
// class="has-text-light"
// class="title is-child box has-background-link-dark"
// class="subtitle has-text-light has-text-weight-bold"
