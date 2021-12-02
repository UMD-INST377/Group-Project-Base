const get = 'SELECT * FROM general_information';
const post = 'INSERT INTO general_information VALUES (game_id= :game_id,game_name= :name, free_to_play= :free_to_play,player_population= :population)';
const put = 'UPDATE general_information SET game_name= :name, free_to_play= :free_to_play,player_population= :population WHERE game_id = :game_id';
const remove = 'DELETE FROM general_information WHERE game_id= :game_id';

export default {
  get,
  put,
  post,
  remove,
};
