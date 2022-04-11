const artistGet = `SELECT artist_id, first_name, last_name, country_id
FROM artists`;

const artPut = `UPDATE artists
SET art = :art
WHERE artist_id = :artist_id;`;

const artPost = `INSERT INTO artists (artist_id, first_name, last_name, country_id)
VALUES(DEFAULT, :art);`

const artDelete = `DELETE FROM artists
WHERE artist_id = :artist_id;`

export default {
  artistGet, artPut, artPost, artDelete 
};