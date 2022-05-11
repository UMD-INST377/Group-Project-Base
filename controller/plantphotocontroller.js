const plantPhotoGet = `SELECT photo_id, plant_id, photo, date
FROM photos`; 

const plantPhotoPut = `UPDATE photos
SET photo = :photo
WHERE photo_id = :photo_id`;

const plantPhotoPost = `INSERT INTO photos photos (photo_id, plant_id, photo, date)
VALUES(DEFAULT, :photo_id)`;

const plantPhotoDelete = `DELETE FROM photos
WHERE photo_id = :photo_id`;

export default {
    plantPhotoGet, plantPhotoPut, plantPhotoPost, plantPhotoDelete
};