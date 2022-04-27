const foliageGet = `SELLECT foliage_id, color, fall_color, max_length, max_width
FROM foliage`;

const foliagePut = `UPDATE foliage
SET plants = :plants
WHERE foliage_id = :foliage_id;`;

const foliagePost = `INSERT INTO foliage (foliage_id, color, fall_color, max_length, max_width)
VALUES(DEFAULT, :plants);`

const foliageDelete = `DELETE FROM foliage
WHERE foliage_id = :foliage_id;`

export default {

  foliageGet, foliagePut, foliagePost, foliageDelete


};