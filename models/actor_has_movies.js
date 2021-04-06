export default (database, DataTypes) => {
  const actorHasMovies = database.define(
    'Dining_Hall',
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
