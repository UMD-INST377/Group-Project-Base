// Controllers for lab 10
// AUTHOR: Jim
// retrieve census table data from database

// requests for the census endpoints in apiRoutes.js
// basic templates for lab 10, might change stuff for lab 11 to better reflect tasks
const getCensusSQL = 'SELECT * FROM md_census_data';
// the backslashes are needed for new lines in the query string \
const postCensusSQL = 'INSERT INTO md_census_data (census_zcta, census_identifier, median_age, num_persons_over_65, \
                       total_population, homeowner_rate, percent_homeowner_without_mortgage,percent_rent) \
                       VALUES \
                       (:census_zcta, :census_id, :median_age, :num_person_over_65, :total_population, :homeowner_rate, \
                       :percent_homeowner_without_mortgage, :percent_rent)'; // INSERT INTO [table name] (column names) VALUES (column names)
const putCensusSQL = 'UPDATE md_census_data \
                      SET total_population = :total_population \
                      WHERE census_zcta = :census_zcta;';
const deleteCensusSQL = 'DELETE FROM md_census_data ORDER BY census_zcta desc limit 1'; // delete last row - if you do this make sure to save the last row so you can put it back

export default {
  getCensusSQL,
  postCensusSQL,
  putCensusSQL,
  deleteCensusSQL
};


// group ignore this stuff, just used by me for testing
//?census_id=2421930&median_age=50.3&num_person_over_65=22&total_population=94&homeowner_rate=23.9&percent_homeowner_without_mortgage=54.2&percent_rent=47.8
//	2421930	50.3	22	94	23.9	54.2	47.8
