const fightmodeGET = `SELECT Animal_ID, fight_mode_id, special_skill, weapon_of_choice
FROM fight_mode
JOIN animals
WHERE animals_Animal_ID = animals_ID;`;

const fightmodePOST = `INSERT INTO fight_mode (fight_mode_id, special_skill, weapon_of_choice)
VALUES(DEFAULT, :fight_mode_id, :special_skill, :weapon_of_choice);`;

const fightmodePUT = `UPDATE fight_mode
SET fight_mode_id = :fight_mode_id, special_skill = :special_skill, weapon_of_choice = :weapon_of_choice
WHERE fight_mode_id = :fight_mode_id;`;

const fightmodeDELETE = `DELETE FROM fight_mode
WHERE fight_mode_id = :fight_mode_id;`;

export default {
  fightmodeGET, fightmodePUT, fightmodePOST, fightmodeDELETE
};
