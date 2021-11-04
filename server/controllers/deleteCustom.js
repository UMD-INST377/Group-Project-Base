/*sql query deletes songs from our database */

export default `DELETE song_name,
  
FROM
  albums a
INNER JOIN songs s
  ON a.song_id = s.song_id;`;