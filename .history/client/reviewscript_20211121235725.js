function windowActions() {
  const dropdown = document.querySelector('#dropdown');

function toggle(e) { 

}


dropdown.addEventListener('click', toggle);
}


function test(e) {
  console.log(e);
  // e.target.parentnode.classList.toggle('is-active');
}

window.onload = windowActions;