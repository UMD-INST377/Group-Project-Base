async function loadData (url) {
  const response = await fetch(url);
  const arrayFromJson = await response.json();
  data = await arrayFromJson.data;
  console.log(arrayFromJson);
  data[0].forEach((element) => {
    const tableFinder = document.querySelector('.table');
    const row = document.createElement('tr');
    const rowCompanyId = document.createElement('td');
    const rowCompanyName = document.createElement('td');
    const rowSize = document.createElement('td');
    const rowType = document.createElement('td');
    const rowCity = document.createElement('td');

    rowCompanyId.innerHTML = element.company_id;
    rowCompanyName.innerHTML = element.company_name;
    rowSize.innerHTML = element.size;
    rowType.innerHTML = element.type;
    rowCity.innerHTML = element.city;

    row.appendChild(rowCompanyId);
    row.appendChild(rowCompanyName);
    row.appendChild(rowSize);
    row.appendChild(rowType);
    row.appendChild(rowCity);
    tableFinder.appendChild(row);
  });
}
loadData('/api/company');