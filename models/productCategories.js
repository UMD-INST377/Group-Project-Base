export default (sequelize, DataTypes) => {
  const productCategories = sequelize.define(
    'product_categories',
    {
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      category_name: {
        type: DataTypes.STRING
      },
      category_description: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return productCategories;
};
