const unemploymentRate = `SELECT county_ID,
    month,
    rate
FROM
    unemployment_rate(2020)`;
export default unemploymentRate;