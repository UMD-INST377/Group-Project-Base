const magnitudeData = {
    getMagnitude: 'SELECT * FROM magnitude',
    putMagnitude: 'UPDATE magnitude SET magnitude = :magnitude WHERE earthquake_id = :id',
    postMagnitude: 'INSERT INTO magnitude VALUES(:magnitude,:id)',
    deleteMagnitude: 'DELETE FROM magnitude WHERE earthquake_id = :id',
};

export default magnitudeData;