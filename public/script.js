async function populateAnimals() {
  console.log('data request');

  const animalRequest = await fetch('/api/Animals');
  const animalData = await animalRequest.json();
  const animalTable = document.querySelector('.animaltable');

  animalData.forEach((animal) => {
    const appendItem = document.createElement('tr');
    appendItem.innerHTML = `
    <td>${animal.animal_id}</td>
    <td>${animal.name}</td>
    <td>${animal.status}</td>
    <td>${animal.gender}</td>
    <td>${animal.Animal_type_species_id}</td>
    `;

    animalTable.append(appendItem);
  });
}

async function populateApplicants() {
  console.log('data request');
  const applicantRequest = await fetch('/api/Applicants');
  const applicantData = await applicantRequest.json();
  //   return applicantData;
  console.table(applicantData);
}

async function populateShelters() {
  console.log('data request');
  const shelterRequest = await fetch('/api/Shelters');
  const shelterData = await shelterRequest.json();
  //   return shelterData;
  console.table(shelterData);
}

async function windowActions() {
  populateAnimals();
  populateShelters();
  populateApplicants();
}

window.onload = windowActions;
