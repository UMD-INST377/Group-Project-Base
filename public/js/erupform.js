let volcanoValue=1;
let aoaValue=1;
let veiValue=1;
let evidenceValue=1;
let categoryValue=1;

async function windowActions() {
    //getting data from volcanos endpoint and putting it in the select menu
    const volcanoendpoint = '/api/volcanos';
    const volcanorequest = await fetch(volcanoendpoint);
    const volcano = await volcanorequest.json();
    const volcanoSelect = document.querySelector('#volcano-select');
    for (let i = 0; i < volcano.length; i++) {
      option = document.createElement('option');
      option.setAttribute('value', volcano[i].volcano_id);
      option.innerHTML = volcano[i].volcano_name;
      volcanoSelect.appendChild(option);
    }
  
  //getting data from aoa endpoint and putting it in the select menu
  const aoaendpoint = '/api/eruption_aoa';
  const aoarequest = await fetch(aoaendpoint);
  const aoa = await aoarequest.json();
  const aoaSelect = document.querySelector('#aoa-select');
  for (let i = 0; i < aoa.length; i++) {
    option = document.createElement('option');
    option.setAttribute('value', aoa[i].aoa_id);
    option.innerHTML = aoa[i].aoa;
    aoaSelect.appendChild(option);
  }

  //getting data from vei endpoint and putting it in the select menu
  const veiendpoint = '/api/vei';
  const veirequest = await fetch(veiendpoint);
  const vei = await veirequest.json();
  const veiSelect = document.querySelector('#vei-select');
  for (let i = 0; i < vei.length; i++) {
    option = document.createElement('option');
    option.setAttribute('value', vei[i].vei_id);
    option.innerHTML = vei[i].vei;
    veiSelect.appendChild(option);
  }

  //getting data from evidence endpoint and putting it in the select menu
  const evidenceendpoint = '/api/evidence';
  const evidencerequest = await fetch(evidenceendpoint);
  const evidence = await evidencerequest.json();
  const evidenceSelect = document.querySelector('#evidence-select');
  for (let i = 0; i < evidence.length; i++) {
    option = document.createElement('option');
    option.setAttribute('value', evidence[i].evidence_id);
    option.innerHTML = evidence[i].method;
    evidenceSelect.appendChild(option);
  }

//getting data from category endpoint and putting it in the select menu
  const categoryendpoint = '/api/eruption_category';
  const categoryrequest = await fetch(categoryendpoint);
  const category = await categoryrequest.json();
  const categorySelect = document.querySelector('#category-select');
  for (let i = 0; i < category.length; i++) {
    option = document.createElement('option');
    option.setAttribute('value', category[i].category_id);
    option.innerHTML = category[i].category;
    categorySelect.appendChild(option);
  }

  //updates global values to be used in form
  function updateValue() {
    const volcanoOption = volcanoSelect.options[volcanoSelect.selectedIndex];
    const aoaOption = aoaSelect.options[aoaSelect.selectedIndex];
    const veiOption = veiSelect.options[veiSelect.selectedIndex];
    const evidenceOption = evidenceSelect.options[evidenceSelect.selectedIndex];
    const categoryOption = categorySelect.options[categorySelect.selectedIndex];
    volcanoValue=(volcanoOption.value);
    aoaValue=(aoaOption.value);
    veiValue=(veiOption.value);
    evidenceValue=(evidenceOption.value);
    categoryValue=(categoryOption.value);
  }
  volcanoSelect.addEventListener('change', updateValue);
  aoaSelect.addEventListener('change', updateValue);
  veiSelect.addEventListener('change', updateValue);
  evidenceSelect.addEventListener('change', updateValue);
  categorySelect.addEventListener('change', updateValue);
}
window.onload = windowActions;


async function updateEruption() {
  const eruptionUpdateInfo = {
    eruption_id: document.getElementById('eruption-id-input').value,
    eruption_number: document.getElementById('eruption-num-input').value,
    year: document.getElementById('year-input').value,
    month: document.getElementById('month-input').value,
    day: document.getElementById('day-input').value,
    volcano_id: volcanoValue,
    aoa_id: aoaValue,
    vei_id: veiValue,
    evidence_id: evidenceValue,
    category_id: categoryValue
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
    volcano_id: volcanoValue,
    aoa_id: aoaValue,
    vei_id: veiValue,
    evidence_id: evidenceValue,
    category_id: categoryValue
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