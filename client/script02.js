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
cStats(urlC, document.querySelector('#tableC'));