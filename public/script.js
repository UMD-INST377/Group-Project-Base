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

async function getShelters() {
  console.log('data request');
  const shelterRequest = await fetch('/api/Shelters');
  const shelterData = await shelterRequest.json();
  //   return shelterData;
  console.log(shelterData);
}

async function windowActions() {
  getAnimals();
  getShelters();
}

window.onload = windowActions;
