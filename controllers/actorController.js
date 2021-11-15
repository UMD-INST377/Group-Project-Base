const actor = {
  getActor: 'SELECT * FROM actors',
  putActor: 'UPDATE actors SET actor = :name WHERE actor_id = :id',
  postActor: '',
  deleteActor: ''
}

export default actor;
