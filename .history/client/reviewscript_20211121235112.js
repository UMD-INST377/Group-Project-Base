function windowActions() {
    const dropdown = document.querySelector('#dropdown');
    const reviewId = document.querySelector('.dropdown');

function toggle(e) { 
    console.log(e)
   if(e.target.id === "dropdown") {
       if(reviewId.classlist.contains('is-active')) {
            reviewId.classlist.remove('is-active');

       } else {
           reviewId.classlist.add('is-active');
       }
   }

}


dropdown.addEventListener('click', toggle);
}


function test() {
    console.log(test);
}

window.onload = windowActions;