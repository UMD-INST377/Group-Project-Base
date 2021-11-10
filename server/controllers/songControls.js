/** SQL Statements
 *
 * Here we're using SELECT statments to get all songs from our database,
 * displaying song title along with album name and duration.
 */

const getAllSongs = `SELECT s.song_name, first_name, last_name, duration 
    FROM rating r
    INNER JOIN songs s
        ON r.song_id = s.song_id
    JOIN albums a
        ON s.song_id = a.song_id
    JOIN album_has_artist b
        ON b.album_id = a.album_id
    JOIN artist c 
        ON b.artist_id = c.artist_id`;

const getSongsByRating = `SELECT s.song_name, album_name, first_name, last_name, r.ratings, description, duration
    FROM rating r
    INNER JOIN songs s
        ON r.song_id = s.song_id
    JOIN albums a
        ON s.song_id = a.song_id
    JOIN album_has_artist b
        ON b.album_id = a.album_id
    JOIN artist c 
        ON b.artist_id = c.artist_id`;

/* Exporting variables */
export default {
  getAllSongs,
  getSongsByRating
};