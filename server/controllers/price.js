// const get = 'SELECT * FROM price';
// const put = 'INSERT INTO price VALUES (99,1,"https://www.callofduty.com/blackopscoldwar/buy",59.99)';
// const post = 'UPDATE price SET price_website="https://www.callofduty.com/blackopscoldwar/buy",listed_price=59.99 WHERE price_id=99';
// const remove = 'DELETE FROM price WHERE price_id=98';

// export default {
//   get,
//   put,
//   post,
//   remove,
// };

const get = 'SELECT * FROM price';

const put = `UPDATE price
SET price_website = :price_website, listed_price= :listed_price 
WHERE price_id = :price_id;`;

const post = `INSERT INTO price(price_id,price_website,listed_price) 
VALUES(DEFAULT, :price_website, :listed_price);`;

const remove = `DELETE FROM price
WHERE price_id = :price_id;`;

export default {
  get,
  put,
  post,
  remove,
};
