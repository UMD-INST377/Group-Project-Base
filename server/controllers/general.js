const get = 'SELECT * FROM general_information';
const put = 'INSERT INTO general_information VALUES (99,"fifa","jan","idk","12222")';
const post = 'UPDATE platforms SET game_name="fifa",release_date="jun",free_to_play="idk",player_population="322" WHERE game_id = 1';
const remove = 'DELETE FROM general_information WHERE game_id=99';

export default {
  get, put, post, remove
};