console.log('hey');
async function createTable() {
    console.log('inside');
  let currentData = [];
  const data = [];
  const form = document.querySelector('.main_form');
  const table = document.querySelector('#table');
  const input = document.querySelector('#scientific_name');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (data.length === 0) {
      const arrayFromJson = await fetch('/felinae');
      let data = await arrayFromJson.json();
      console.log(data);
      currentData = data.filter((element) => {
        
        return element?.scientific_name?.toLowerCase().includes(input.value.toLowerCase())})
      await loadtable(currentData);
    }
    else{
        currentData = data.filter((element) => element.scientific_name.toLowerCase().includes(input.value.toLowerCase()))
        await loadtable(currentData);

    }
    input.addEventListener('change', async() => {
        currentData = data.filter((element) => element.scientific_name.toLowerCase().includes(input.value.toLowerCase()))
        await loadtable(currentData);
    })
  });
  async function loadtable(array) {
    table.innerHTML = ` <tbody>
        <tr><th>Item</th>
            <th>GBIF</th>
            <th>Scientific Name</th>
            <th>Parent Taxonomy</th>
            <th>Common Name</th>
        </tr>
        
    </tbody>`;

    array.forEach((element) => {
      const row = document.createElement('tr');
      const link = document.createElement('td');
      link.innerHTML = element.item;
      row.appendChild(link);
      const GBIF = document.createElement('td');
      GBIF.innerHTML = element.GBIF;
      row.appendChild(GBIF);
      const scientificName = document.createElement('td');
      scientificName.innerHTML = element.scientific_name;
      row.appendChild(scientificName);
      const parentTaxon = document.createElement('td');
      parentTaxon.innerHTML = element.parent_taxon;
      row.appendChild(parentTaxon);
      const commonNames = document.createElement('td');
      commonNames.innerHTML = element.common_names;
      row.appendChild(commonNames);
      table.appendChild(row);
    });
  }
}

document.addEventListener('DOMContentLoaded', async () => { await createTable() });