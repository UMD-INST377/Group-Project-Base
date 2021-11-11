const get = 'SELECT * FROM platforms';
const put = 'INSERT INTO platforms VALUES (99,1,FALSE,FALSE,FALSE,FALSE,FALSE)';
const post = 'UPDATE platforms SET PC=FALSE,Playstation=FALSE,Xbox=FALSE,Switch=FALSE,Mobile=FALSE WHERE platform_id=99';
const remove = 'DELETE FROM platforms WHERE platform_id=99';

export default {
  get, put, post, remove
};