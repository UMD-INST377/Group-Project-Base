export default (database, DataTypes) => {

    const fruits = database.define(
      'fruits',
      {
        fruits_id: {

    const location = database.define(
      'location',
      {
        location_id: {

          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },

        fruits_name: {
          type: DataTypes.STRING
        },
        fruits_address: {
          type: DataTypes.STRING
        },
        fruits_lat: {
          type: DataTypes.DECIMAL
        },
        fruits_long: {

        location_name: {
          type: DataTypes.STRING
        },
        location_address: {
          type: DataTypes.STRING
        },
        location_lat: {
          type: DataTypes.DECIMAL
        },
        location_long: {

          type: DataTypes.DECIMAL
        }
      },
      { freezeTableName: true, timestamps: false }
    );

    return fruits;
  };

    return location;
  };

