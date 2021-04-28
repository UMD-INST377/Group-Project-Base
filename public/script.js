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

async function populateAnimalTypes() {
  console.log('data request');

  const typesRequest = await fetch('/api/types');
  const typesData = await typesRequest.json();
  const typesTable = document.querySelector('.typestable');

  typesData.forEach((type) => {
    const appendType = document.createElement('tr');
    appendType.innerHTML = `
    <td>${type.species_id}</td>
    <td>${type.species_name}</td>
    `;
    typesTable.append(appendType);
    console.table(typesData);
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

async function populateWebsites() {
  console.log('data request');
  const websiteRequest = await fetch('/api/Websites');
  const websiteData = await websiteRequest.json();
  // const newWebsiteData = websiteData.data;
  console.table(websiteData);

  const websiteTable = document.querySelector('.websitestable');

  websiteData.forEach((website) => {
    const appendWebsite = document.createElement('tr');
    appendWebsite.innerHTML = `
    <td>${website.website_id}</td>
    <td>${website.shelter_id}</td>
    <td>${website.website_name}</td>
    `;

    websiteTable.append(appendWebsite);
  });
}

async function windowActions() {
  // await populateAnimals();
  await populateAnimalTypes();
  // await populateApplicants();
  // await populateEmployees();
  // await populatePending();
  // await populateShelters();
  // await populateWebsites();
}

window.onload = windowActions;
