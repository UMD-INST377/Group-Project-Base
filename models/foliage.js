export default (database, DataTypes) => {
    const foliage = database.define(
      'foliage',
      {
        foliage_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        foliage_name: {
          type: DataTypes.STRING
        },
        foliage_address: {
          type: DataTypes.STRING
        },
        foliage_lat: {
          type: DataTypes.DECIMAL
        },
        foliage_long: {
          type: DataTypes.DECIMAL
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return foliage;
  };
