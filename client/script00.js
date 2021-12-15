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

endpoint = '/api/county-info'; 
async function countyInfo(endpoint, table) {
  const response = await fetch(endpoint);
  const data = await response.json();
  console.log(data[0]);

  for (var key in data){
    var row = `<tr>
                  <td>${data[key].county}</td>
                  <td>${data[key].population}</td>
                  <td>${data[key].uninsured}</td>
                  <td>${data[key].poverty_rate}</td>
              </tr>`

    table.innerHTML += row
  }
}
countyInfo(endpoint, document.querySelector('#tableCounty'));

