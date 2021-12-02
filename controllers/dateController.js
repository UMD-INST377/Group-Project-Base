const date = {
    getDate: 'SELECT * FROM date',
    putDate: 'UPDATE date SET day_of = :date, time = :time WHERE earthquake_id = :id',
    postDate: 'INSERT INTO date VALUES(:id,:date,:time)',
    deleteDate: 'DELETE FROM date WHERE earthquake_id = :id'
}

export default date;