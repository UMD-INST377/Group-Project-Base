export default `SELECT album_name, s.song_name, first_name, last_name, duration 
FROM rating r
INNER JOIN songs s
    ON r.song_id = s.song_id
JOIN albums a
    ON s.song_id = a.song_id
JOIN album_has_artist b
    ON b.album_id = a.album_id
JOIN artist c 
    ON b.artist_id = c.artist_id;`;
