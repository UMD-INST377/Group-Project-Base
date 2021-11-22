function windowActions() {
    const dropdown = document.querySelector('#dropdown');

function toggle(e) { 
   if(e.target.id === "dropdown") {
       if(e.target.classlist.contains('is-active')) {
           e.target.classlist.remove('is-active');
       }
   }

}

dropdown.addEventListener('click', toggle);
}

window.onload = windowActions;