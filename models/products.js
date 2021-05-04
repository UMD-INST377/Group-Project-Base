export default (sequelize, DataTypes) => {
  const products = sequelize.define(
    'products',
    {
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      product_description: {
        type: DataTypes.STRING // .TEXT
      },
      product_color: {
        type: DataTypes.STRING
      },
      product_unit_price: {
        type: DataTypes.FLOAT
      },
      family_id: {
        type: DataTypes.INTEGER
      },
      category_id: {
        type: DataTypes.INTEGER
      },
      image_link: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return products;
};
