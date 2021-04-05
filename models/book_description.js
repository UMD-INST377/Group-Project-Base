export default (database, DataTypes) => {
    const book_description = database.define (
        'book_description',
        {
            description_id: {
                type: DataTypes.INTEGER,
                allownull: false,
                primaryKey: true
            },
            book_description: {
                type: DataTypes.varchar,
            }
        },
    );
    return book_description;
};