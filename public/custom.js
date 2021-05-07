

async function windowActions() {
    console.log('loaded window');

    const form = document.querySelector('#recordSubmit')
    const name = document.querySelector('#song')
    const artist = document.querySelector('#artist')

    // artist.hasMany(name);

    // const genre = document.querySelector('#genre')


    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.info('submitted form', e.target);
        // const formData = ()
        const post = await Promise.all([
            fetch('/api/songs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
          },
          body: JSON.stringify({SONG_NAME: name.value})                      
          
        }),
        fetch('/api/artists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
          },
         body: JSON.stringify({ARTIST_NAME: artist.value})
        }),
    ]).then(function (responses) {
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {
        console.log(data);
    }).catch(function (error) {
        console.log(error);
    });
    });

}

async function handleButtonClick(event) {
    console.log('clicked button', event.target);
    console.log('button value', event.target.value);
    const song = document.querySelector('#song');
    const url = '/api/songs';
    const request = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ SONG_NAME: song.value })
    });
    console.log('resolved request', request);
    const result = await request.json();
    console.log(result);
  
    // do something with a result here
  }

window.onload = windowActions;