const get = 'SELECT * FROM general_information';
<<<<<<< HEAD
const put = 'INSERT INTO general_information VALUES (99,"fifa","jan",FALSE,"12222")';
const post = 'UPDATE general_information SET game_name="fifa",release_date="jun",free_to_play=FALSE,player_population="322" WHERE game_id = 1';
=======
const put = 'INSERT INTO general_information VALUES (99,"fifa","jan","idk","12222")';
const post = 'UPDATE general_information SET game_name="fifa",release_date="jun",free_to_play="idk",player_population="322" WHERE game_id = 1';
>>>>>>> ecd1051c8aa818df7eb61002c9d748fd96300082
const remove = 'DELETE FROM general_information WHERE game_id=99';

export default {
  get, put, post, remove
};