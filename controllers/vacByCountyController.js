const vacByCountydata = `SELECT county, 
first_dose_count, first_dose_prop,
second_dose_count,
second_dose_prop 
FROM county_information
JOIN vaccine_data_by_county USING (county_ID)
ORDER BY county;`;
export default vacByCountydata;