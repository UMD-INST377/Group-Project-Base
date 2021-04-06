export default (database, DataTypes) => {
    const genre_has_popular_books = database.define (
        'genre_has_popular_books',
        {
            genre_genre_id: {
                type: DataTypes.INTEGER,
                allownull: false,
                primaryKey: true
            },
            popular_books_book_id: {
                type: DataTypes.INTEGER,
                allownull: false,
            }
        },
    );
    return genre_has_popular_books;
};