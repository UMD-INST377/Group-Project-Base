const director = {
    getDirector: 'SELECT * FROM directors',
    putDirector: 'UPDATE directors SET director = :name WHERE director_id = :id',
    postDirector: 'UPDATE directors SET director = :name WHERE director_id = :id',
    deleteDirector: 'DELETE FROM directors WHERE director_id = :id',
  }
  
  export default director;