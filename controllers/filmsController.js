const filmGet = `SELECT film_id,
  film_title,
  release_date,
  director_name,
  imdb_rating,
  genre
FROM films f
  INNER JOIN directors d
    USING(director_id)
  INNER JOIN genre g
    USING(genre_id)`;

const filmPut = `UPDATE films 
  SET film_title = :film_title, release_date = :release_date, genre_id = :genreid
  WHERE film_id = :filmid`;

const filmPost = `INSERT INTO films (film_id, film_title, release_date, genre_id) 
  VALUES (:currentId, :film_title, :release_date, :genreid)`;

const filmDelete = `DELETE FROM films 
  WHERE film_id = :filmid`;

export default {
  filmGet, filmPut, filmPost, filmDelete
};