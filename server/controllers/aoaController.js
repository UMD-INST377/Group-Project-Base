const aoaGet = `SELECT aoa_id, aoa
FROM eruption_aoa;`

const aoaPut = `UPDATE eruption_aoa
  SET aoa = :aoa 
  WHERE aoa_id = :aoa_id;`

const aoaPost = `INSERT INTO eruption_aoa (aoa_id, aoa)
VALUES(DEFAULT, :aoa);`

const aoaDelete = `DELETE FROM eruption_aoa
WHERE aoa_id = :aoa_id;`

export default {
  aoaGet, aoaPut, aoaPost, aoaDelete
};