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

//Vaccination By County Table 
//url = 'http://localhost:3000/api/vacByCountyController';
url = '/api/vacByCountyController'; 
async function vacData(url, table) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data[1]);

  for (var key in data){
    var row = `<tr>
                  <td>${data[key].county}</td>
                  <td>${data[key].first_dose_count}</td>
                  <td>${data[key].first_dose_prop}</td>
                  <td>${data[key].second_dose_count}</td>
                  <td>${data[key].second_dose_prop}</td>
              </tr>`
    //table.append(row);
    table.innerHTML += row
  }
}
vacData(url, document.querySelector('#table'));