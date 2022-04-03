//Created by Bryan Pham


let stars = document.querySelectorAll('.fa-star') ;

//add eventlistener to each star to show favorited
for (const star of stars) {
    star.addEventListener('click', (e)=> {
        star.classList.toggle('favorited');
    })
}



