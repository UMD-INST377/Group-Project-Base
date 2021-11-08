const topicGet = `SELECT topic_id, volcanos_volcano_id, references_table_reference_id 
FROM volcanos_has_references_table;`

const topicPut = `SELECT topic_id, volcanos_volcano_id, references_table_reference_i
FROM volcanos_has_references_table;`

const topicPost = `SELECT topic_id, volcanos_volcano_id, references_table_reference_i
FROM volcanos_has_references_table;`

const topicDelete = `SELECT topic_id, volcanos_volcano_id, references_table_reference_i
FROM volcanos_has_references_table;`

export default {
  topicGet, topicPut, topicPost, topicDelete
};