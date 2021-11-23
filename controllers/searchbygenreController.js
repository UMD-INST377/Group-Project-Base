export default `SELECT film_title, imdb_rating FROM films
JOIN genre USING(genre_id)
WHERE genre = :genre`;
