function windowActions() {
  const dropdown = document.querySelector('#dropdown');

dropdown.onclick = function(e) { 
 console.log(e)
 e.path[3].classList.toggle('is-active');
}


}


function test(e) {
  console.log(e);
  // e.target.parentnode.classList.toggle('is-active');
}

window.onload = windowActions;