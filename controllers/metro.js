const getMetroSQL = 'SELECT * FROM small_dev_metro_areas';
const postMetroSQL = 'INSERT INTO small_dev_metro_areas (metro_zcta, metro_area) VALUES (:metro_zcta, :metro_area)'
const putMetroSQL = 'UPDATE small_dev_metro_areas SET metro_area = :metro_area WHERE metro_zcta = :metro_zcta'
const deleteMetroSQL = 'DELETE FROM small_dev_metro_areas ORDER BY metro_zcta desc limit 1';
export default {
  getMetroSQL,
  postMetroSQL,
  putMetroSQL,
  deleteMetroSQL
};