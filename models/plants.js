export default (database, DataTypes) => {
  const plants = database.define(
    'plants',
    {
      plants_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      plants_name: {
        type: DataTypes.STRING
      },
      plants_address: {
        type: DataTypes.STRING
      },
      plants_lat: {
        type: DataTypes.DECIMAL
      },
      plants_long: {
        type: DataTypes.DECIMAL
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return plants;
};
