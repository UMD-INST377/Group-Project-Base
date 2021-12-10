function windowActions() {
    const dropdown = document.querySelector('#dropdown');
    const reviewId = document.querySelector('.dropdown');

function toggle(e) { 
    console.log(e)
   if(e.target.id === "dropdown") {
       if(e.target.classlist.contains('is-active')) {
           e.target.classlist.remove('is-active');

       } else {
           e.target.classlist.add('is-active');
       }
   }

}

dropdown.addEventListener('click', toggle);
}

window.onload = windowActions;