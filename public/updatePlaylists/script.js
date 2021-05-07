async function windowActions(){
function getName(){
    document.querySelector("#pname").innerHTML = localStorage.getItem("playlistName");
}

async function getPlaylistDetails(pname){
    const form = document.querySelector('#update-form')
    const pdid = document.querySelector('#playlistDetailsID')
    const sid = document.querySelector('#songId')
    const stitle = document.querySelector('#songTitle')
    const aid = document.querySelector('#artistId')
    const sdur = document.querySelector('#songDuration')
    const plid = document.querySelector('#playlistId')

    const request = await fetch('/api/playlists')
    const data = await request.json();
    const item = data.filter((record)=> record.playlist_name.includes(localStorage.getItem('playlistName')))
    
    
    
    document.querySelector('#details').innerHTML = `${item[0]['playlist_id']} `

    form.addEventListener('submit', async(event)=> {
        event.preventDefault();
        console.info('submitted form', event.target);
        const post = await fetch('/api/playlistDetails',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({ 
                // playlist_details_id: pdid.value,
                FK_song_id: sid.value,
                song_title: stitle.value,
                artist_id: aid.value,
                song_duration: sdur.value,
                FK_playlist_id: plid.value})
        });
    });

}



getName()
getPlaylistDetails()
}


window.onload = windowActions;