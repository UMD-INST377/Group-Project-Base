const data = {   
  getAlbum:  `SELECT album_id, album_name, album_release_date, record_label_id
                FROM album;`,

  putAlbum: '',

  postAlbum:   `INSERT INTO album (album_name, album_release_date, record_label_id, album_id)
                VALUES (:album_name, :album_release_date, :record_label_id, :album_id);`,

  getSongs: `SELECT song_writer_id, song_writer_first_name, song_writer_last_name, song_writer_birth_date
                FROM songs;`,

  getSongWriters: `SELECT song_id, track_name, track_duration, album_id, explicit
                    FROM songwriters;`,

  getPerformers: `SELECT artist_id, artist_first_name, artist_last_name, country_of_origin, gender, birth_date
                    FROM performers`
};

export default data;