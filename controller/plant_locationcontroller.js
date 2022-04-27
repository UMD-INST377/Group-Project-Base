
const plantLocationGet = `SELLECT plant_id, location_code
FROM plantLocation`;

const plantLocationPut = `UPDATE plantLocation
SET plants = :plants
WHERE plant_id = :plant_id;`;

const plantLocationPost = `INSERT INTO plantLocation (plant_id, plant_id, type, color, season, size)
VALUES(DEFAULT, :plants);`

const plantLocationDelete = `DELETE FROM plantLocation
WHERE plant_id = :plant_id;`

export default {
  plantLocationGet, plantLocationPut, plantLocationPost, plantLocationDelete

const plant_locationGet = `SELLECT plant_id, location_code
FROM plant_location`;

const plant_locationPut = `UPDATE plant_location
SET plants = :plants
WHERE plant_id = :plant_id;`;

const plant_locationPost = `INSERT INTO plant_location (plant_id, plant_id, type, color, season, size)
VALUES(DEFAULT, :plants);`

const plant_locationDelete = `DELETE FROM plant_location
WHERE plant_id = :plant_id;`

export default {
    plant_locationGet, plant_locationPut, plant_locationPost, plant_locationDelete

};