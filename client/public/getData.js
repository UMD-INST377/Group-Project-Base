async function animalList() {
  const list = document.querySelector('.listt');
  const req = await fetch('/api/animals');
  const animals = await req.json();
  animals.forEach((animal) => {
    const newRecord = document.createElement('details');
    newRecord.innerHTML = `
      <summary>${animal.common_name}</summary>
      <div class= 'columns'> 
        <div class = 'column is-half'>
          <div class="content listings">
              <h1>Animal Name: ${animal.common_name}</h1>
              <h3>Record Number: #${animal.Animal_ID} </h3>
              <h3>Species: ${animal.species}</h3>
              <h3>Weight (in lbs): ${animal.weight_lbs}</h3>
              <h3>Cause of Extinction: ${animal.cause}</h3>
              <h3>Extinction Age: ${animal.age_species_went_extinct}</h3>
          </div>
        </div>
        <div class = 'column is-half'>
          <img src='images/${animal.Animal_ID}.jpg'>
        </div>
      </div>`;
    list.append(newRecord);
  });
}


async function windowsActions() {
  await animalList();
}

window.onload = windowsActions;