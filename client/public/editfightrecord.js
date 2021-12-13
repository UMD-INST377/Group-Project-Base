async function updatefightRecord() {
  const recordUpdate = document.querySelector('#id_update');
  const nameUpdate = document.querySelector('#name_update');
  const specskillUpdate = document.querySelector('#specskill_update');
  const wocUpdate = document.querySelector('#woc_update');
  const request = await fetch('/api/fight_mode', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      Animal_ID: recordUpdate.value,
      common_name: nameUpdate.value,
      species: specskillUpdate.value,
      weapon_of_choice: wocUpdate.value
    })

  });
  alert(`Record #${recordUpdate.value} successfully updated!`);
  window.location.assign('fighting.html');
}