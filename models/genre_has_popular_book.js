export default (database, DataTypes) => {
    const genreHasPopularBooks = database.define (
        'genre_has_popular_books',
        {
            genre_genre_id: {
                type: DataTypes.INTEGER,
                allownull: false
            },
            popular_books_book_id: {
                type: DataTypes.INTEGER,
                allownull: false
            }
        },
    );
    return genreHasPopularBooks;
};