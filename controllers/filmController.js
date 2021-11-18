const film = {
    getFilm: 'SELECT * FROM films',
    putFilm: 'UPDATE films SET film = :name WHERE film_id = :id',
    postFilm: 'UPDATE films SET film = :name WHERE film_id = :id',
    deleteFilm: 'DELETE films actors WHERE film_id = :id',
  }
  
  export default film;
  