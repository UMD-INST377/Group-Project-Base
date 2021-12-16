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

urlUnem = '/api/unemployment';
async function UnemStats(urlUnem, UnemTable) {
    const responseUnem = await fetch(urlUnem);
    const dataUnem = await responseUnem.json();
    console.log(dataUnem[1]);

    for (var key in dataUnem) {
        var rowUnem = `<tr>
                  <td>${dataUnem[key].county}</td>
                  <td>${dataUnem[key].Averege_Unemployment_Rate}</td>
              </tr>`
        UnemTable.innerHTML += rowUnem
    }
}
UnemStats(urlUnem, document.querySelector('#UnemTable'));