const get = 'SELECT * FROM price';
const post = 'INSERT INTO price  (price_id,price_website,listed_price) VALUES(:price_id, :price_website, :listed_price)';
const put = 'UPDATE price SET price_website= :price_website,listed_price= :listed_price WHERE price_id= :price_id';
const remove = 'DELETE FROM price WHERE price_id= :price_id';

export default {
  get,
  put,
  post,
  remove,
};
