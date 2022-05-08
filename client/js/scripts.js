/* eslint-disable implicit-arrow-linebreak */

async function loadData (url) {
  const response = await fetch(url);
  const arrayFromJson = await response.json();
  data = await arrayFromJson.data[0];
  /* const company = document.querySelector('#label');
  const industry = document.querySelector('#label1');
  const size = document.querySelector('#label2');
  const city = document.querySelector('#label3');

  const filterArray = [];
  filterArray.push(company.value);
  filterArray.push(industry.value);
  filterArray.push(size.value);
  filterArray.push(city.value);
  // console.log(filterArray, 'array');
  const filterName = ['company_name', 'type', 'size', 'city']; */
  // console.log(arrayFromJson);

  /* filterName.forEach((filter, index) => {
    const filterData = data.filter((item) =>
      item[filter].toLowerCase().includes(filterArray[index].toLowerCase()));
    data = filterData;
  }); */

  data.forEach((element) => {
    const tableFinder = document.querySelector('.table');
    const row = document.createElement('tr');
    const rowCompanyId = document.createElement('td');
    rowCompanyId.innerHTML = element.company_id;
    row.appendChild(rowCompanyId);
    const rowCompanyName = document.createElement('td');
    rowCompanyName.innerHTML = element.company_name;
    row.appendChild(rowCompanyName);
    const rowSize = document.createElement('td');
    rowSize.innerHTML = element.size;
    row.appendChild(rowSize);
    const rowType = document.createElement('td');
    rowType.innerHTML = element.type;
    row.appendChild(rowType);
    const rowCity = document.createElement('td');
    rowCity.innerHTML = element.city;
    row.appendChild(rowCity);

    tableFinder.appendChild(row);
  });
}

async function loadData1 (url) {
  const response = await fetch(url);
  const arrayFromJson = await response.json();
  data = await arrayFromJson.data[0];

  data.forEach((element) => {
    const tableFinder = document.querySelector('.table1');
    const row = document.createElement('tr');
    const rowAdvisorId = document.createElement('td');
    rowAdvisorId.innerHTML = element.advisor_id;
    row.appendChild(rowAdvisorId);
    const rowAdvisorInitial = document.createElement('td');
    rowAdvisorInitial.innerHTML = element.advisor_initials;
    row.appendChild(rowAdvisorInitial);
    tableFinder.appendChild(row);
  });
}

async function loadData2 (url) {
  const response = await fetch(url);
  const arrayFromJson = await response.json();
  data = await arrayFromJson.data[0];

  data.forEach((element) => {
    const tableFinder = document.querySelector('.table2');
    const row = document.createElement('tr');
    const rowStudentId = document.createElement('td');
    rowStudentId.innerHTML = element.student_id;
    row.appendChild(rowStudentId);
    const rowFirstName = document.createElement('td');
    rowFirstName.innerHTML = element.first_name;
    row.appendChild(rowFirstName);
    const rowLastName = document.createElement('td');
    rowLastName.innerHTML = element.last_name;
    row.appendChild(rowLastName);
    const rowGradSem = document.createElement('td');
    rowGradSem.innerHTML = element.grad_semester;
    row.appendChild(rowGradSem);
    const rowGradYear = document.createElement('td');
    rowGradYear.innerHTML = element.grad_year;
    row.appendChild(rowGradYear);
    const rowStatus = document.createElement('td');
    rowStatus.innerHTML = element.status;
    row.appendChild(rowStatus);
    const rowConcentration = document.createElement('td');
    rowConcentration.innerHTML = element.infosci_concentration;
    row.appendChild(rowConcentration);
    tableFinder.appendChild(row);
  });
}

async function loadData3 (url) {
  const response = await fetch(url);
  const arrayFromJson = await response.json();
  data = await arrayFromJson.data[0];

  data.forEach((element) => {
    const tableFinder = document.querySelector('.table3');
    const row = document.createElement('tr');
    const rowServiceId = document.createElement('td');
    rowServiceId.innerHTML = element.service_id;
    row.appendChild(rowServiceId);
    const rowServiceDes = document.createElement('td');
    rowServiceDes.innerHTML = element.service_description;
    row.appendChild(rowServiceDes);
    tableFinder.appendChild(row);
  });
}

async function mainEvent() {
  const button1 = document.querySelector('.button1');
  const button2 = document.querySelector('.button2');
  const button3 = document.querySelector('.button3');
  const button4 = document.querySelector('.button4');
  button1.addEventListener('click', async (event) => {
    event.preventDefault();
    const tableFinder = document.querySelector('.table');
    tableFinder.innerHTML = '';
    await loadData('/api/company');
  });
  button2.addEventListener('click', async (event) => {
    event.preventDefault();
    const tableFinder = document.querySelector('.table2');
    tableFinder.innerHTML = '';
    await loadData2('/api/students');
  });
  button3.addEventListener('click', async (event) => {
    event.preventDefault();
    const tableFinder = document.querySelector('.table1');
    tableFinder.innerHTML = '';
    await loadData1('/api/advisors');
  });
  button4.addEventListener('click', async (event) => {
    event.preventDefault();
    const tableFinder = document.querySelector('.table3');
    tableFinder.innerHTML = '';
    await loadData3('/api/career_services');
  });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());
