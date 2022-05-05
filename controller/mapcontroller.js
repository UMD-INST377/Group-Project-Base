/* eslint-disable linebreak-style */
const mapGet = `SELECT location_code, plant_id, botanical_name, common_name, origin, growth_habit, max_height, max_width, duration
FROM plants.plant_locations JOIN plants.plants USING(plant_id);`;

export default {
  mapGet
};