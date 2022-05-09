/* eslint-disable linebreak-style */
const mapGet = `SELECT location_code, plant_id, botanical_name, common_name, origin, growth_habit, max_height, max_width, duration
FROM plants.plant_locations JOIN plants.plants USING(plant_id);`;

const mapPost = `INSERT INTO plants.plant_locations (plant_id, location_code)
VALUES(:plant_id, :location_code);`;

const mapPut = `UPDATE plants.plant_locations SET plant_id = :plant_id, location_code = :location_code
WHERE plant_id = :id AND location_code = :code
LIMIT 1;`;

const mapDelete = `DELETE FROM plants.plant_locations
WHERE `;

export default {
  mapGet, mapPost, mapPut
};