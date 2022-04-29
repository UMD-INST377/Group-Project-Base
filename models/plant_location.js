/* eslint-disable camelcase */
export default (database, DataTypes) => {
  const plant_location = database.define(
    'plant_location',
    {
      plant_location_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      plant_location_name: {
        type: DataTypes.STRING
      },
      plant_location_address: {
        type: DataTypes.STRING
      },
      plant_location_lat: {
        type: DataTypes.DECIMAL
      },
      plant_location_long: {
        type: DataTypes.DECIMAL
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return plant_location;
};