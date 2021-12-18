const all = {
    getAll: 'SELECT * FROM date INNER JOIN cities ON date.earthquake_id = cities.earthquake_id INNER JOIN magnitude ON cities.earthquake_id = magnitude.earthquake_id',
    getByID: 'SELECT * FROM date INNER JOIN cities ON date.earthquake_id = cities.earthquake_id INNER JOIN magnitude ON cities.earthquake_id = magnitude.earthquake_id WHERE date.earthquake_id = :id',
    postAll: `START TRANSACTION;
    INSERT INTO cities VALUES(:id,:city);
    INSERT INTO date VALUES(:id,:date,:time);
    INSERT INTO magnitude VALUES(:magnitude,:id);
    COMMIT;`,
    putAll: `START TRANSACTION;
    UPDATE cities SET City = :city WHERE earthquake_id = :id;
    UPDATE date SET day_of = :date WHERE earthquake_id = :id;
    UPDATE magnitude SET magnitude = :magnitude WHERE earthquake_id = :id;
    COMMIT;`,
    deleteAll: `START TRANSACTION;
    DELETE FROM cities WHERE earthquake_id = :id;
    DELETE FROM date WHERE earthquake_id = :id;
    DELETE FROM magnitude WHERE earthquake_id = :id;
    COMMIT;`
}

export default all;