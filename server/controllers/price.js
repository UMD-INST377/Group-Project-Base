const get = 'SELECT * FROM price';
const put = 'INSERT INTO price VALUES (price_id=:price_id,price_website= :price_website,listed_price= :listed_price)';
const post = 'UPDATE price SET price_website= :price_website,listed_price= :listed_price WHERE price_id= :price_id';
const remove = 'DELETE FROM price WHERE price_id= :price_id';

export default {
  get,
  put,
  post,
  remove,
};
