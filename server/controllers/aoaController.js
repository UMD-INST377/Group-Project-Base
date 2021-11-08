const aoaGet = `SELECT aoa_id, aoa
FROM eruption_aoa;`

const aoaPut = `SELECT aoa_id, aoa
FROM eruption_aoa;`

const aoaPost = `SELECT aoa_id, aoa
FROM eruption_aoa;`

const aoaDelete = `DELETE FROM eruption_aoa
WHERE aoa_id = ???;`

export default {
  aoaGet, aoaPut, aoaPost, aoaDelete
};