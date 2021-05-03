module.exports = (sequelize, DataTypes) => {
  const movieFinancals = sequelize.define(
    'movie_technicals',
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gross: {
        type: DataTypes.INTEGER,
      },
      budget: {
        type: DataTypes.INTEGER,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return movieFinancals;
};