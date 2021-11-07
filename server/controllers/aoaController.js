const aoaGet = `SELECT aoa_id, aoa
FROM eruption_aoa;`

const aoaPut = `SELECT aoa_id, aoa
FROM eruption_aoa;`

const aoaPost = `SELECT aoa_id, aoa
FROM eruption_aoa;`

const aoaDelete = `SELECT aoa_id, aoa
FROM eruption_aoa;`

export default {
  aoaGet, aoaPut, aoaPost, aoaDelete
};


/* Jia eruption_info endpoint*/
export default 'SELECT eruption_id, eruption_number, year, month, day, volcano_id, aoa_id, vei_id, evidence_id, cagetory_id'