const covidStatsCustom = `SELECT county_ID, 
    confirmed_deaths, 
    positive_cases, 
    county_death_prop 
FROM 
    covid_statistics_by_county`;
export default covidStatsCustom