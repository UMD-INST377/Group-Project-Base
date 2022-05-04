export default (sequelize, DataTypes) => {
<<<<<<< HEAD
  const Meals = sequelize.define(
    'Meals_Locations',
    {
      hall_id: {
        type: DataTypes.INTEGER,
        allowNull: false
=======
  const MealsLocations = sequelize.define(
    'meals_locations',
    {
      hall_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
>>>>>>> main
      },
      meal_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return MealsLocations;
};
