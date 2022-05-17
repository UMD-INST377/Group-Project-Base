export default (sequelize, DataTypes) => {
  const MealRestrictions = sequelize.define(
    'meal_restrictions',
    {
      meal_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      restriction_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return MealRestrictions;
};
