export default `'SELECT *
From awards a
INNER JOIN awards_linking al
    USING(award_id)
INNER JOIN films f1
    USING(film_id)`;