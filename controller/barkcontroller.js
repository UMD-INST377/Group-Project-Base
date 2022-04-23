const barkGet = `SELECT bark_id, plant_id, new_color, new_texture, mature_color, mature_texture
FROM bark`;

const barkPut = `UPDATE bark
SET plants = :plants
WHERE bark_id = :bark_id;`;

const barkPost = `INSERT INTO bark (bark_id, plant_id, new_color, new_texture, mature_color, mature_texture)
VALUES(DEFAULT, :plants, :new_color, :new_texture, :mature_color, :mature_texture);`

const barkDelete = `DELETE FROM bark
WHERE bark_id = :bark_id;`

export default {
    barkGet, barkPut, barkPost, barkDelete
};
