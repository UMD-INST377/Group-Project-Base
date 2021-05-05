/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
async function populateAnimals() {
  console.log('data request');

  const animalRequest = await fetch('/api/speciesMapCustom');
  const animalData = await animalRequest.json();
  const animalTable = document.querySelector('.animaltable');
  console.table(animalData);

  animalData.forEach((animal) => {
    const appendAnimal = document.createElement('tr');
    appendAnimal.innerHTML = `
      <td>${animal.name}</td>
      <td>${animal.status}</td>
      <td>${animal.gender}</td>
      <td>${animal.species_name}</td>
      `;
    animalTable.append(appendAnimal);
  });
}

async function windowActions() {
  await populateAnimals();
}

window.onload = windowActions;
