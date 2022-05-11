/* eslint-disable camelcase */
async function loadCountryTable(url) {
  const reponse = await fetch(url);
  const arrayFromJson = await reponse.json(); // This changes it into data we can use - an object
  data = await arrayFromJson.data;
  console.log(arrayFromJson);
  const tableFinder = document.querySelector('.table');
  // creating the rows

  data.forEach((element) => {
    const row = document.createElement('tr');
    const row_country_id = document.createElement('td');
    const row_country_name = document.createElement('td');
    const row_country_nationality = document.createElement('td');
    row_country_id.innerHTML = element.country_id;
    row_country_name.innerHTML = element.country_name;
    row_country_nationality.innerHTML = element.country_nationality;
    row.appendChild(row_country_id);
    row.appendChild(row_country_name);
    row.appendChild(row_country_nationality);
    tableFinder.appendChild(row);
  });
}
loadCountryTable('/api/country');
