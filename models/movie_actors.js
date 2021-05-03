module.exports = (sequelize, DataTypes) => {
  const movieActors = sequelize.define(
    'movie_actors',
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      actor_1_name: {
        type: DataTypes.STRING
      },
      actor_2_name: {
        type: DataTypes.STRING
      },
      actor_3_name: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return movieActors;
};
