function getName(){
    document.querySelector("#pname").innerHTML = localStorage.getItem("playlistName");
}



window.onload = getName;