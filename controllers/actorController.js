const actor = {
  getActor: 'SELECT * FROM actors',
  putActor: 'UPDATE actors SET name = :name WHERE id = :id',
  postActor: '',
  deleteActor: ''
}

export default actor;
