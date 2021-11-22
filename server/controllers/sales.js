const get = 'SELECT * FROM sales';
const insert = 'INSERT INTO sales VALUES(99,1,NULL,NULL,NULL)';
const update = 'UPDATE sales SET budget=NULL,earnings=NULL,annual_sales=NULL WHERE sales_id=99';
const remove = 'DELETE FROM sales WHERE sales_id=99';

export default {
  get, insert, update, remove
};