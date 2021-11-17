// the actors table shows the actor and the respective film that
// they play in
export default `SELECT * FROM actors a 
JOIN actors_linking al
   ON a.actor_id = al.actor_id
JOIN films f 
   ON al.film_id = f.film_id
`;
