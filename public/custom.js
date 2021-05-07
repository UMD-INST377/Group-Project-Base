async function windowActions() {
    console.log('loaded window');

    const form = document.querySelector('#recordSubmit')
    const name = document.querySelector('#song')
    const artist = document.querySelector('#artist')
    const genre = document.querySelector('#genre')

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.info('submitted form', e.target);
        //const formData = ()
        const post = await Promise.all(
            fetch('/api/songs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
          },
          body: JSON.stringify({SONG_NAME: name.value}),        
                 
          
        }),
        fetch('/api/artists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
          },
         body: JSON.stringify({ARTIST_NAME: artist.value})
        }), 
        fetch('/api/genres', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
          },
          body: JSON.stringify({GENRE_NAME: genre.value})
        }) 
        );
    });

}

window.onload = windowActions;