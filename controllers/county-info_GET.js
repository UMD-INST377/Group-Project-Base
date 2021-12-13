const countyInfo = `SELECT county_ID, county, population
                    FROM county_information
                    WHERE population > 500000`;
export default countyInfo