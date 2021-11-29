function windowActions() {
  const dropdown = document.querySelector('#dropdown');

dropdown.onclick = function(e) { 
 e.target.parentnode.classList.toggle('is-active');
}


}


function test(e) {
  console.log(e);
  // e.target.parentnode.classList.toggle('is-active');
}

window.onload = windowActions;