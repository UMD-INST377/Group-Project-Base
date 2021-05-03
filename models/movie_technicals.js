module.exports = (sequelize, DataTypes) => {
  const movie_technicals = sequelize.define(
    'movie_technicals',
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      color: {
        type: DataTypes.STRING
      },
      duration: {
        type: DataTypes.INTEGER
      },
      aspect_ratio: {
        type: DataTypes.FLOAT
      },

    },
    { freezeTableName: true, timestamps: false }
  );
  return movie_technicals;
};