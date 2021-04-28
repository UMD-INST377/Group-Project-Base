/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
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

async function windowActions() {
  await populateAnimals();
}

window.onload = windowActions;
