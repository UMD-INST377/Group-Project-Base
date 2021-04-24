function start(){
    async function ClickGenre(event){
        let genre = event.target.id;
        let request = await fetch(`/api/songs/${genre}`);
        sourceAlbums = await request.json();
    
        window.localStorage.setItem("filteredAlbums", JSON.stringify(sourceAlbums)); // Saving
        window.location.href = `/genre`; 
        
    }
    
    let element = document.getElementById('rock');
    element.onclick = ClickGenre;
    let element1 = document.getElementById('pop');
    element1.onclick = ClickGenre;
    let element2 = document.getElementById('alternative');
    element2.onclick = ClickGenre;
    let element3 = document.getElementById('indie');
    element3.onclick = ClickGenre;
    let element4 = document.getElementById('electronic');
    element4.onclick = ClickGenre;
    let element5 = document.getElementById('dance-music');
    element5.onclick = ClickGenre;
    let element6 = document.getElementById('soul');
    element6.onclick = ClickGenre;
    let element7 = document.getElementById('rock');
    element7.onclick = ClickGenre;
}

window.onload = start;
