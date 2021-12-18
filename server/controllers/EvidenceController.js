const evGet = `SELECT evidence_id, method
FROM evidence`;

const evPut = `UPDATE evidence
SET method = :method
WHERE evidence_id = :evidence_id;`

const evPost = `INSERT INTO evidence (evidence_id,method)
VALUES(DEFAULT, :method);`

const evDelete = `DELETE FROM evidence
WHERE evidence_id = :evidence_id;`

export default {
  evGet,evPut,evPost,evDelete
};