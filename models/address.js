// Sravya
export default (database, DataTypes) => {
  const address = database.define(
    'address',
    {
      address_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      address_1: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address_2: {
        type: DataTypes.STRING,
        allowNull: true
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false
      },
      zip_code: {
        type: DataTypes.STRING,
        allowNull: false
      },
      restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return address;
};
