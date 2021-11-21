export default (sequelize, DataTypes) => {
  const price = sequelize.define(
    'price',
    {
      price_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      price_website: {
        type: DataTypes.TEXT,
      },
      listed_price: {
        type: DataTypes.DOUBLE,
      },
    },
    { freezerTableName: true, timestamps: false }
  );
  return price;
};