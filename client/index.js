// Request and Compile SONGS information
// const songsRequest = await fetch('http://localhost:3000/api/songs')
const songsRequest = await fetch('https://inst377-vinylweb.herokuapp.com/api/songs')
const allSongs = await songsRequest.json()


// SONGS Contents
const songs_content = document.createElement('div');
songs_content.className = 'heading heading-songs';
const songs_table = document.createElement('table')
songs_table.className = 'songs-table'
songs_content.appendChild(songs_table)

// Selects only songs relevant to that album
const albumSongs = [];
allSongs.forEach((song) => {
  if (Number(id)+1 === song['vinyl_id']) {
    albumSongs.push(song);
  }
});

// Creates a first row for category's for song description
const song_headers = document.createElement('tr')
song_headers.className = 'songs-headers'
song_headers.innerHTML = `  <th>Track Name</th>
                            <th>Duration</th>
                            <th>Key</th>
                            <th>BPM</th>`
songs_table.appendChild(song_headers);

// Creates a row for each song
albumSongs.forEach((song) => {
    const song_row = document.createElement('tr')
    song_row.className = 'songs-row'
    song_row.innerHTML = `  <td class="song-name">${song['song_name']}</td> 
                            <td class="duration">${song['duration']}</td>
                            <td class="key">${song['key']}</td>
                            <td class="bpm">${song['bpm']}</td>`
    songs_table.appendChild(song_row)
});

        