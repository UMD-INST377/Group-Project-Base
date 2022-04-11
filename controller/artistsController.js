const artistGet = `SELECT artist_id, first_name, last_name, country_id
FROM designer`;

const artPut = `UPDATE designer
SET art = :art
WHERE artist_id = :artist_id;`;

const artPost = `INSERT INTO designer (artist_id, first_name, last_name, country_id)
VALUES(DEFAULT, :art);`

const artDelete = `DELETE FROM designer
WHERE artist_id = :artist_id;`

export default {
  artistGet, artPut, artPost, artDelete 
};