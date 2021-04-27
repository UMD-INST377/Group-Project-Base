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

async function windowActions() {
  getAnimals();
}

window.onload = windowActions;
