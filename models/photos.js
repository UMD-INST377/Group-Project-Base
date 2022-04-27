export default (database, DataTypes) => {
    const photos = database.define(
      'photos',
      {
        photos_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        photos_name: {
          type: DataTypes.STRING
        },
        photos_address: {
          type: DataTypes.STRING
        },
        photos_lat: {
          type: DataTypes.DECIMAL
        },
        photos_long: {
          type: DataTypes.DECIMAL
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return photos;
  };
