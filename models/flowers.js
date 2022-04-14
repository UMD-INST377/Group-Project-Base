export default (database, DataTypes) => {
    const flowers = database.define(
      'flowers',
      {
        flower_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        flower_name: {
          type: DataTypes.STRING
        },
        flower_address: {
          type: DataTypes.STRING
        },
        flower_lat: {
          type: DataTypes.DECIMAL
        },
        flower_long: {
          type: DataTypes.DECIMAL
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return flowers;
  };