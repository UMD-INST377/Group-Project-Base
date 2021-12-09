const extinctionGET = `SELECT Animal_ID, common_name, extinction_id, cause, age_species_went_extinct, 
FROM extinction;
JOIN animals
extinction_ID, cause, age_species_went_extinct`;

const extinctionPOST = `INSERT INTO extinction (extinction_ID, cause, age_species_went_extinct)
VALUES(DEFAULT, :cause, :age_species_went_extinct);`;

const extinctionPUT = `UPDATE extinction
SET cause = :cause, age_species_went_extinct = :age_species_went_extinct
WHERE Animal_ID = :Animal_ID;`;

const extinctionDELETE = `DELETE FROM extinction
WHERE extinction_ID = :extinction_ID;`;

export default {
  extinctionGET,
  extinctionPOST,
  extinctionPUT,
  extinctionDELETE
}