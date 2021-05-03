module.exports = (sequelize, DataTypes) => {
  const movieFinancials = sequelize.define(
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