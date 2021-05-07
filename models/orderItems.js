export default (sequelize, DataTypes) => {
  const orderItems = sequelize.define(
    'order_items',
    {
      order_item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      order_id: {
        type: DataTypes.INTEGER
      },
      product_id: {
        type: DataTypes.INTEGER
      },
      item_price: {
        type: DataTypes.FLOAT
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return orderItems;
};
