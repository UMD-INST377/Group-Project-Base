export default (sequelize, DataTypes) => {
  const MealsLocations = sequelize.define(
    'meals_locations',
    {
      hall_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'dining_hall',
          key: 'hall_id'
        }
      },
      meal_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'meals',
          key: 'meal_id'
        }
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  MealsLocations.removeAttribute('id');
  return MealsLocations;
};