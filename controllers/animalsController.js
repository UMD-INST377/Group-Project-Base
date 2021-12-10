const animalsGET = `SELECT Animal_ID, common_name, species, weight_lbs, cause, age_species_went_extinct
FROM animals
JOIN extinction
WHERE extinction_extinction_id = extinction_id;`;

const animalPOST = `INSERT INTO animals (common_name, species, weight_lbs, fight_mode_fight_mode_id, hierarchy_hierarchy_id, lifestyle_lifestyle_id, extinction_extinction_id)
VALUES(:common_name, :species, :weight_lbs, :fight_mode_fight_mode_id, :hierarchy_hierarchy_id, :lifestyle_lifestyle_id, :extinction_extinction_id);`;

const animalPUT = `UPDATE animals
SET common_name = :common_name, weight_lbs = :weight_lbs, species = :species
WHERE Animal_ID = :Animal_ID;`;

const animalDELETE = `DELETE FROM animals
WHERE Animal_ID = :Animal_ID;`;

export default {
  animalsGET,
  animalPOST,
  animalPUT,
  animalDELETE
}