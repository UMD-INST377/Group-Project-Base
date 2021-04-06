export default (database, DataTypes) => {
    const bookDescription = database.define (
        'book_description',
        {
            description_id: {
                type: DataTypes.INTEGER,
                allownull: false,
                primaryKey: true
            },
            book_description: {
                type: DataTypes.STRING,
                allownull: true,
            }
        },
    );
    return bookDescription;
};