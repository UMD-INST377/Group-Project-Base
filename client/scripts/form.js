// Eruption form code
async function updateEruption() {
  const eruptionUpdateInfo = {
    eruption_id: document.getElementById('eruption-id-input').value,
    eruption_number: document.getElementById('eruption-num-input').value,
    year: document.getElementById('year-input').value,
    month: document.getElementById('month-input').value,
    day: document.getElementById('day-input').value,
    volcano_id: document.getElementById('volcano-id-input').value,
    aoa_id: document.getElementById('aoa-id-input').value,
    vei_id: document.getElementById('vei-id-input').value,
    evidence_id: document.getElementById('evidence-id-input').value,
    category_id: document.getElementById('category-id-input').value
  };
  await fetch('/api/eruption_info', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eruptionUpdateInfo)
  });
}

async function insertEruption() {
  const eruptionInsertInfo = {
    eruption_number: document.getElementById('eruption-num-input').value,
    year: document.getElementById('year-input').value,
    month: document.getElementById('month-input').value,
    day: document.getElementById('day-input').value,
    volcano_id: document.getElementById('volcano-id-input').value,
    aoa_id: document.getElementById('aoa-id-input').value,
    vei_id: document.getElementById('vei-id-input').value,
    evidence_id: document.getElementById('evidence-id-input').value,
    category_id: document.getElementById('category-id-input').value
  };
  await fetch('/api/eruption_info', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eruptionInsertInfo)
  });
}

async function deleteEruption() {
  const eruptionDeleteInfo = {
    eruption_id: document.getElementById('eruption-id-input').value
  };

  await fetch('/api/eruption_info', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eruptionDeleteInfo)
  });
}

// Volcano form code

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

document.querySelector('#updateerup').addEventListener('click', (event) => {
  location.href = 'formsuccess.html';
  event.preventDefault();
  updateEruption();
});

document.querySelector('#insererup').addEventListener('click', (event) => {
  location.href = 'formsuccess.html';
  event.preventDefault();
  insertEruption();
});

document.querySelector('#deleteerup').addEventListener('click', (event) => {
  location.href = 'formsuccess.html';
  event.preventDefault();
  deleteEruption();
});

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
