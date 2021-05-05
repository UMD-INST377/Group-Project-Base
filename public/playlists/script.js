async function windowActions() {
    const endpoint = '/api/playlists';
    const request = await fetch(endpoint)
    const playlist = await request.json()

    function findMatches(nameToMatch, playlist) {
        return playlist.filter(place => {
            const regex = new RegExp(nameToMatch, 'gi');
            return place.playlist_name.match(regex)
        });
    }
    
    function displayMatches(event) {
        const matchArray = findMatches(event.target.value, playlist);
        const html = matchArray.map(item => {
            const regex = RegExp(event.target.value, 'g');
            const playName = item.playlist_name.replace(regex, `${event.target.value}`);
            return `
            <tr>
            <th class="tbody"><a href="/updatePlaylists/index.html">${playName}</a></th>
            <td class="tbody">${item.number_of_songs}</td>
            <td class="tbody">${item.total_time}</td>
            </tr>`;
        }).join('');
        suggestions.innerHTML = html;
    }

    const searchInput = document.querySelector('.search')
    const suggestions = document.querySelector('#info')
    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', (evt) => {displayMatches(evt)});

}
window.onload = windowActions;