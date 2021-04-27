// function addData() {
//     document.querySelector('.animaltable')
//     Animals.data.forEach((m) =>
//         this.append(`<tr>${m}</tr>`);
// }

async function getAnimals() {
  console.log('data request');
  const animalRequest = await fetch('animals');
  const animalData = await animalRequest.json();
  return animalData;
}

async function windowActions() {
  getAnimals();
}

window.onload = windowActions;
