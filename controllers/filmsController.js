export default `SELECT film_id,
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