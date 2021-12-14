const veiGet = `SELECT vei_id, vei
FROM vei;`;

const veiPut = `UPDATE vei
SET vei = :vei 
WHERE vei_id = :vei_id;`;

const veiPost = `INSERT INTO vei (vei_id, vei)
VALUES(DEFAULT, :vei);`;

const veiDelete = `DELETE FROM vei
WHERE vei_id = :vei_id;`;

export default {
  veiGet,
  veiPut,
  veiPost,
  veiDelete
};
