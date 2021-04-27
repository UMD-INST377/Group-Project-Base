async function populateAnimals() {
  console.log('data request');

  const animalRequest = await fetch('/api/Animals');
  const animalData = await animalRequest.json();
  const animalTable = document.querySelector('.animaltable');

  animalData.forEach((animal) => {
    const appendAnimal = document.createElement('tr');
    appendAnimal.innerHTML = `
    <td>${animal.animal_id}</td>
    <td>${animal.name}</td>
    <td>${animal.status}</td>
    <td>${animal.gender}</td>
    <td>${animal.Animal_type_species_id}</td>
    `;
    animalTable.append(appendAnimal);
    console.table(animalData);
  });
}

async function populateApplicants() {
  console.log('data request');
  const applicantRequest = await fetch('/api/Applicants');
  const applicantData = await applicantRequest.json();

  const applicantsTable = document.querySelector('.applicantstable');

  applicantData.forEach((applicant) => {
    const appendApplicant = document.createElement('tr');
    appendApplicant.innerHTML = `
    <td>${applicant.applicant_id}</td>
    <td>${applicant.last_name}</td>
    <td>${applicant.first_name}</td>
    <td>${applicant.phone_number}</td>
    <td>${applicant.age}</td>
    `;

    applicantsTable.append(appendApplicant);
    console.table(applicantData);
  });
}

async function populateShelters() {
  console.log('data request');
  const shelterRequest = await fetch('/api/shelters');
  const shelterData = await shelterRequest.json();

  const sheltersTable = document.querySelector('.shelterstable');

  shelterData.forEach((shelter) => {
    const appendShelter = document.createElement('tr');
    appendShelter.innerHTML = `
    <td>${shelter.shelter_id}</td>
    <td>${shelter.shelter_name}</td>
    <td>${shelter.shelter_address}</td>
    <td>${shelter.phone_number}</td>
    <td>${shelter.num_employees}</td>
    `;

    sheltersTable.append(appendShelter);
    console.table(shelterData);
  });
}

async function windowActions() {
  await populateAnimals();
  await populateApplicants();
  await populateShelters();
}

window.onload = windowActions;
