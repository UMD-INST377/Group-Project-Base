const galGet = `SELECT gallery_id, capacity, gallery_name,          
                email, street, city, state, zip_code
                FROM galleries`;

const galPut = `UPDATE galleriers
                    SET art = :art
                    WHERE gallery_id = :gallery_id;`;

const galPost = `INSERT INTO galleries (gallery_id, capacity, gallery_name,     
                email, street, city, state, zip_code)
                VALUES(DEFAULT, :art);`;

const galDelete = `DELETE FROM galleries
                    WHERE gallery_id = :gallery_id;`;

export default {
  galGet, galPut, galPost, galDelete
};
