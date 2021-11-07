export default (sequelize, DataTypes) => {
  const Example = sequelize.define(
    'Example',
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
    {
      freezeTableName: true,
      timestamps: false
    }
  );
  
  return Example;
};
