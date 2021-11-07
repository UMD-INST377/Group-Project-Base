export default 'SELECT film_id,film_title,actor_id,actor_name FROM films join actors_linking using (film_id) join actors using (actor_id);';
