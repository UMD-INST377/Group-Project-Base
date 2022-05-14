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
      newItem.id = `id-${el.GBIF}-${results.indexOf(el)}`;
      newItem.innerHTML = `
        <div class='name'>${el.scientific_name}</div>
          <div class='taxonID'>${el.GBIF}</div>
          <div class='parent'>${el.parent_taxon}</div>
          <div class='commonName'>${el.common_names}</div>
          <button id='id-${el.GBIF}-${results.indexOf(el)}' class='delete'>Delete</button>
          </div>`;
      table.append(newItem);
    });
}
  
  // for getting ALL animals of a family
async function getByFamily(e, table) {
    e.preventDefault();
    const familyList = document.querySelector('#familyAll');
    const family = familyList.options[familyList.selectedIndex].text;
    const results = await fetch(`/table/?family=${family.toLowerCase()}`);
    const arr = await results.json();
    clearTable(table);
    appendResults(arr, table);
}

async function deleteRow(key) {
    // get species ID
    const entry = document.querySelector(`#${key}`)
    const id = entry.childNodes[3].innerHTML
    // get table name
    const familyList = document.querySelector('#familyAll');
    const family = familyList.options[familyList.selectedIndex].text;
    // get common name string
    const common = entry.childNodes[7].innerHTML

    let form = new URLSearchParams({
        family: family.toLowerCase(),
        gbif: id,
        common_name: common
    })
    fetch(`/table`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: form
    }).then((res) => {
        if (res.status === 200) {
            entry.remove();
        }
    })
    .catch(console.log)
}

async function mainEvent() {
    const getAll = document.querySelector('.getAll'); // see ALL species
  
    // tables for appending
    const allTable = document.querySelector('.getAllTable');
    // all form listeners
    getAll.addEventListener('submit', (e) => {
        getByFamily(e, allTable)
        .then(() => {
            document.querySelectorAll('button.delete')
                .forEach((element) => {
                    element.addEventListener('click', (e) => {
                        e.preventDefault()
                        console.log('click')
                        deleteRow(element.id)
                    })
                })
            })
        .catch(e => console.log)
    })
  }
  
  document.addEventListener('DOMContentLoaded', mainEvent);