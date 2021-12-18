const get = 'SELECT * FROM publisher';
const post = 'INSERT INTO publisher (publisher_id, publisher_game_id ,publisher_name) VALUES (:publisher_id,:publisher_game_id,:publisher_name)';
const put = 'UPDATE publisher SET publisher_name= :publisher_name, publisher_game_id= :publisher_game_id WHERE publisher_id= :publisher_id';
const remove = 'DELETE FROM publisher WHERE publisher_id= :publisher_id';

export default {
  get,
  put,
  post,
  remove,
};