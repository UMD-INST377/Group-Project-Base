export default (sequelize, DataTypes) => {
  const movie_genre_linking = sequelize.define(
    'movie_genre_linking',
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        primaryKey: true
      },
      genre_id: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return movie_genre_linking;
};
