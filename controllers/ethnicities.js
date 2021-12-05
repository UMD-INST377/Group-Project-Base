const getEthnicitiesSQL = 'SELECT * FROM MD_Ethnicities';
const postEthnicitiesSQL = 'INSERT INTO MD_Ethnicities(ethnicity_zcta, ethnicity_id, ethnic_category, ethnic_count) VALUES (:ethnicity_zcta, :ethnicity_id, :ethnic_category, :ethnic_count)'
const putEthnicitiesSQL = 'UPDATE MD_Ethnicities SET ethnicity_id = :ethnicity_id, ethnic_category = :ethnic_category WHERE ethnicity_zcta = :ethnicity_zcta';
const deleteEthnicitiesSQL = 'DELETE FROM MD_Ethnicities ORDER BY ethnicity_zcta desc limit 1';
export default {
  getEthnicitiesSQL,
  postEthnicitiesSQL,
  putEthnicitiesSQL,
  deleteEthnicitiesSQL
}