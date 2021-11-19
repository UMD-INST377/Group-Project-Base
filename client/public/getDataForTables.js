async function animalTable() {
  const animalStuff = document.querySelector('.animalStuff')
  const resquest = await fetch('/api/animals');
  const animals = await resquest.json();
  animals.forEach((animalRecord) => {
    const newAnimalRow = document.createElement('tr');
    newAnimalRow.innerHTML =`
        <td>${animalRecord.Animal_ID}</td>
        <td>${animalRecord.common_name}</td>
        <td>${animalRecord.species}</td>
        <td>${animalRecord.weight_lbs}</td>
        <td>${animalRecord.cause}</td>
        <td>${animalRecord.age_species_went_extinct}</td>`;
    animalStuff.append(newAnimalRow);
  });
}

async function windowsActions() {
  await animalTable();
}

window.onload = windowsActions;