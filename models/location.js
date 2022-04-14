export default (database, DataTypes) => {
    const location = database.define(
      'location',
      {
        location_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
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
    return location;
  };
