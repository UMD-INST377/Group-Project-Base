/** SQL Statements
 *
 * Here we're using SELECT statments to get all songs from our database,
 * displaying song title along with album name and duration.
 */

const getAllSongs = 'SELECT song_id, song_name, album_name, first_name, last_name, ratings FROM songs_project';

const getSongsByID = 'SELECT song_id, song_name, album_name, first_name, last_name, ratings FROM songs_project';

/* Exporting variables */

export default {
  getAllSongs,
  getSongsByID
};