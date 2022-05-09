const locationGet = `SELLECT location_code, location
FROM location`;

const locationPut = `UPDATE location
SET plants = :plants
WHERE location_code = :location_code;`;

const locationPost = `INSERT INTO location (loction_code, location)
VALUES(DEFAULT, :plants);`

const locationDelete = `DELETE FROM location
WHERE location_code = :location_code;`

export default {

  locationGet, locationPut, locationPost, locationDelete

};