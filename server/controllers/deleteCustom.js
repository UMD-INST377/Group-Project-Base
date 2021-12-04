/*sql query deletes songs from our database */

const deleteCustom = `DELETE song_name,
  
FROM
  albums a
INNER JOIN songs s
  ON a.song_id = s.song_id;`;

export default {
  deleteCustom
};