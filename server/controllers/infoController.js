const infoGet = `SELECT eruption_id, eruption_number, year, month, day, volcano_id, aoa_id, vei_id, evidence_id, cagetory_id
FROM eruption_info;`

const infoPut = `UPDATE eruption_info
SET eruption_number = :eruption_number, 
year = :year, 
month = :month, 
day = :day, 
volcano_id = :volcano_id, 
aoa_id = :aoa_id, 
vei_id = :vei_id, 
evidence_id = :evidence_id, 
cagetory_id = :cagetory_id
WHERE eruption_id = :eruption_id;`

const infoPost = `INSERT INTO eruption_info(eruption_id, eruption_number, year, month, day, volcano_id, aoa_id, vei_id, evidence_id, cagetory_id)
VALUES(DEFAULT, :eruption_number, :year, :month, :day);`

const infoDelete = `DELETE FROM eruption_info
WHERE eruption_id = :eruption_id;`

export default {
  infoGet, infoPut, infoPost, infoDelete
};
