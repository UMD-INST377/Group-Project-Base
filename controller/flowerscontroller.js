const flowersGet = `SELLECT flower_id, plant_id, size, color, inflorescence,season, reproduction
FROM flowers`;

const flowersPut = `UPDATE flowers
SET plants = :plants
WHERE flower_id = :flower_id;`;

const flowersPost = `INSERT INTO flowers (flower_id, plant_id, size, color, inflorescence,season, reproduction)
VALUES(DEFAULT, :plants);`;

const flowersDelete = `DELETE FROM flowers
WHERE flower_id = :flower_id;`;

export default {
  flowersGet, flowersPut, flowersPost, flowersDelete
};