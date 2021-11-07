const infoGet = `SELECT eruption_id, eruption_number, year, month, day, volcano_id, aoa_id, vei_id, evidence_id, cagetory_id
FROM eruption_info;`

const aoaPut = `SELECT eruption_id, eruption_number, year, month, day, volcano_id, aoa_id, vei_id, evidence_id, cagetory_id
FROM eruption_info;`

const aoaPost = `SELECT eruption_id, eruption_number, year, month, day, volcano_id, aoa_id, vei_id, evidence_id, cagetory_id
FROM eruption_info;`

const aoaDelete = `SELECT eruption_id, eruption_number, year, month, day, volcano_id, aoa_id, vei_id, evidence_id, cagetory_id
FROM eruption_info;`

export default {
  aoaGet, aoaPut, aoaPost, aoaDelete
};
