module.exports = (sequelize, DataTypes) => {
  const movieHasGenre = sequelize.define(
    'movie_technicals',
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return movieHasGenre;
};
