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