const unemploymentRate = `SELECT county, ROUND(AVG(rate),2) AS Averege_Unemployment_Rate
FROM county_information
JOIN unemployment_rate_2020 USING (county_ID)
GROUP BY county`;
export default unemploymentRate;