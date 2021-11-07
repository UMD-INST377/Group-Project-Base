// controller for actors goes here using regular SQL statement
// wanted to do a Left JOIN to get all the actors available in the 
// database regardless if there is a film to match
export default `SELECT actor_name
FROM actors a 
LEFT JOIN actors_linking al
   ON a.actor_id = al.actor_id
INNER JOIN films f 
   ON al.film_id = f.film_id
`;
