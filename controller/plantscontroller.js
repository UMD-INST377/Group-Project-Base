const plantsGet = `SELLECT plant_id, botanical_name, common_name, origin, growth_habit, max_height, max_width, duration, family_id
FROM plants`;

const plantsPut = `UPDATE plants
SET plants = :plants
WHERE plant_id = :plant_id;`;

const plantsPost = `INSERT INTO plants (plant_id, botanical_name, common_name, origin, growth_habit, max_height, max_width, duration, family_id)
VALUES(DEFAULT, :plants);`

const plantsDelete = `DELETE FROM plants
WHERE plant_id = :plant_id;`

export default {

  plantsGet, plantsPut, plantsPost, plantsDelete


};