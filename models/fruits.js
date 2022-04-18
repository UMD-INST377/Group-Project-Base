export default (database, DataTypes) => {
    const fruits = database.define(
      'fruits',
      {
        fruits_id: {
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
          type: DataTypes.DECIMAL
        }
      },
      { freezeTableName: true, timestamps: false }
    );
    return fruits;
  };
