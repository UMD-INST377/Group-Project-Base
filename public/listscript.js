function getData(){
    let result = JSON.parse(window.localStorage.getItem("filteredAlbums")); // Retrieving   
    // Simulate a mouse click:
    element = document.getElementById('contra1');
    let html = element.innerHTML;
    result.forEach(element => {
        html += `
            <tr>
                <td>${element.title}</td>
                <td>${element.genre}</td>
                <td>${element.release_date}</td>
                <td>${element.song_length}</td>
            </tr>
        `
    });

    element.innerHTML = html;
}

function start(){
    getData();
}

window.onload = start();