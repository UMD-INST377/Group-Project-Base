const countryGet = `SELECT country_id, country_name, country_nationality
FROM country`;

const countryPut = `UPDATE country
SET art = :art
WHERE country_id = :country_id;`;

const countryPost = `INSERT INTO country (country_id, country_name, country_nationality)
VALUES(DEFAULT, :art);`

const countryDelete = `DELETE FROM country
WHERE country_id = :country_id;`

export default {
  countryGet, countryPut, countryPost, countryDelete 
};