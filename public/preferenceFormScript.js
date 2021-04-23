const fpClear = document.querySelector('#fpClear');
const cpClear = document.querySelector('#cpClear');

function clearButtons() {
  fpClear.addEventListener('click', () => {
    console.log('Furniture Clear Clicked');
    document.getElementById('Chairs').checked = false;
    document.getElementById('Sofas').checked = false;
    document.getElementById('Beds').checked = false;
    document.getElementById('Drawers').checked = false;
    document.getElementById('Rugs').checked = false;
  });

  cpClear.addEventListener('click', () => {
    console.log('Color Clear Clicked');
    document.getElementById('Black').checked = false;
    document.getElementById('White').checked = false;
    document.getElementById('Brown').checked = false;
    document.getElementById('Yellow').checked = false;
    document.getElementById('Oak').checked = false;
  });
}

async function windowActions() {
  clearButtons();
}

window.onload = windowActions();