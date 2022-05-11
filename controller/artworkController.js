const artworkGet = `SELECT artwork_id, artwork_title, year_created,          
                        serial_number, price, discount_price
                    FROM artwork`;

const artworkPut = `UPDATE artwork
                    WHERE artwork_id: req.body.artwork_id;`;

const artworkPost = `INSERT INTO artwork (artwork_id, artwork_title, 
                    year_created, serial_number, price, discount_price)
                    VALUES(DEFAULT, :art);`;

const artworkDelete = `DELETE FROM artwork
                    WHERE artwork_id = :artwork_id;`;

export default {
  artworkGet, artworkPut, artworkPost, artworkDelete
};
