const get = 'SELECT * FROM outlet';
const post = 'INSERT INTO outlet (outlet_id,company_name,street_address,city,state,zipcode) VALUES (:outlet_id,:company_name,:street_address,:city,:state,:zipcode)';
const put = 'UPDATE outlet SET company_name= :company_name,street_address= :street_address, city = :city, state = :state, zipcode =:zipcode WHERE outlet_id= :outlet_id';
const remove = 'DELETE FROM outlet WHERE outlet_id= :outlet_id';

export default {
  get,
  put,
  post,
  remove,
};
