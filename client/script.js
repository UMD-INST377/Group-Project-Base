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
  const selector = form.children[1];
  const chosenfamily = selector.options[selector.selectedIndex].text;
  // console.log(form.elements.gbif.value);
  const results = await fetch(`/${chosenfamily}/${form.elements.gbif.value}`);
  // const results = await fetch('/canidae/:gbif');
  const arr = await results.json();
  if (arr.length === 0) {
    console.log('No animals with that GBIF Taxon ID');
  }
  const allTable = document.querySelector('.getAllTable');
  clearTable(allTable);
  clearTable(table);
  appendResults(arr, table);
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

// mobile nav
const header = document.querySelector("Header");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  header.classList.toggle("active");
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// saved results 
// const savedResults = document.querySelector(".saved_result_card")

// savedText.addEventListener("mouseover", () => {
//   console.log('moused over');
//   savedText.classList.toggle("active");
// });

// Sign Up Modal
const signUpModal = document.querySelector('.sign_up_modal');
const modal = document.querySelector('.modal');
const signUpLink = document.querySelector('.sign_up');

signUpLink.addEventListener('click', () => {
  signUpModal.style.display = 'flex';
  modal.style.display = 'block';
});

modal.addEventListener('click', () => {
  signUpModal.style.display = 'none';
  modal.style.display = 'none';
});



document.addEventListener('DOMContentLoaded', mainEvent);