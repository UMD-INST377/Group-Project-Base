import deliveries from "./deliveries";
import orders from "./orders";

export default (sequelize, DataTypes) => {
  const customers = sequelize.define(
    'customers',
    {
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      restriction_type: {
        type: DataTypes.STRING
      },
      customer_last_name: {
        type: DataTypes.STRING
      },
      customer_email_address: {
        type: DataTypes.STRING
      },
      customer_address: {
        type: DataTypes.STRING
      },
      customer_city: {
        type: DataTypes.STRING
      },
      customer_state: {
        type: DataTypes.STRING
      },
      customer_zip_code: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return customers;
};