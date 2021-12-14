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

endpoint = '/api/vacDataAndCounty'; 
async function VCInfo(endpoint, table) {
  const response = await fetch(endpoint);
  const data = await response.json();
  console.log(data);

  for (var key in data){
    var row = `<tr>
                  <td>${data[key].population}</td>
                  <td>${data[key].confirmed_deaths}</td>
                  <td>${data[key].first_dose_count}</td>
                  <td>${data[key].second_dose_count}</td>
              </tr>`

    table.innerHTML += row
  }
}
VCInfo(endpoint, document.querySelector('#VCtable'));