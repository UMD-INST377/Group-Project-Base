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
                  <td>${data[key].County}</td>
                  <td>${data[key].Population}</td>
                  <td>${data[key].Confirmed_Death}</td>
                  <td>${data[key].Positive_Cases}</td>
                  <td>${data[key].First_Dose}</td>
                  <td>${data[key].Second_Dose}</td>
              </tr>`

    table.innerHTML += row
  }
}
VCInfo(endpoint, document.querySelector('#VCtable'));