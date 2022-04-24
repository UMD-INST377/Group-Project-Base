const custGet = `SELECT customer_id, first_name, last_name,          
                        credit_info, email_address, street_address, city, state, zip_code, payment_date
                    FROM customer`;

const custPut = `UPDATE customer
                    SET art = :art
                    WHERE customer_id = :customer_id;`;

const custPost = `INSERT INTO customer (customer_id, first_name, last_name,     
                    credit_info, email_address, street_address, city, state, zip_code, payment_date)
                VALUES(DEFAULT, :art);`;

const custDelete = `DELETE FROM customer
                    WHERE customer_id = :customer_id;`;

export default {
  custGet, custPut, custPost, custDelete
};
