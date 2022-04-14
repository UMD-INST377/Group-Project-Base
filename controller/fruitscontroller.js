const fruitsGet = `SELLECT fruit_id, plant_id, type, color, season, size
FROM fruits`;

const fruitsPut = `UPDATE fruits
SET plants = :plants
WHERE fruit_id = :fruit_id;`;

const fruitsPost = `INSERT INTO fruits (fruit_id, plant_id, type, color, season, size)
VALUES(DEFAULT, :plants);`

const fruitsDelete = `DELETE FROM fruits
WHERE fruit_id = :fruit_id;`

export default {
    fruitsGet, fruitsPut, fruitsPost, fruitsDelete
};