async function getData(){
    let result = JSON.parse(window.localStorage.getItem("filteredAlbums")); // Retrieving   
    // Simulate a mouse click:
    let html = '';
    result.array.forEach(element => {
        html += `HTML COde GOES HERE ${element.title}, ${element.genre}, ${element.release_date}, ${element.song_length}
        Write the HTML format below here then use the the things above to display within html tags. 
        
        `
    });
    return html;
}

function start(){
    document.querySelector('.container').innerHTML = getData;
}

window.onload = start();