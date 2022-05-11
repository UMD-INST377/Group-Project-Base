export default (sequelize, DataTypes) => {
  const customer = sequelize.define(
    'customer',
    {
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      credit_info: {
        type: DataTypes.INTEGER
      },
      email: {
        type: DataTypes.STRING
      },
      street_address: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      },
      state: {
        type: DataTypes.STRING
      },
      zip_code: {
        type: DataTypes.INTEGER
      },
      payment_date: {
        type: DataTypes.DATE
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return customer;
};
