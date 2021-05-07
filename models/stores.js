export default (sequelize, DataTypes) => {
  const stores = sequelize.define(
    'stores',
    {
      store_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      store_address_line1: {
        type: DataTypes.STRING
      },
      store_city: {
        type: DataTypes.STRING
      },
      store_state: {
        type: DataTypes.STRING
      },
      store_zip_code: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return stores;
};
