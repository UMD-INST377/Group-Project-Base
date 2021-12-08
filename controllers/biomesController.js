const getBiomes = 'SELECT Animal_ID, common_name, biome_id, Biome, Continent FROM biome JOIN animals Where biome_id = Animal_id';

const putBiomes = `INSERT INTO biome (biome_id, Biome, Continent)
VALUES(DEFAULT, :biome_id, :Biome, :Continent);`;

const postBiomes = `UPDATE biome
SET biome_id = :biome_id, Biome = :Biome, Continent = :Continent
WHERE biome_id = :biome_id;`;

const deleteBiomes = `DELETE FROM biome
WHERE biome_id = :biome_id;`;

export default {
  getBiomes, putBiomes, postBiomes, deleteBiomes
};