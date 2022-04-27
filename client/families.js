/* eslint-disable no-console */
// Canidae 5219243 | Felinae | Hominidae
async function clearTable(table) {
  while (table.hasChildNodes()) {
    table.removeChild(table.lastChild);
  }
}

function appendResults(results, table) {
  results.forEach((el) => {
    const newItem = document.createElement('div');
    newItem.className = 'obj';
    newItem.id = `result_${results.indexOf(el)}`;
    newItem.innerHTML = `
      <div class='name'>${el.scientific_name}</th>
        <div class='taxonID'>${el.GBIF}</div>
        <div class='parent'>${el.parent_taxon}</div>
        <div class='commonName'>${el.common_names}</div>`;
    table.append(newItem);
  });
}

// for getting ALL animals of a family
async function getByFamily(e, table) {
  e.preventDefault();
  const familyList = document.querySelector('#familyAll');
  const family = familyList.options[familyList.selectedIndex].text;
  const results = await fetch(`/${family}`);
  const arr = await results.json();
  clearTable(table);
  appendResults(arr, table);
}

async function mainEvent() {
  const getAll = document.querySelector('.getAll'); // see ALL species

  // tables for appending
  const allTable = document.querySelector('.getAllTable');
  // all form listeners
  getAll.addEventListener('submit', (e) => getByFamily(e, allTable));
}

document.addEventListener('DOMContentLoaded', mainEvent);