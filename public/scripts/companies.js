function renderTableHTML(data, tableDiv) {
  const tableCols = `<table class="table is-scrollable">
      <tr><th>Company Name</th>
      <th>Company Address</th>
      <th>City</th>
      <th>Zip Code</th>
      </tr>`;

  tableDiv.innerHTML = `${tableCols + data.map((ele) => ` <tr>
         <td>${ele.company_name}</td>
         <td>${ele.company_address}</td>
         <td>${ele.city}</td>
         <td>${ele.company_zcta}</td>
         </tr>
       `).join('')}</table>`;
}

function findMatches(wordToMatch, companies) {
  return companies.filter((ele) => {
    const regex = new RegExp(wordToMatch, 'gi');
    // filter by category
    return ele.company_name.match(regex)
        || ele.company_address.match(regex)
        || ele.city.match(regex)
     || ele.company_zcta.match(regex);
  });
}

async function dataHandler() {
  const input = document.querySelector('.search');
  const tableDiv = document.querySelector('.companies-table');
  let companies = await fetch('./api/companies').then((response) => response.json());

  companies = companies[0];
  renderTableHTML(companies, tableDiv);

  input.addEventListener('input', (evt) => {
    renderTableHTML(findMatches(evt.target.value, companies), tableDiv);
  });
}

window.onload = dataHandler;