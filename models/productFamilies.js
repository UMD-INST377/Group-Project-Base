export default (sequelize, DataTypes) => {
  const productFamilies = sequelize.define(
    'product_families',
    {
      family_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      family_name: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return productFamilies;
};
