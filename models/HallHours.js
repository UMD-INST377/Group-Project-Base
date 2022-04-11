export default (database, DataTypes) => {
  const HallHours = database.define(
    'Hall_Hours',
    {
      hall_hours_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      day: {
        type: DataTypes.VARCHAR
      },
      schedule_id: {
        type: DataTypes.VARCHAR
      },
      hall_id: {
        type: DataTypes.INTEGER
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return HallHours;
};
