function filterList(list, filterInputValue) {
  return list.filter((item) => {
    if (!item.street_number.concat(' ', item.street_name).concat(' ', item.street_type).concat(', ', item.city).concat(', ', item.state).concat(' ', item.zip_code)) {
      return;
    }
    const lowerCaseName = item.street_number.concat(' ', item.street_name.toLowerCase()).concat(' ', item.street_type.toLowerCase()).concat(', ', item.city.toLowerCase()).concat(', ', item.state.toLowerCase()).concat(' ', item.zip_code);
    const lowerCaseQuery = filterInputValue.toLowerCase();
    return lowerCaseName.includes(lowerCaseQuery);
  });
}

function injectHTML(list) {
  console.log('fired injectHTML');
  const target = document.querySelector('#property_list');
  target.innerHTML = '';

  const listEl = document.createElement('ol');
  target.appendChild(listEl);

  list.forEach((item) => {
    const el = document.createElement('li');
    el.innerText = item.violation_description;
    listEl.appendChild(el);
  });
}

async function getData() {
  const url = 'https://data.princegeorgescountymd.gov/resource/9hyf-46qb.json';
  const data = await fetch(url);
  const json = await data.json();

  const reply = json.filter((item) => Boolean(item.location)).filter((item) => Boolean(item.location.longitude)).filter((item) => Boolean(item.location.latitude)).filter((item) => Boolean(item.property_id));
  return reply;
}

async function mainEvent() {
  const data = await getData();
  console.table(data);
  console.log(data[0]);
  console.log(
    `${data[0].street_number} ${data[0].street_name} ${data[0].street_type}, ${data[0].city}, ${data[0].state} ${data[0].zip_code}`
  );

  const propForm = document.querySelector('.property_form');
  const propInfo = document.querySelector('#prop_info');

  if (data?.length > 0) {
    propForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const filteredList = filterList(data, propInfo.value);
      injectHTML(filteredList);
    });
  }
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());