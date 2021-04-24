async function getData(){
    let result = JSON.parse(window.localStorage.getItem("filteredAlbums")); // Retrieving   
    // Simulate a mouse click:
    let html = '';
    result.array.forEach(element => {
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
    return html;
}

function start(){
    document.querySelector('.container').innerHTML = getData;
}

window.onload = start();