const get = 'SELECT * FROM price';
const put = 'INSERT INTO price VALUES (99,1,"https://www.callofduty.com/blackopscoldwar/buy",59.99)';
const post = 'UPDATE price SET price_website="https://www.callofduty.com/blackopscoldwar/buy",listed_price=59.99 WHERE price_id=99';
const remove = 'DELETE FROM platforms WHERE price_id=99';

export default {
  get, put, post, remove
};