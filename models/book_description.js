export default (database, DataTypes) => {
    const BookDescription = database.define (
        'book_description',
        {
            description_id: {
                type: DataTypes.INTEGER,
                allownull: false,
                primaryKey: true
            },
            book_description: {
                type: DataTypes.varchar,
                allownull: true,
            }
        },
    );
    return BookDescription;
};