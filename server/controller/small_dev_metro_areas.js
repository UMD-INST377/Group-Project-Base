const metroAreas = `SELECT metro_zcta AS zip_code,
  metro_area
FROM
  small_dev_metro_areas sm
INNER JOIN md_census_data md
  ON md.census_zcta = sm.zip_code`;