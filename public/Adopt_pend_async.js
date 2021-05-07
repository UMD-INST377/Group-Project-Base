/* eslint-disable no-console */
async function populatePend() {
  console.log('data request');

  const pendRequest = await fetch('/api/Pending');
  const pendData = await pendRequest.json();
  const pendTable = document.querySelector('.pendingtable');
  console.table(pendData);

  const appRequest = await fetch('/api/applicantMapCustom');
  const appData = await appRequest.json();
  console.table(appData);

  appData.forEach((pend) => {
    const appendPend = document.createElement('tr');
    appendPend.innerHTML = `
          <td>${pend.app_name}</td>
          <td>${pend.name}</td>
          <td>${pend.start_date}</td>
          <td>${pend.end_hold_date}</td>
          `;
    pendTable.append(appendPend);
  });
}

async function windowActions() {
  await populatePend();
}

window.onload = windowActions;
