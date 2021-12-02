const genre = {
  getGenre: 'SELECT * FROM genres',
  putGenre: 'UPDATE genres SET genre = :name WHERE genre_id = :id',
  postGenre: 'UPDATE genres SET genre = :name WHERE genre_id = :id',
  deleteGenre: 'DELETE FROM genres WHERE genre_id = :id',
};

const getGenreByMovie = `SELECT  DISTINCT name, genre, film_id 
FROM films f INNER JOIN genres g
 ON f.genre_id = g.genre_id
WHERE f.genre_id = :id ;`;

export default {
  genre, 
getGenreByMovie
};