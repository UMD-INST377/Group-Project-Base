const magnitudeData = {
    getMagnitude: 'SELECT * FROM magnitude WHERE earthquake_id = :id',
    putMagnitude: 'UPDATE magnitude SET magnitude = :magnitude WHERE earthquake_id = :id',
    postMagnitude: 'UPDATE magnitude SET magnitude = :magnitude WHERE earthquake_id = :id',
    deleteMagnitude: 'DELETE FROM magnitude WHERE earthquake_id = :id',
};

export default magnitudeData;