const film = {
  getFilm: 'SELECT * FROM films',
  putFilm: 'UPDATE films SET name = :name WHERE film_id = :id',
  postFilm: 'UPDATE films SET name = :name WHERE film_id = :id',
  deleteFilm: 'DELETE FROM films WHERE film_id = :id',
};
export default film;
