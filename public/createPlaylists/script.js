// async function windowActions() {
//     const artistInfoEndpoint = '/api/artist_info'
//     const artistInfoRequest = await fetch(artistInfoEndpoint)
//     const artistInfoData = await request.json()

// const { format } = require("sequelize/types/lib/utils");

//     const playlistDetailsEndpoint = '/api/playlist_details'
//     const playlistDetailsRequest = await fetch(playlistDetailsEndpoint)
//     const playlistDetailsData = await request.json()

//     const songsEndpoint = '/api/songs'
//     const songsRequest = await fetch(songsEndpoint)
//     const songData = await request.json()

    
   
function windowActions(){
    async function createPlaylist(){
        const form = document.querySelector('form')
        const user = document.querySelector('#user')
        const playlistName = document.querySelector('#namePlaylist')
        const songs = document.querySelector('#songs')
        const artist = document.querySelector('#followers')
        const duration = document.querySelector('#songDuration')
        console.log(duration)


        form.addEventListener('submit', async(event)=> {
            event.preventDefault();
            console.info('submitted form', event.target);
            
            
            
            const post = await fetch('/api/playlists',
            {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({ 
                    user_id: user.value,
                    playlist_name: playlistName.value,
                    number_of_songs: songs.value,
                    number_of_followers: artist.value,
                    total_time: duration.value,})
            });
            
        
        
    })

};


createPlaylist();
}
   

window.onload = windowActions; 
