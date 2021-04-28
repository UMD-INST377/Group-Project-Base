/* eslint-disable no-console */
async function populateEmployees() {
  console.log('data request');

  const employeesRequest = await fetch('/api/employees');
  const employeesData = await employeesRequest.json();
  const employeeTable = document.querySelector('.employeetable');

  employeesData.forEach((employee) => {
    const appendEmployee = document.createElement('tr');
    appendEmployee.innerHTML = `
      <td>${employee.employee_id}</td>
      `;
    employeeTable.append(appendEmployee);
    console.table(employeesData);
  });
}

async function windowActions() {
  await populateEmployees();
}

window.onload = windowActions;
