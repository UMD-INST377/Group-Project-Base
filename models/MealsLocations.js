export default (sequelize, DataTypes) => {
  const MealsLocation = sequelize.define(
    'meals_locations',
    {
      hall_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      meal_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return MealsLocation;
};
