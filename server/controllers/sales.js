const get = 'SELECT * FROM sales';
const insert = 'INSERT INTO sales (sales_id, annual_sales, earnings) VALUES (:sales_id, :annual_sales, :earnings)';
const update = 'UPDATE sales SET earnings= :earnings,annual_sales= :annual_sales WHERE sales_id= :sales_id';
const remove = 'DELETE FROM sales WHERE sales_id= :sales_id';

export default {
  get, insert, update, remove
};