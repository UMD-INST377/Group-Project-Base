export default `SELECT total_population AS Population,
FROM
    md_census_data mcd
INNER JOIN total_population tp 
  ON mcd.census_zcta = mcd.tp`;