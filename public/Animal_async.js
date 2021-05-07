/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
async function populateMale() {
  console.log('data request');

  const animalRequest = await fetch('/api/speciesMapCustom');
  const animalData = await animalRequest.json();
  const animalTable = document.querySelector('.animaltable');
  console.table(animalData);

  animalData.forEach((animal) => {
    const appendAnimal = document.createElement('tr');
    if (animal.gender === 'male') {
      appendAnimal.innerHTML = `
      <td>${animal.name}</td>
      <td>${animal.status}</td>
      <td>${animal.gender}</td>
      <td>${animal.species_name}</td>
      `;
    }
    animalTable.append(appendAnimal);
  });
}
async function populateFemale() {
  console.log('data request');

  const animalRequest = await fetch('/api/speciesMapCustom');
  const animalData = await animalRequest.json();
  const animalTable = document.querySelector('.animaltable');
  console.table(animalData);

  animalData.forEach((animal) => {
    const appendAnimal = document.createElement('tr');
    if (animal.gender === 'female') {
      appendAnimal.innerHTML = `
      <td>${animal.name}</td>
      <td>${animal.status}</td>
      <td>${animal.gender}</td>
      <td>${animal.species_name}</td>
      `;
    }
    animalTable.append(appendAnimal);
  });
}
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

async function chooseFilters() {
  const maleFilter = document.getElementById('malecb');
  const femaleFilter = document.getElementById('femalecb');
  const bothFilter = document.getElementById('bothcb');

  maleFilter.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      console.log('checked');
      populateMale();
    } else {
      console.log('not checked');
    }
  });

  femaleFilter.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      console.log('checked');
      populateFemale();
    } else {
      console.log('not checked');
    }
  });

  bothFilter.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      console.log('checked');
      populateAnimals();
    } else {
      console.log('not checked');
    }
  });
}

async function windowActions() {
  await chooseFilters();
}

window.onload = windowActions;
