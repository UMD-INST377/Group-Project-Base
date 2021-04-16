export default (sequelize, DataTypes) => {
  const Macros = sequelize.define(
    'Macros',
    {
      macro_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      calories: {
        type: DataTypes.DOUBLE
      },
      serving_size: {
        type: DataTypes.DOUBLE
      },
      cholesterol: {
        type: DataTypes.INTEGER
      },
      sodium: {
        type: DataTypes.DOUBLE
      },
      carbs: {
        type: DataTypes.DOUBLE
      },
      protein: {
        type: DataTypes.DOUBLE
      },
      meal_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fat: {
        type: DataTypes.DOUBLE
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Macros;
};
