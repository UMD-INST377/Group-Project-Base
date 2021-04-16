export default (sequelize, DataTypes) => {
  const Meals = sequelize.define(
    "Meals_Locations",
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
  return Meals;
};
