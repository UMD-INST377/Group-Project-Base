const getEthnicitiesSQL = 'SELECT * FROM md_ethnicities';
const postEthnicitiesSQL = 'INSERT INTO md_ethnicities(ethnicity_zcta, ethnicity_id, ethnic_category, ethnic_count) VALUES (:ethnicity_zcta, :ethnicity_id, :ethnic_category, :ethnic_count)'
const putEthnicitiesSQL = 'UPDATE md_ethnicities SET ethnicity_id = :ethnicity_id, ethnic_category = :ethnic_category WHERE ethnicity_zcta = :ethnicity_zcta';
const deleteEthnicitiesSQL = 'DELETE FROM md_ethnicities ORDER BY ethnicity_zcta desc limit 1';
export default {
  getEthnicitiesSQL,
  postEthnicitiesSQL,
  putEthnicitiesSQL,
  deleteEthnicitiesSQL
}