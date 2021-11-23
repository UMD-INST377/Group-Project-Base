/** SQL Statements
 *
 * Here we're using SELECT statments to get all songs from our database,
 * displaying song title along with album name and duration.
 */

const getAllSongs = 'SELECT * FROM songs_project';

const getSongsByID = 'SELECT * FROM songs_project';

/* Exporting variables */

export default {
  getAllSongs,
  getSongsByID
};