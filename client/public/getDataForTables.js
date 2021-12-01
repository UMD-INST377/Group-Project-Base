async function animalList() {
  const list = document.querySelector('.listt');
  const resquest = await fetch('/api/animals');
  const animals2 = await resquest.json();
  animals2.forEach((animalThing) => {
    const newRecord = document.createElement('details');
    newRecord.innerHTML = `
      <summary>${animalThing.common_name}</summary>
      <div class= 'columns'> 
        <div class = 'column is-half'>
          <div class="content listings">
              <h1>Animal Name: ${animalThing.common_name}</h1>
              <h3>Record Number: #${animalThing.Animal_ID} </h3>
              <h3>Species: ${animalThing.species}</h3>
              <h3>Weight (in lbs): ${animalThing.weight_lbs}</h3>
              <h3>Cause of Extinction: ${animalThing.cause}</h3>
              <h3>Extinction Age: ${animalThing.age_species_went_extinct}</h3>
          </div>
        </div>
        <div class = 'column is-half'>
          <img src='images/${animalThing.Animal_ID}.jpg'>
        </div>
      </div>`;
    list.append(newRecord);
  });
}


async function windowsActions() {
  await animalList();
}

window.onload = windowsActions;