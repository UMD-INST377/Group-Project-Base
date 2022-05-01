const get = 'SELECT * FROM tracks';
const post = 'INSERT INTO tracks (track_id, track_name,published_date,popularity) VALUES (:track_id,:track_name,:published_date,:popularity)';
const put = 'UPDATE tracks SET track_name= :track_name,published_date= :published_date,popularity= "popularity WHERE track_id= :track_id';
const remove = 'DELETE FROM tracks WHERE track_id= :track_id';

export default {
  get,
  put,
  post,
  remove,
};
