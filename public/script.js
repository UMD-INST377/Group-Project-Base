async function ClickGenre(event){
    let genre = event.target.id;
    let request = await fetch('/api/songs/'+ genre);
    sourceAlbums = await request.json();

    window.localStorage.setItem("filteredAlbums", JSON.stringify(sourceAlbums)); // Saving
    var cart = JSON.parse(window.localStorage.getItem("flteredAlbums")); // Retrieving   
    // Simulate a mouse click:
window.location.href = ""; 
} 