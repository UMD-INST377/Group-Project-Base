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

async function getByID(e, form, table) {
  e.preventDefault();
  if (form.elements.gbif.value === '') {
    return;
  }
  console.log('getByID()');
  const selector = form.children[2];
  const chosenfamily = selector.options[selector.selectedIndex].text;
  // console.log(form.elements.gbif.value);
  const results = await fetch(`/${chosenfamily}/${form.elements.gbif.value}`);
  // const results = await fetch('/canidae/:gbif');
  const arr = await results.json();
  if (arr.length === 0) {
    console.log('No animals with that GBIF Taxon ID');
  }
  clearTable(table);
  appendResults(arr, table);
}

async function mainEvent() {
  // all form elements
  const form1 = document.querySelector('#form1'); // species 1
  const form2 = document.querySelector('#form2'); // species 2

  // tables for appending
  const table1 = document.querySelector('.species1Table');
  const table2 = document.querySelector('.species2Table');
  // all form listeners
  form1.addEventListener('submit', (e) => getByID(e, form1, table1));
  form2.addEventListener('submit', (e) => getByID(e, form2, table2));
}

document.addEventListener('DOMContentLoaded', mainEvent);