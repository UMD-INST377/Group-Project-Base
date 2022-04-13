const countryGet = `SELECT country_id, country_name, country_nationality
FROM province`;

const countryPut = `UPDATE province
SET art = :art
WHERE country_id = :country_id;`;

const countryPost = `INSERT INTO province (country_id, country_name, country_nationality)
VALUES(DEFAULT, :art);`

const countryDelete = `DELETE FROM province
WHERE country_id = :country_id;`

export default {
  countryGet, countryPut, countryPost, countryDelete 
};