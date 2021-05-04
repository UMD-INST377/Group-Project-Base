function getData(){
    let result = JSON.parse(window.localStorage.getItem("filteredAlbums")); // Retrieving   
    // Simulate a mouse click:
    let html = '';
    result.forEach(element => {
        html += `
        <table>
            <tr>
                <th>Song Title</th>
                <th>Genre</th>
                <th>Release Date</th>
                <th>Song Length</th>
            </tr>
            <tr>
                <td>${element.title}</td>
                <td>${element.genre}</td>
                <td>${element.release_date}</td>
                <td>${element.song_length}</td>
            </tr>
        </table>
        `
    });

    element = document.getElementById('contra1');
    element.innerHTML = html;
}

function start(){
    getData();
}

window.onload = start();