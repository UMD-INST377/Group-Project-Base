// Sravya
export default (database, DataTypes) => {
  const customers = database.define(
    'customers',
    {
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return customers;
};
