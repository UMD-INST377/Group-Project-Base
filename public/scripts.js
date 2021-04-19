// async function getUSCharts() {
//     const songRequest = await fetch('/api/us');
//     const songData = await songRequest.json();
//     return songData;
// }

async function windowActions() {
    const request = await fetch('/api/us');
    const songData = await request.json;
    data = songData.data;
    // console.log(data);

    const usTopSong = document.querySelector('.us-top-songs');
    data.forEach((item) => {
        const appendItem = document.createElement('tr');

        appendItem.innerHTML = `
            <td>${item.us_top50_rank}</td>
            <td>${item.song_id}</td>
            <td>${item.artist_id}</td>
            <td>${item.streams}</td>`;

        usTopSong.append(appendItem);
    });
}

window.onload = windowActions;