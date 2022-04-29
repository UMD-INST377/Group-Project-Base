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
}