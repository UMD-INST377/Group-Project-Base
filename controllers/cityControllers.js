const cityData = {
    getCity: 'SELECT * FROM city WHERE earthquake_id = :id',
    putCity: 'UPDATE city SET city = :city WHERE earthquake_id = :id',
    postCity: 'UPDATE city SET city = :city WHERE earthquake_id = :id',
    deleteCity: 'DELETE FROM city WHERE earthquake_id = :id',
};

export default cityData;