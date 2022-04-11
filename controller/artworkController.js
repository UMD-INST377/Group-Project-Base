const artworkGet = `SELECT artwork_id, artwork_title, year_created,          
                        serial_number, price, discount_price
                    FROM design`;

const artworkPut = `UPDATE design
                    SET art = :art
                    WHERE artwork_id = :artwork_id;`;

const artworkPost = `INSERT INTO designer (artwork_id, artwork_title, 
                    year_created, serial_number, price, discount_price)
                    VALUES(DEFAULT, :art);`;

const artworkDelete = `DELETE FROM designer
                    WHERE artwork_id = :artwork_id;`;

export default {
  artworkGet, artworkPut, artworkPost, artworkDelete
};
