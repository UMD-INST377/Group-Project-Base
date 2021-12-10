const city = {
    getCity: 'SELECT * FROM cities',
    putCity: 'UPDATE cities SET City = :city WHERE earthquake_id = :id',
    postCity: 'INSERT INTO cities VALUES(:id,:city)',
    deleteCity: 'DELETE FROM cities WHERE earthquake_id = :id'
}

export default city;