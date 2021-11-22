const customFilmActor = `SELECT GROUP_CONCAT(actor_name SEPARATOR ', ') AS actors, 
    film_title, 
    film_id
FROM films f
    JOIN actors_linking al 
        USING(film_id)
    JOIN actors a
        ON a.actor_id = al.actor_id
GROUP BY film_id
HAVING film_id = :filmid`;

const customAwardsFilm = `SELECT film_title, 
    GROUP_CONCAT(award_title SEPARATOR ', ') AS awards, 
    COUNT(*) AS "Number of Awards"
FROM films f
    JOIN awards_linking al
        USING(film_id)
    JOIN awards a
        ON al.award_id = a.award_id
WHERE award_won = 1
GROUP BY film_id`;

export default {customFilmActor, customAwardsFilm};