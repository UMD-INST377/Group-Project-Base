/*sql query join songs table to album table(updates) */

const albumCustom = `SELECT album_name,
song_name
FROM
  albums a
INNER JOIN songs s
  ON a.song_id = s.song_id;`;

export default {
  albumCustom
};