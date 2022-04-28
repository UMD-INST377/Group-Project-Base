export default (sequelize, DataTypes) => {
  const MealRestrictions = sequelize.define(
    'meal_restrictions',
    {
      meal_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      restriction_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return MealRestrictions;
};