export default `SELECT census_zcta,
    census_identifier,
    median_age,
    num_persons_over_65,
    total_population,
    homeowner_rate,
    percent_homeowner_without_mortgage,
    percent_rent,
    community_identifier,
    pct_foreign_born,
    pct_poverty,
    pct_unemployed,
    pct_bachelors,
    median_household_income,
    pct_little_english
FROM
    md_census_data
INNER JOIN community_survey 
    ON md_census_data.census_identifier = community_survey.community_identifier;`;