const all = {
    getAll: 'SELECT * FROM date INNER JOIN cities ON date.earthquake_id = cities.earthquake_id INNER JOIN magnitude ON cities.earthquake_id = magnitude.earthquake_id',
    getByID: 'SELECT * FROM date INNER JOIN cities ON date.earthquake_id = cities.earthquake_id INNER JOIN magnitude ON cities.earthquake_id = magnitude.earthquake_id WHERE date.earthquake_id = :id'
}

export default all;