async function getUSCharts() {
    const songRequest = await fetch('/api/wholeUSchart');
    const songData = await songRequest.json();
    return songData;
}

async function getGlobalCharts() {
    const songRequest = await fetch('/api/wholeGlobalChart');
    const songData = await songRequest.json();
    return songData;
}

async function windowActions() {
    const usResults = await getUSCharts();
    const globalResults = await getGlobalCharts();
    // console.table(usCharts.data);
    console.table(globalResults.data);
    const usCharts = usResults.data;
    const globalCharts = globalResults.data;

    const usTopSong = document.querySelector('.us-top-songs');
    usCharts.forEach((item) => {
        const appendItem = document.createElement('tr');

        appendItem.innerHTML = `
            <td>${item.us_top50_rank}</td>
            <td>${item.song_name}</td>
            <td>${item.artist_name}</td>
            <td>${item.streams}</td>`;

        usTopSong.append(appendItem);
    });

    const globalTopSong = document.querySelector('.global-top-songs');
    globalCharts.forEach((item) => {
        const appendItem = document.createElement('tr');

        appendItem.innerHTML = `
            <td>${item.global_top50_rank}</td>
            <td>${item.song_name}</td>
            <td>${item.artist_name}</td>
            <td>${item.streams}</td>`;

        globalTopSong.append(appendItem);
    });
}

window.onload = windowActions;