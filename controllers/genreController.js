const genre = {
  getGenre: 'SELECT * FROM genres',
  putGenre: 'UPDATE genres SET actor = :name WHERE genre_id = :id',
  postGenre: 'UPDATE genres SET actor = :name WHERE genre_id = :id',
  deleteGenre: 'DELETE FROM genres WHERE genre_id = :id',
};
export default actor;