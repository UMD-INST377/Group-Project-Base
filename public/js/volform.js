async function updateVolcano() {
  const volcanoUpdateInfo = {
    volcano_id: document.getElementById('id-input').value,
    volcano_name: document.getElementById('name-input').value,
    latitude: document.getElementById('lat-input').value,
    longitude: document.getElementById('long-input').value,
    volcano_number: document.getElementById('volnum-input').value
  };
  await fetch('/api/volcanos', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(volcanoUpdateInfo)
  });
}

async function insertVolcano() {
  const volcanoInsertInfo = {
    volcano_name: document.getElementById('name-input').value,
    latitude: document.getElementById('lat-input').value,
    longitude: document.getElementById('long-input').value,
    volcano_number: document.getElementById('volnum-input').value
  };
  await fetch('/api/volcanos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(volcanoInsertInfo)
  });
}

async function deleteVolcano() {
  const volcanoDeleteInfo = {
    eruption_id: document.getElementById('eruption-id-input').value
  };

  await fetch('/api/volcanos', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(volcanoDeleteInfo)
  });
}
document.querySelector('#updatevol').addEventListener('click', (event) => {
  location.href = 'formsuccess.html';
  event.preventDefault();
  updateVolcano();
});

document.querySelector('#insertvol').addEventListener('click', (event) => {
  location.href = 'formsuccess.html';
  event.preventDefault();
  insertVolcano();
});

document.querySelector('#deletevol').addEventListener('click', (event) => {
  location.href = 'formsuccess.html';
  event.preventDefault();
  deleteVolcano();
});
