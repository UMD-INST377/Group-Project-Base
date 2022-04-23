// Sravya
export default (database, DataTypes) => {
  const linking = database.define(
    'linking',
    {
      restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false
        // primaryKey: true
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return linking;
};
