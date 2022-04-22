const artistGet = `SELECT artist_id, first_name, last_name, country_id
FROM artists;`;

const artPut = `
WHERE artist_id: req.body.artist_id;`;

const artPost = `INSERT INTO artists (artist_id, first_name, last_name, country_id)
VALUES('${req.body.artist_id}','${req.body.first_name}','${req.body.last_name}','${req.body.country_id}')`;

const artDelete = `DELETE FROM artists
WHERE artist_id = :artist_id;`

export default {
  artistGet, artPut, artPost, artDelete 
};