const film = {
  getFilm: 'SELECT * FROM films',
  getByID: 'SELECT DISTINCT name FROM films f  inner JOIN genres g  on f.genre_id = g.genre_id WHERE g.genre = :id LIMIT 30',
  putFilm: 'UPDATE films SET name = :name WHERE film_id = :id',
  postFilm: 'UPDATE films SET name = :name WHERE film_id = :id',
  deleteFilm: 'DELETE FROM films WHERE film_id = :id',
};
export default film;
