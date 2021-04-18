export default (database, DataTypes) => {
    const Genres = database.define(
      'Genres',
      {
        genre_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        genre: {
          type: DataTypes.STRING
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return Genres;
  };