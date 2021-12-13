// Toggle between showing and hiding dropdown
function openDropdown() {
  document.getElementById('myDropdown').classList.toggle('show');
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

//url = 'http://localhost:3000/api/vacByCountyController';
url = '/api/vacByCountyController'; 
async function vacData(url, table) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data[1]);

  for (var key in data){
    var row = `<tr>
                  <td>${data[key].county_ID}</td>
                  <td>${data[key].first_dose_count}</td>
                  <td>${data[key].first_dose_prop}</td>
                  <td>${data[key].second_dose_count}</td>
                  <td>${data[key].second_dose_prop}</td>
              </tr>`
    //table.append(row);
    table.innerHTML += row
  }
}
vacData(url, document.querySelector('table'));

urlC = '/api/covid-stats'; 
async function cStats(urlC, tableC) {
  const responseC = await fetch(urlC);
  const dataC = await responseC.json();
  console.log(dataC[1]);

  for (var keyC in dataC){
    var rowC = `<tr>
                  <td>${dataC[keyC].county_ID}</td>
                  <td>${dataC[keyC].confirmed_deaths}</td>
                  <td>${dataC[keyC].positive_cases}</td>
                  <td>${dataC[keyC].county_death_prop}</td>
              </tr>`
    //table.append(row);
    tableC.innerHTML += rowC
  }
}
cStats(urlC, document.querySelector('tableC'));

urlVS = '/api/vaccine-site-info';
async function vsStats(urlVS, tableVS) {
  const responseVS = await fetch(urlVS);
  const dataVS = await responseVS.json();
  console.log(dataVS[1]);

  for (var key in dataVS){
    var rowVS = `<tr>
                  <td>${dataVS[key].site_name}</td>
                  <td>${dataVS[key].street_address}</td>
                  <td>${dataVS[key].street_address2}</td>
                  <td>${dataVS[key].city}</td>
                  <td>${dataVS[key].zip_code}</td>
                  <td>${dataVS[key].active}</td>
                  <td>${dataVS[key].site_type}</td>
                  <td>${dataVS[key].operating_hours}</td>
                  <td>${dataVS[key].contact_phone}</td>
                  <td>${dataVS[key].website}</td>
                  <td>${dataVS[key].site_ID}</td>
              </tr>`
    //table.append(row);
    tableVS.innerHTML += rowVS
  }
}
vsStats(urlVS, document.querySelector('tableVS'));