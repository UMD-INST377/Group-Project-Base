/* eslint-disable no-shadow */
/* eslint-disable no-console */
// Canidae 5219243 | Felinae | Hominidae

// const id = await fuzzySearch('salamander') // needs to return a valid species!

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

async function newQuery(event, form) {
  e.preventDefault();
  if (form.elements.species_a.value === '' || form.elements.species_b.value) {
    return;
  }
  const results = await fetch('/search');
  const arr = await results.json()
    .then(console.log);
  console.log(arr);
  if (arr.length === 0) {
    console.log('No result. Try again.');
  }
  // const allTable = document.querySelector('.getAllTable');
  // clearTable(allTable);
  // clearTable(table);
  // appendResults(arr, table);
}

async function getByFamily(e, table) {
  e.preventDefault();
  const familyList = document.querySelector('#familyAll');
  const family = familyList.options[familyList.selectedIndex].text;
  const results = await fetch(`/${family}`);
  const arr = await results.json();
  console.log(arr);
  clearTable(table);
  appendResults(arr, table);
}

function createResultCard(queryArr) {
  const container = document.querySelector('.saved_results_container');
  const card = document.createElement('div');
  card.className = 'saved_result_card';
  // result image
  const imageBox = document.createElement('div');
  imageBox.className = 'result_image';
  const image = document.createElement('img');
  image.src = queryArr.match_url;
  imageBox.appendChild(image);
  // text
  const savedText = document.createElement('div');
  savedText.className = 'saved_text';
  const arrowLeftBox = document.createElement('div');
  arrowLeftBox.className = 'arrow_container_left';
  const arrowLeft = document.createElement('div');
  arrowLeft.className = 'arrow_left';
  const lineleftA = document.createElement('div');
  lineleftA.className = 'line_a';
  const lineleftB = document.createElement('div');
  lineleftB.className = 'line_b';
  arrowLeft.appendChild(lineleftA);
  arrowLeft.appendChild(lineleftB);
  arrowLeftBox.appendChild(arrowLeft);

  const arrowRightBox = document.createElement('div');
  arrowRightBox.className = 'arrow_container_right';
  const arrowRight = document.createElement('div');
  arrowLeft.className = 'arrow_right';
  const linerightA = document.createElement('div');
  linerightA.className = 'line_a';
  const linerightB = document.createElement('div');
  linerightB.className = 'line_b';
  arrowRight.appendChild(linerightA);
  arrowRight.appendChild(linerightB);
  arrowRightBox.appendChild(arrowRight);
  const querySentence = document.createElement('p');
  const input1 = document.createElement('span');
  input1.innerText = queryArr.input_string_1;
  const input2 = document.createElement('span');
  input2.innerText = queryArr.input_string_2;
  const match = document.createElement('span');
  match.innerText = queryArr.query_match;
  querySentence.innerText = `The common ancestor of a ${queryArr.input_string_1} and a ${queryArr.input_string_2} is the taxon "${queryArr.query_match}."`;
  savedText.appendChild(arrowLeftBox);
  savedText.appendChild(querySentence);
  savedText.appendChild(arrowRightBox);
  card.appendChild(imageBox);
  card.appendChild(savedText);
  container.appendChild(card);
}
async function fetchQueries() {
  const results = await fetch('/queries');
  const arr = await results.json();
  console.log(arr);
  arr.forEach((result) => {
    createResultCard(result);
  });
}
async function oldEvent() { // old mainEvent()
  // all form elements
  const form1 = document.querySelector('#form1'); // species 1
  const form2 = document.querySelector('#form2'); // species 2
  const getAll = document.querySelector('.getAll'); // see ALL species

  // tables for appending
  const table1 = document.querySelector('.species1Table');
  const table2 = document.querySelector('.species2Table');
  const allTable = document.querySelector('.getAllTable');
  // all form listeners
  form1.addEventListener('submit', (e) => getByID(e, form1, table1));
  form2.addEventListener('submit', (e) => getByID(e, form2, table2));
  getAll.addEventListener('submit', (e) => getByFamily(e, allTable));
}

async function mainEvent() {
  // await fetchQueries();

  // Add editor buttons
  const searches = document.querySelectorAll('.saved_result_card');
  Array.from(searches).forEach((elem) => {
    const postOptions = document.createElement('div');
    postOptions.className = 'post-options';
    const newButton = document.createElement('button');
    newButton.className = 'edit';
    newButton.innerText = '✏️';
    postOptions.append(newButton);
    elem.append(postOptions);
  });
  // Species queries
  const speciesButton = document.querySelector('.submit');
  const speciesForm = document.querySelector('.species_form');

  speciesButton.addEventListener('submit', (e) => newQuery(e, speciesForm));

}
document.addEventListener('DOMContentLoaded', mainEvent);