const covidStatsCustom = `SELECT county, 
    confirmed_deaths, 
    positive_cases, 
    county_death_prop 
    FROM county_information
    JOIN covid_statistics_by_county USING (county_ID)
    ORDER BY county`;
export default covidStatsCustom