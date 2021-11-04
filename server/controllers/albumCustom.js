//sql query that join songs table to album table

export default `SELECT album_name,
  
song_name
FROM
  albums a
INNER JOIN songs s
  ON a.song_id = s.song_id;`;