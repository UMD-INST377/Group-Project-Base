const date = {
    getDate: 'SELECT * FROM date',
    getDateByID: 'SELECT * FROM date WHERE earthquake_id = :id',
    putDate: 'UPDATE date SET day_of = :date WHERE earthquake_id = :id'
}

export default date;