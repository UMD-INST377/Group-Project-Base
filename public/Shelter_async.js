async function populateShelters() {
  console.log('data request');
  const shelterRequest = await fetch('/api/Shelters');
  const shelterData = await shelterRequest.json();
  const newShelterData = shelterData.data;

  const sheltersTable = document.querySelector('.shelterstable');

  newShelterData.forEach((shelter) => {
    const appendShelter = document.createElement('tr');
    appendShelter.innerHTML = `
    <td>${shelter.shelter_id}</td>
    <td>${shelter.shelter_name}</td>
    <td>${shelter.shelter_address}</td>
    <td>${shelter.phone_number}</td>
    <td>${shelter.num_employees}</td>
    `;

    sheltersTable.append(appendShelter);
    console.table(newShelterData);
  });
}

async function windowActions() {
  await populateShelters();
}

window.onload = windowActions;
