/* eslint-disable implicit-arrow-linebreak */
async function loadData (url) {
  const response = await fetch(url);
  const arrayFromJson = await response.json();
  const company = document.querySelector('#label');
  const industry = document.querySelector('#label1');
  const size = document.querySelector('#label2');
  const city = document.querySelector('#label3');

  const filterArray = [];
  filterArray.push(company.value);
  filterArray.push(industry.value);
  filterArray.push(size.value);
  filterArray.push(city.value);
  console.log(filterArray, 'array');
  const filterName = ['company_name', 'type', 'size', 'city'];
  data = await arrayFromJson.data[0];
  console.log(arrayFromJson);

  filterName.forEach((filter, index) => {
    const filterData = data.filter((item) => 
      item[filter].toLowerCase().includes(filterArray[index].toLowerCase()));
    data = filterData;
  });
  /* if (company.value) {
    const filterData = data.filter((item) =>
    item.company_name.toLowerCase().includes(company.value.toLowerCase()))
    data = filterData;
    console.log(company.value);
  } */

  data.forEach((element) => {
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

async function mainEvent() {
  const form = document.querySelector('#form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const tableFinder = document.querySelector('.table');
    tableFinder.innerHTML = '';
    await loadData('/api/company');
  });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());
