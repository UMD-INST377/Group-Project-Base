const custGet = `SELECT customer_id, first_name, last_name,          
                        credit_info, email_address, street_address, city, state, zipcode, payment_date
                    FROM design`;

const custPut = `UPDATE customers
                    SET art = :art
                    WHERE customer_id = :customer_id;`;

const custPost = `INSERT INTO customers (customer_id, first_name, last_name,     
                    credit_info, email_address, street_address, city, state, zipcode, payment_date)
                VALUES(DEFAULT, :art);`;

const custDelete = `DELETE FROM customers
                    WHERE customer_id = :customer_id;`;

export default {
  custGet, custPut, custPost, custDelete
};
