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
  console.log('script loaded');
}
// mobile nav
const header = document.querySelector('Header');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  header.classList.toggle('active');
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
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

// Login Modal
const loginModal = document.querySelector('.login_modal');
const loginLink = document.querySelector('.login');

loginLink.addEventListener('click', () => {
  loginModal.style.display = 'flex';
  modal.style.display = 'block';
});

modal.addEventListener('click', () => {
  loginModal.style.display = 'none';
  modal.style.display = 'none';
});

// User Sign Up
const signUpSubmit = document.querySelector('#sign_up');

// 18 mins https://umd.zoom.us/rec/play/rOLy7S2bMVLqqQvCT4MafItbyal9mR0je208TXcKdYNg_60oQh4PUme9okMLZiuWGNZeuLKFPY7YvB8G.MwoLwbThRsi8-LiG
// const signUpForm = document.querySelector('sign_up_form')

signUpSubmit.addEventListener('click', (submitEvent) => {
  submitEvent.preventDefault();
  window.location.href = '/index.html';
});

document.addEventListener('DOMContentLoaded', mainEvent);