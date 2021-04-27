// code from lecture:
// function addAnimalData() {
//     document.querySelector('.animaltable')
//     Animals.data.forEach((m) =>
//         this.append(`<tr>${m}</tr>`);
// }

async function getAnimals() {
  console.log('data request');
  const animalRequest = await fetch('/api/Animals');
  const animalData = await animalRequest.json();
  //   return animalData;
  console.table(animalData);
}

async function getApplicants() {
  console.log('data request');
  const applicantRequest = await fetch('/api/Applicants');
  const applicantData = await applicantRequest.json();
  //   return applicantData;
  console.table(applicantData);
}

async function getShelters() {
  console.log('data request');
  const shelterRequest = await fetch('/api/Shelters');
  const shelterData = await shelterRequest.json();
  //   return shelterData;
  console.table(shelterData);
}

async function windowActions() {
  getAnimals();
  getShelters();
  getApplicants();
}

window.onload = windowActions;
