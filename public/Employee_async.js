/* eslint-disable no-console */
async function populateEmployees() {
  console.log('data request');

  const employeesRequest = await fetch('/api/employeeMapCustom');
  const employeesData = await employeesRequest.json();
  const employeeTable = document.querySelector('.employeetable');
  console.log(employeesData);

  employeesData.forEach((employee) => {
    const appendEmployee = document.createElement('tr');
    appendEmployee.innerHTML = `
      <td>${employee.name}</td>
      <td>${employee.phone_number}</td>
      <td>${employee.age}</td>
      <td>${employee.employee_type}</td>
      <td>${employee.shelter_name}</td>
      `;
    employeeTable.append(appendEmployee);
  });
}

async function windowActions() {
  await populateEmployees();
}

window.onload = windowActions;
