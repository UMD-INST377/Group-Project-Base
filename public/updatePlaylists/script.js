function windowActions(){function getName(){
    document.querySelector("#pname").innerHTML = localStorage.getItem("playlistName");
}

//Code pen https://codepen.io/Arckays/pen/eGjjPL
// let addbutton = document.getElementById("add");
// addbutton.addEventListener("click", function() {
// let boxes = document.getElementById("boxes");
// let clone = boxes.firstElementChild.cloneNode(true);
// boxes.appendChild(clone);
// });}



window.onload = windowActions;