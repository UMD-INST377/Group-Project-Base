// getting the top100 from our database
export default `SELECT film_title, imdb_rating
    FROM films
    ORDER BY imdb_rating DESC
    LIMIT 100
  `;