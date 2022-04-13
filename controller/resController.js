const resGet = `SELECT reservation_id, reservation_date, customer_id, gallery_id
FROM reservation`;

const resPut = `UPDATE reservation
SET art = :art
WHERE reservation_id = :reservation_id;`;

const resPost = `INSERT INTO reservation (reservation_id, reservation_date, customer_id, gallery_id)
VALUES(DEFAULT, :art);`

const resDelete = `DELETE FROM reservation
WHERE reservation_id = :reservation_id;`

export default {
  resGet, resPut, resPost, resDelete 
};