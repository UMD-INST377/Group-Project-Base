/* Script for Customize Database Form */

let selectedRow = null;

function readFormData() {
  const formData = {};
  formData.song_name = document.getElementById('song_name').value;
  formData.album_name = document.getElementById('album_name').value;
  formData.first_name = document.getElementById('first_name').value;
  formData.last_name = document.getElementById('last_name').value;
  formData.rating = document.getElementById('rating').value;
  return formData;
}

function newSong(data) {
  const table = document.getElementById('song_list').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.song_name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.album_name;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.first_name;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.last_name;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.rating;
  cell5 = newRow.insertCell(5);
  cell5.innerHTML = `<a onClick="editSong(this)">Edit</a>
                        <a onClick="deleteSong(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById('song_name').value = '';
  document.getElementById('album_name').value = '';
  document.getElementById('first_name').value = '';
  document.getElementById('last_name').value = '';
  document.getElementById('rating').value = '';
  selectedRow = null;
}

function editSong(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById('song_name').value = selectedRow.cells[0].innerHTML;
  document.getElementById('album_name').value = selectedRow.cells[1].innerHTML;
  document.getElementById('first_name').value = selectedRow.cells[2].innerHTML;
  document.getElementById('last_name').value = selectedRow.cells[3].innerHTML;
  document.getElementById('rating').value = selectedRow.cells[4].innerHTML;
}

function updateSong(formData) {
  selectedRow.cells[0].innerHTML = formData.song_name;
  selectedRow.cells[1].innerHTML = formData.album_name;
  selectedRow.cells[2].innerHTML = formData.first_name;
  selectedRow.cells[3].innerHTML = formData.last_name;
  selectedRow.cells[4].innerHTML = formData.rating;
}

function deleteSong(td) {
  if (confirm('Are you SURE that you want to delete this song?')) {
    row = td.parentElement.parentElement;
    document.getElementById('song_list').deleteRow(row.rowIndex);
    resetForm();
  }
}

function validate() {
  isValid = true;
  if (document.getElementById('song_name').value === '') {
    isValid = false;
    document.getElementById('songValidationError').classList.remove('hide');
  } else {
    isValid = true;
    if (!document.getElementById('songValidationError').classList.contains('hide')) { document.getElementById('songValidationError').classList.add('hide'); }
  }
  return isValid;
}

function submitSongForm() {
  if (validate()) {
    const formData = readFormData();
    if (selectedRow == null) { newSong(formData); } else { updateSong(formData); }
    resetForm();
  }
}

/* References:
Tutorial Republic (n.d) JavaScript Form Validation
https://www.tutorialrepublic.com/javascript-tutorial/javascript-form-validation.php */

/* Working on a new table dynamically to populate API */

const wrapper = document.getElementById('content');
const demoData = '/api/songs_project';

function fetchData() {
  fetch('/api/songs_project')
    .then((data) => data.json())
    .then((jsonData) => populate(jsonData))
    .catch((e) => {
      wrapper.innerText = `Error: ${e}: in using songs_project data`;
    });
}

document.addEventListener('DOMContentLoaded', fetchData, false);

function dom(tag, text) {
  const r = document.createElement(tag);
  if (text) r.innerText = text;
  return r;
}

function append(parent, child) {
  parent.appendChild(child);
  return parent;
}

function populate(json) {
  if (json.length === 0) return;
  const keys = Object.keys(json[0]);
  const table = dom('table');
  
  // to populate the headers
  append(table,
    keys.map((k) => dom('th', k)).reduce(append, dom('tr')));

  // to populate the values
  const makeRow = (acc, row) => append(acc,
    keys.map((k) => dom('td', row[k])).reduce(append, dom('tr')));
  json.reduce(makeRow, table);
  wrapper.appendChild(table);
}

/* Example from StackOverflow
https://stackoverflow.com/questions/54175069/create-a-table-using-json-data-from-an-api-using-pure-javascript
*/