async function populateTypes() {
  console.log('data request');

  const typeRequest = await fetch('/api/types');
  const typeData = await typeRequest.json();
  const typeTable = document.querySelector('.typestable');

  typeData.forEach((type) => {
    const appendType = document.createElement('tr');
    appendType.innerHTML = `
        <td>${type.species_id}</td>
        <td>${type.species_name}</td>
        `;
    typeTable.append(appendType);
    console.table(typeData);
  });
}

async function windowActions() {
  await populateTypes();
}

window.onload = windowActions;
