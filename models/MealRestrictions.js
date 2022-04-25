export default (sequelize, DataTypes) => {
  const MealRestrictions = sequelize.define(
    'meal_restrictions',
    {
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
