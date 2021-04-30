module.exports = (database, DataTypes) => {
  const actorHasMovies = database.define(
    'actor_has_movies',
    {
      actor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return actorHasMovies;
};
