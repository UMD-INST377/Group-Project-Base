// async function windowActions() {
//     const artistInfoEndpoint = '/api/artist_info'
//     const artistInfoRequest = await fetch(artistInfoEndpoint)
//     const artistInfoData = await request.json()

//     const playlistDetailsEndpoint = '/api/playlist_details'
//     const playlistDetailsRequest = await fetch(playlistDetailsEndpoint)
//     const playlistDetailsData = await request.json()

//     const songsEndpoint = '/api/songs'
//     const songsRequest = await fetch(songsEndpoint)
//     const songData = await request.json()

    
    const playlists = []
    const createPlaylist = (ev) => {
        ev.preventDefault(); 
        let playlist = {
            playlistName = document.getElementById('namePlaylist').value,
            title = document.getElementById('songTitle').value,
            artist = document.getElementById('artistBand').value,
            duration = document.getElementById('songDuration').value,
            explicity = document.
        }
        playlists.push(playlist)
        document.querySelector('form').reset()

        console.warn('added', {playlists})
        let pre = document.querySelector('#msg pre')
        pre.textContent = '\n' + JSON.stringify(playlists, '\t', 2)
    }

    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('submit').addEventListener('click', createPlaylist)
    })

        
    
// }

// window.onload = windowActions();