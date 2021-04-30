module.exports = (sequelize, DataTypes) => {
  const earnings = sequelize.define(
    'earnings',
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      earnings_gross: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      budget: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return earnings;
};