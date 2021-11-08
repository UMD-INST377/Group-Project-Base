const mdCensusDataTaxCreditCompanies = `SELECT census_zcta,
    census_identifier,
    median_age,
    num_persons_over_65,
    total_population,
    homeowner_rate,
    percent_homeowner_without_mortgage,
    percent_rent
FROM
    md_census_data mcd
INNER JOIN tax_credit_companies tcc
    ON mcd.census_ztca = tcc.company_ztca;`;



