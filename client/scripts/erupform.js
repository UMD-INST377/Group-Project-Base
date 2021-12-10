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
  await fetch('api/eruption_info', {
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

document.querySelector('#updateerup').addEventListener('click', (event) => {
  location.href = 'formsuccess.html';
  event.preventDefault();
  updateEruption();
});

document.querySelector('#inserterup').addEventListener('click', (event) => {
  location.href = 'formsuccess.html';
  event.preventDefault();
  insertEruption();
});

document.querySelector('#deleteerup').addEventListener('click', (event) => {
  location.href = 'formsuccess.html';
  event.preventDefault();
  deleteEruption();
});