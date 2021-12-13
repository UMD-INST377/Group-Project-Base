async function updatefightRecord() {
  const recordUpdate = document.querySelector('#id_update');
  // const nameUpdate = document.querySelector('#name_update'); //
  const specskillUpdate = document.querySelector('#specskill_update');
  const wocUpdate = document.querySelector('#woc_update');
  const request = await fetch('/api/fight_mode', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    // changing put to match fight mode table //
    body: JSON.stringify({
      fight_mode_id: recordUpdate.value,
      special_skill: specskillUpdate.value,
      weapon_of_choice: wocUpdate.value
    })

  });
  alert(`Record #${recordUpdate.value} successfully updated!`);
  window.location.assign('fighting.html');
}