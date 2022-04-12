export default (database, DataTypes) => {
  const DiningHall = database.define(
    'Dining_Hall',
    {
      hall_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      hall_name: {
        type: DataTypes.STRING
      },
      hall_address: {
        type: DataTypes.STRING
      },
      hall_lat: {
        type: DataTypes.DECIMAL
      },
      hall_long: {
        type: DataTypes.DECIMAL
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return DiningHall;
};
