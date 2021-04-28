/* eslint-disable no-console */
async function populateEmployees() {
  console.log('data request');

  const employeesRequest = await fetch('/api/Employees');
  const employeesData = await employeesRequest.json();
  const employeeTable = document.querySelector('.employeetable');
  console.log(employeesData);

  employeesData.forEach((employee) => {
    const appendEmployee = document.createElement('tr');
    appendEmployee.innerHTML = `
      <td>${employee.employee_id}</td>
      <td>${employee.last_name}</td>
      <td>${employee.first_name}</td>
      <td>${employee.phone_number}</td>
      <td>${employee.age}</td>
      <td>${employee.employee_type}</td>
      <td>${employee.Shelters_shelter_id}</td>
      `;
    employeeTable.append(appendEmployee);
  });
}

async function windowActions() {
  await populateEmployees();
}

window.onload = windowActions;
