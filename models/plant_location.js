export default (database, DataTypes) => {
  const plantLocation = database.define(
    'plantLocation',
    {
      plantLocation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      plantLocation_name: {
        type: DataTypes.STRING
      },
      plantLocation_address: {
        type: DataTypes.STRING
      },
      plantLocation_lat: {
        type: DataTypes.DECIMAL
      },
      plantLocation_long: {
        type: DataTypes.DECIMAL
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return plantLocation;
};