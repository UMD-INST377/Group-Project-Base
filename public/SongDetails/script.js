async function SongTable() {
    const request = await fetch('/api/wholePlaylist');
    const playlists = await request.json();
    const playlists1 = playlists.data
    const tab = document.querySelector("#info");

    console.table(playlists1)
    playlists1.forEach((element) => {
        const appendItem = document.createElement("tr");
        appendItem.innerHTML = `<th class='tbody'>${element.playlist_name}</th>
        <td class='tbody'>${element.song_title}</td>
        <td class='tbody'>${element.song_duration}`;
        tab.append(appendItem);
    });
}

async function WindowActions() {
  await SongTable();
}

window.onload = WindowActions;
