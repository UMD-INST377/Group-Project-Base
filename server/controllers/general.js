
const get = 'SELECT * FROM general_information';
const put = 'INSERT INTO general_information VALUES (99,NULL,NULL,NULL,NULL)';
const post = 'UPDATE platforms SET game_name=NULL,release_date=NULL,free_to_play=NULL,player_population=NULL WHERE game_id = 1';
const remove = 'DELETE FROM platforms WHERE game_id=99';
                
export default {
    get, put, post, remove
        };           