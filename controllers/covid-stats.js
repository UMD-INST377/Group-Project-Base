const covidStatsCustom = `SELECT confirmed_deaths, 
  positive_cases, 
  county_death_prop,
  county_ID
FROM
  covid_statistics_by_county`;

export default {
  covidStatsCustom
}