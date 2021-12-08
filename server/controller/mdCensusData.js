export default `SELECT census_zcta,
    census_identifier,
    median_age,
    num_persons_over_65,
    total_population,
    homeowner_rate,
    percent_homeowner_without_mortgage,
    percent_rent
FROM
    md_census_data
INNER JOIN tax_credit_companies 
    ON md_census_data.census_zcta = tax_credit_companies.company_zcta;`;