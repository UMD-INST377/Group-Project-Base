const getBiomes = 'SELECT biome_id, animal_id, Tropical_Rainforest, Temperate_Forest, Desert, Tundra, Grassland, Savanna, Freshwater, Marine FROM biomes;';

const putBiomes = `INSERT INTO biomes (biome_id, animal_id, Tropical_Rainforest, Temperate_Forest, Desert, Tundra, Grassland, Savanna, Freshwater, Marine)
VALUES(DEFAULT, :animal_id, :species, :weight_lbs);`;

const postBiomes = `UPDATE biomes
SET animal_id = :animal_id, Tropical_Rainforest = :Tropical_Rainforest, Temperate_Forest = :Temperate_Forest, Desert = :Desert, Tundra = :Tundra, Grassland = :Grassland, Savanna = :Savanna, Freshwater = :Freshwater, Marine = :Marine
WHERE biome_id = :biome_id;`;

const deleteBiomes = `DELETE FROM biomes
WHERE biome_id = :biome_id;`;

export default {getBiomes, putBiomes, postBiomes, deleteBiomes};
