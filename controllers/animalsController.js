const animalsGET = `SELECT Animal_ID, common_name, species, weight_lbs
FROM animals;`;

const animalPOST = `INSERT INTO animals (Animal_ID, common_name, species, weight_lbs)
VALUES(DEFAULT, :common_name, :species, :weight_lbs);`;

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