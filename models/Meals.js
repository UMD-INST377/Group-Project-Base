export default (sequelize, DataTypes) => {
  const meals = sequelize.define(
    'meals',
    {
      meal_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      meal_name: {
        type: DataTypes.STRING
      },
      meal_category: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return meals;
};
