module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
  const movieFinancals = sequelize.define(
=======
  const movieFinancials = sequelize.define(
>>>>>>> 96a1452f075cd1badee0cb93524e08e24c68983b
    'movie_financials',
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      gross: {
        type: DataTypes.INTEGER
      },
      budget: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return movieFinancials;
};