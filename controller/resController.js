const resGet = `SELECT reservation_id, reservation_date, customer_id, gallery_id
FROM reserved`;

const resPut = `UPDATE reserved
SET art = :art
WHERE reservation_id = :reservation_id;`;

const resPost = `INSERT INTO reserved (reservation_id, reservation_date, customer_id, gallery_id)
VALUES(DEFAULT, :art);`

const resDelete = `DELETE FROM reserved
WHERE reservation_id = :reservation_id;`

export default {
  resGet, resPut, resPost, resDelete 
};