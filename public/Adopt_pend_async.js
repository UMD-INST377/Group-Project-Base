/* eslint-disable no-console */
async function populatePend() {
  console.log('data request');

  const pendRequest = await fetch('/api/pending');
  const pendData = await pendRequest.json();
  const pendTable = document.querySelector('.pendingtable');

  pendData.forEach((pend) => {
    const appendPend = document.createElement('tr');
    appendPend.innerHTML = `
          <td>${pend.adopt_id}</td>
          `;
    pendTable.append(appendPend);
    console.table(pendData);
  });
}

async function windowActions() {
  await populatePend();
}

window.onload = windowActions;
