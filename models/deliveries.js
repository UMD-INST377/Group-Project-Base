export default (sequelize, DataTypes) => {
    const deliveries = sequelize.define(
      'deliveries',
      {
        delivery_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        customer_address: {
          type: DataTypes.STRING
        },
        stores_store_id: {
            type: DataTypes.INTEGER
        },
        customer_id: {
            type: DataTypes.INTEGER
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return deliveries;
  };
  