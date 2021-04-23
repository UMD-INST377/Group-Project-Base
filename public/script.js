async function ClickGenre(event){
    let genre = event.target.id;
    let request = await fetch(`/api/songs/${genre}`);
    sourceAlbums = await request.json();

    window.localStorage.setItem("filteredAlbums", JSON.stringify(sourceAlbums)); // Saving
    //window.location.href = `/api/songs/${genre}`; 
    
}

let element = document.getElementById('pop');
element.onclick = ClickGenre;
