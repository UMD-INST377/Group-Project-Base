/* eslint-disable camelcase */
async function loadGalleriesTable(url) {
  const reponse = await fetch(url);
  const arrayFromJson = await reponse.json(); // This changes it into data we can use - an object
  data = await arrayFromJson.data;
  console.log(arrayFromJson);
  const tableFinder = document.querySelector('.table');
  // creating the rows

  data.forEach((element) => {
    const row = document.createElement('tr');
    const row_gallery_id = document.createElement('td');
    const row_capacity = document.createElement('td');
    const row_gallery_name = document.createElement('td');
    const row_email = document.createElement('td');
    const row_street = document.createElement('td');
    const row_city = document.createElement('td');
    const row_state = document.createElement('td');
    const row_zip_code = document.createElement('td');
    row_gallery_id.innerHTML = element.gallery_id;
    row_capacity.innerHTML = element.capacity;
    row_gallery_name.innerHTML = element.gallery_name;
    row_email.innerHTML = element.email;
    row_street.innerHTML = element.street;
    row_city.innerHTML = element.city;
    row_state.innerHTML = element.state;
    row_zip_code.innerHTML = element.zip_code;
    row.appendChild(row_gallery_id);
    row.appendChild(row_capacity);
    row.appendChild(row_gallery_name);
    row.appendChild(row_email);
    row.appendChild(row_street);
    row.appendChild(row_city);
    row.appendChild(row_state);
    row.appendChild(row_zip_code);
    tableFinder.appendChild(row);
  });
}
loadGalleriesTable('/api/galleries');
