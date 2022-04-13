const galGet = `SELECT gallery_id, capacity, gallery_name,          
                email_address, street_address, city, state, zipcode
                FROM design`;

const galPut = `UPDATE gallery
                    SET art = :art
                    WHERE gallery_id = :gallery_id;`;

const galPost = `INSERT INTO gallery (gallery_id, capacity, gallery_name,     
                email_address, street_address, city, state, zipcode)
                VALUES(DEFAULT, :art);`;

const galDelete = `DELETE FROM gallery
                    WHERE gallery_id = :gallery_id;`;

export default {
  galGet, galPut, galPost, galDelete
};
