export default (sequelize, DataTypes) => {
  const orders = sequelize.define(
    'orders',
    {
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      item_id: {
        type: DataTypes.STRING
      },
      delivery_id: {
        type: DataTypes.INTEGER
      },
      customer_id: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return orders;
};
