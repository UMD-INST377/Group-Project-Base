const topicGet = `SELECT topic_id, volcanos_volcano_id, references_table_reference_id 
                  FROM volcanos_has_references_table;`
const topicPut = `UPDATE volcanos_has_references_table 
                  SET volcanos_volcano_id = :volcanos_volcano_id, 
                  references_table_reference_id = :references_table_reference_id
                  WHERE topic_id = :topic_id;`

const topicPost = `INSERT INTO volcanos_has_references_table(topic_id, volcanos_volcano_id, references_table_reference_id)
                   VALUES(DEFAULT, :volcanos_volcano_id, :references_table_reference_id);`

const topicDelete = `DELETE FROM volcanos_has_references_table
                     WHERE topic_id = :topic_id;`

export default {
  topicGet, topicPut, topicPost, topicDelete
};