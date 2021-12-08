async function deleteRecord() {
  const recordDelete = document.querySelector('#id_delete');
  const request = await fetch('/api/animals', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({Animal_ID: recordDelete.value})
  });
  alert('Record #' + recordDelete.value + ' successfully deleted!');
  window.location.assign('viewDatabase.html');
}

async function updateRecord() {
  const recordUpdate = document.querySelector('#id_update');
  const nameUpdate = document.querySelector('#name_update');
  const speciesUpdate = document.querySelector('#species_update');
  const weightUpdate = document.querySelector('#weight_update')
  const request = await fetch('/api/animals', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({Animal_ID: recordUpdate.value, common_name: nameUpdate.value, 
      species: speciesUpdate.value, weight_lbs: weightUpdate.value})
    
  });
  alert('Record #' + recordUpdate.value + ' successfully updated!');
  window.location.assign('viewDatabase.html');
}
  
  
