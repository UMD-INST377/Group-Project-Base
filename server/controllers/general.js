const get = 'SELECT * FROM general_information';
const put = 'INSERT INTO general_information VALUES (99,"fifa","jan","idk","12222")';
const post = 'UPDATE general_information SET game_name= :name, free_to_play= :free_to_play,player_population= :population WHERE game_id = :game_id';
const remove = 'DELETE FROM general_information WHERE game_id=99';

export default {
  get, put, post, remove
};