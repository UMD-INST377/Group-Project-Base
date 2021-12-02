const getPopulationSQL = 'SELECT * FROM md_pop_stats';
const postPopulationSQL = 'INSERT INTO md_pop_stats (popstat_zcta, pop_percent_id, pop_percent_category, pop_count) VALUES (:popstat_zcta, :pop_percent_id, :pop_percent_category, :pop_count)'
const putPopulationSQL = 'UPDATE md_pop_stats SET pop_count = :pop_count WHERE popstat_zcta = :popstats_zcta'
const deletePopulationSQL = 'DELETE FROM md_pop_stats ORDER BY popstat_zcta desc limit 1';
export default {
  getPopulationSQL,
  postPopulationSQL,
  putPopulationSQL,
  deletePopulationSQL
};